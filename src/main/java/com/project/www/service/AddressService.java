package com.project.www.service;

import com.project.www.domain.AddressVO;

import java.util.List;

public interface AddressService {
    int register(AddressVO avo);

    List<AddressVO> getList();
}