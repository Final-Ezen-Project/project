package com.project.www.repository;

import com.project.www.domain.ProductVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ProductMapper {

    int insert(ProductVO productVO);

    long getProductId();

    ProductVO getDetail(long id);

    List<ProductVO> getMyRegisteredProduct(String id);

    int productQtyUpdate(ProductVO productVO);
}
