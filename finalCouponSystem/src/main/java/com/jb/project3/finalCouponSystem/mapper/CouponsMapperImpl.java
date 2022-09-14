package com.jb.project3.finalCouponSystem.mapper;

import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
@Component

public class CouponsMapperImpl implements CouponMapper {

    @Override
    public CouponDto ToDTO(Coupon coupon) {
        if ( coupon == null ) {
            return null;
        }

        CouponDto.CouponDtoBuilder couponDto = CouponDto.builder();

        couponDto.notId( coupon.getId() );
        couponDto.notCompanyId(coupon.getCompanyId());
        couponDto.notAmount( coupon.getAmount() );
        couponDto.notPrice( coupon.getPrice() );
        couponDto.notCategory( coupon.getCategory() );
        couponDto.notTitle( coupon.getTitle() );
        couponDto.notImg( coupon.getImg() );
        couponDto.notDesc( coupon.getDesc() );
        couponDto.notStartDate( coupon.getStartDate() );
        couponDto.notEndDate( coupon.getEndDate() );

        return couponDto.build();
    }

    @Override
    public List<CouponDto> ListToDTO(List<Coupon> coupons) {
        if ( coupons == null ) {
            return null;
        }

        List<CouponDto> list = new ArrayList<CouponDto>( coupons.size() );
        for ( Coupon coupon : coupons ) {
            list.add( ToDTO( coupon ) );
        }

        return list;
    }

    @Override
    public Coupon ToDAO(CouponDto couponDto) {
        if ( couponDto == null ) {
            return null;
        }

        Coupon.CouponBuilder coupon = Coupon.builder();

        coupon.id( couponDto.getNotId() );
        coupon.companyId(couponDto.getNotCompanyId());
        coupon.amount( couponDto.getNotAmount() );
        coupon.price( couponDto.getNotPrice() );
        coupon.category( couponDto.getNotCategory() );
        coupon.title( couponDto.getNotTitle() );
        coupon.img( couponDto.getNotImg() );
        coupon.desc( couponDto.getNotDesc() );
        coupon.startDate( couponDto.getNotStartDate() );
        coupon.endDate( couponDto.getNotEndDate() );

        return coupon.build();
    }

    @Override
    public List<Coupon> ListToDAO(List<CouponDto> couponsDto) {
        if ( couponsDto == null ) {
            return null;
        }

        List<Coupon> list = new ArrayList<Coupon>( couponsDto.size() );
        for ( CouponDto couponDto : couponsDto ) {
            list.add( ToDAO( couponDto ) );
        }

        return list;
    }
}