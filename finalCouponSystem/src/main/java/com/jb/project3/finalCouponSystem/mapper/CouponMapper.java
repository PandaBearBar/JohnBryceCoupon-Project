package com.jb.project3.finalCouponSystem.mapper;

import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import org.mapstruct.InheritInverseConfiguration;

import java.util.List;


public interface CouponMapper {
    CouponDto ToDTO(Coupon coupon);
    List<CouponDto> ListToDTO(List<Coupon> coupons);
    @InheritInverseConfiguration
    Coupon ToDAO(CouponDto couponDto);
    List<Coupon> ListToDAO(List<CouponDto> couponsDto);
}

