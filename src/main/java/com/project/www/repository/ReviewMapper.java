package com.project.www.repository;

import com.project.www.domain.ReviewVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ReviewMapper {
    int register(ReviewVO reviewVO);

    List<ReviewVO> getReview(long id);

}