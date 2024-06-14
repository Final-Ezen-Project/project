package com.project.www.domain;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Getter
@Setter
public class MemberCouponVO {
    private boolean useSate;
    private String useDate;
    private String customerId;
    private long couponId;
}