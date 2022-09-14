package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;

import java.util.List;
public interface CompanyService {
    int getId(String email, String password);
    boolean login(String email, String password);
    CouponDto addCoupon(int id,CouponDto couponDto) throws CouponSystemException;
    CouponDto updateCoupon(int id ,int couponId ,CouponDto couponDto) throws CouponSystemException;
    void deleteCoupon(int id ,int couponId) throws CouponSystemException;
    List<CouponDto> getCompanyCoupons(int id );
    List<CouponDto> getCompanyCoupons(int id ,Category category);
    List<CouponDto> getCompanyCoupons(int id ,double maxPrice);
    CouponDto findSingleCoupon( int id ,int couponId) throws CouponSystemException;
    CompanyDto getCompanyDetails(int id ) throws CouponSystemException;
    int getCouponCount(int id);
}
