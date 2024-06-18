package com.project.www.service;

import com.project.www.domain.MemberCouponVO;

import java.util.List;

public interface MemberCouponService {

    int addCoupon(String customerId, String couponId);

    List<MemberCouponVO> getMemberCouponList(String customerId);
}
