package com.project.www.repository;

import com.project.www.domain.AddressVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AddressMapper {
    int register(AddressVO avo);

    List<AddressVO> getList();
}