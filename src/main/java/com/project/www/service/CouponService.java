package com.project.www.service;

import com.project.www.domain.CouponVO;

import java.util.List;

public interface CouponService {
    int insert(CouponVO cvo);

    List<CouponVO> getList();
}