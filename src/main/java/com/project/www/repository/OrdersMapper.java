package com.project.www.repository;

import com.project.www.domain.OrdersVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrdersMapper {
    void register(OrdersVO ordersVO);

    List<OrdersVO> getMyOrdersProduct(String merchantUid);
}