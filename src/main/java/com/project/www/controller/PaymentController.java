package com.project.www.controller;

import com.mysql.cj.Session;
import com.project.www.config.oauth2.PrincipalDetails;
import com.project.www.domain.*;
import com.project.www.service.*;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.Payment;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@Controller
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/payment/*")
public class PaymentController {

    private final PaymentService psv;
    private final ImportService importService;
    private final NotificationService nsv;
    private final MemberCouponService mscv;
    private final CouponService csv;


    @ResponseBody
    @PostMapping("/post")
    public String paymentPost(@RequestBody PaymentDTO paymentDTO) {
        //log.info("결제DTO확인 ->>>{}",paymentDTO);

        return psv.post(paymentDTO);
    }

    @ResponseBody
    @PostMapping("/basketPost")
    public String basketPaymentPost(@RequestBody PaymentDTO paymentDTO) {
        //log.info("장바구니 결제 DTO 확인 >>>>{}",paymentDTO);

        return psv.basketPost(paymentDTO);
    }

    @ResponseBody
    @PostMapping("/saveMembershipPaymentInfo")
    public String saveMembershipPaymentInfo(@RequestBody PaymentDTO paymentDTO) {
        return psv.saveMembershipPaymentInfo(paymentDTO);
    }

    @GetMapping("/memberShipPaymentPopup")
    public void memberShipPaymentPopup() {
    }


    @PostMapping("/orders")
    public String order(@RequestParam("merchantUid") String merchantUid, Model model) {

        //나의 결제 상품 가져오기
        PaymentDTO paymentDTO = psv.getMyPaymentProduct(merchantUid);

        //내쿠폰 정보
        int couponCount = mscv.getCount(paymentDTO.getCustomerId());
        List<MemberCouponVO>mList = mscv.getMemberCouponList(paymentDTO.getCustomerId());
        log.info("내가가진{}", mList);
        List<CouponVO> couponList = new ArrayList<>();
        for(MemberCouponVO mcvo : mList) {
            long couponId = mcvo.getCouponId();
            CouponVO cvo = csv.getCouponList(couponId);
            couponList.add(cvo);
        }
        log.info("쿠폰{}", couponList);
        model.addAttribute("couponList", couponList);
        model.addAttribute("couponCount", couponCount);
        model.addAttribute("paymentDTO", paymentDTO);
        return "payment/orders";
    }

    //사전검증
    @ResponseBody
    @PostMapping("/prepare")
    public void prepare(@RequestBody PaymentDTO paymentDTO) throws IamportResponseException, IOException {
        log.info("사전검증 데이터 잘들어온지 확인<>>>>>>{}",paymentDTO);
        psv.usedPointAndCouponUpdate(paymentDTO);
        importService.postPrepare(paymentDTO);
    }

    //사후검증
    @ResponseBody
    @PostMapping("/validate")
    public Payment validatePayment(@RequestBody PaymentDTO paymentDTO) throws IamportResponseException, IOException {
        return importService.validatePaymnet(paymentDTO);
    }

    @ResponseBody
    @PostMapping("/successUpdate")
    public String successUpdatePayment(@RequestBody PaymentDTO paymentDTO) {

        int isOk = psv.paySuccessUpdate(paymentDTO);
        return isOk > 0 ? "paySuccessUpdate" : "payUpdateFail";
    }

    @ResponseBody
    @PutMapping("/membershipRegistrationCompletedUpdate")
    public String membershipRegistrationCompletedUpdate(@RequestBody PaymentDTO paymentDTO) {
        int isOk = psv.membershipRegistrationCompletedUpdate(paymentDTO);
        if (isOk > 0) {
            NotificationVO nvo = new NotificationVO();
            mscv.addCoupon(paymentDTO.getCustomerId(), "2");
            mscv.addCoupon(paymentDTO.getCustomerId(), "3");
            mscv.addCoupon(paymentDTO.getCustomerId(), "4");
            nvo.setCustomerId(paymentDTO.getCustomerId());
            nvo.setNotifyContent("멤버쉽가입 쿠폰3장이 발급완료되었습니다. ");
            nsv.insert(nvo);
        }
        return isOk > 0 ? "success" : "fail";
    }


    //결제 성공시 성공페이지 이동
    @GetMapping("/success/{merchantUid}")
    public String success(Model model, @PathVariable("merchantUid") String merchantUid) {


        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        PrincipalDetails principalDetails = (PrincipalDetails) authentication.getPrincipal();

        
        double memberShipPointeRate = 0;
        boolean isMemberShip =  principalDetails.getMStatus(); //멤버쉽 유무

        if(isMemberShip){ //멤버쉽일 경우
            memberShipPointeRate = 0.05;
        }else{
            memberShipPointeRate = 0.01;
        }


        PaymentDTO paymentDTO = psv.getMyPaymentProduct(merchantUid);
        paymentDTO.setOriginalPrice(Math.round(paymentDTO.getOriginalPrice() * memberShipPointeRate ));
        model.addAttribute("paymentDTO", paymentDTO);
        return "payment/success";
    }

    //환불
    @Transactional
    @ResponseBody
    @PostMapping("/refund")
    public String refund(@RequestBody OrdersVO ordersVO) {
        //log.info(">>>주문아이디확인>>>{}",ordersVO);

        return psv.refundUpdate(ordersVO);
    }

    @GetMapping("/addrModifyPopup")
    public String addrModifyPopup() {
        return "payment/addrModifyPopup";
    }

    @GetMapping("/newAddrAddPopup")
    public String newAddrAddPopup() {
        return "payment/newAddrAddPopup";
    }


}