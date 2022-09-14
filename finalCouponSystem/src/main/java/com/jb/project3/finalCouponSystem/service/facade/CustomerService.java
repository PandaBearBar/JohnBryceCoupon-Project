package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import java.util.List;
import java.util.UUID;

public interface CustomerService {
    int getId(String email, String password);
    boolean login(String email, String password);
    CouponDto purchaseCoupon(int id,int couponId, CouponDto couponDto) throws CouponSystemException;
    CouponDto refundCoupon(int id,int couponId,CouponDto couponDto) throws CouponSystemException;
    List<CouponDto>getCustomerCoupons(int id);
    List<CouponDto>getCustomerCoupons(int id, Category category);
    List<CouponDto>getCustomerCoupons(int id, double maxPrice);
    CustomerDto getCustomerDetails(int id) throws CouponSystemException;
    int getCouponsCount(int id);
}
