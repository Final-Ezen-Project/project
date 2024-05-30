package com.project.www.controller;

import com.siot.IamportRestClient.IamportClient;
import com.siot.IamportRestClient.exception.IamportResponseException;
import com.siot.IamportRestClient.response.IamportResponse;
import com.siot.IamportRestClient.response.Payment;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;
import java.util.Locale;

@Controller
@Slf4j
public class PaymentController {

    private IamportClient api;

    public PaymentController() {

        this.api = new IamportClient(
                "2045855176781372",
                "Ge0epYCqg47ZoTVdMM2eRUOqW2SOeHbiJw4E8e9nqGLP7N8BRXI0mWw1gsfvhunBq4fn2U2gCQUgBxWS");

    }

    @ResponseBody
    @RequestMapping(value = "/verifyIamprot/{imp_uid}")
    public IamportResponse<Payment> paymentByImpUid(
            Model model
            ,Locale locale
            ,HttpSession session
            ,@PathVariable(value = "imp_uid") String imp_uid) throws IamportResponseException
        ,IOException {

        log.info("정보 확인>>>{}",api.paymentByImpUid(imp_uid));

        return api.paymentByImpUid(imp_uid);
    }


}
