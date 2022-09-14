package com.jb.project3.finalCouponSystem.controller;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponPayLoadDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.secur.TokenManager;
import com.jb.project3.finalCouponSystem.service.facade.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("customer")
public class CustomerController {
    private final CustomerService customerService;
    private final TokenManager tokenManager;
    @PutMapping("/purchase/{couponId}")
    public CouponDto purchaseCoupon(@RequestHeader("Authorization") UUID token,@PathVariable int couponId, @RequestBody CouponPayLoadDto couponDto) throws CouponSystemException, CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return customerService.purchaseCoupon(id,couponId ,new CouponDto(couponDto));
    }
    @PutMapping("/refund/{couponId}")
    public CouponDto refundCoupon (@RequestHeader("Authorization") UUID token,@PathVariable int couponId,@RequestBody CouponPayLoadDto couponDto) throws CouponSystemException, CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return (customerService.refundCoupon(id,couponId,new CouponDto(couponDto)));
    }
    @GetMapping("/coupons")
    public List<CouponDto> getCouponList (@RequestHeader("Authorization") UUID token) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return customerService.getCustomerCoupons(id);
    }
    @GetMapping("/coupons/category")
    public List<CouponDto> getCouponListByCategory (@RequestHeader("Authorization") UUID token,@RequestParam Category category) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return customerService.getCustomerCoupons(id,category);
    }
    @GetMapping("/coupons/price")
    public List<CouponDto> getCouponListByMaxPrice (@RequestHeader("Authorization") UUID token,@RequestParam double maxPrice) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return customerService.getCustomerCoupons(id,maxPrice);
    }
    @GetMapping("/info")
    public CustomerDto Details(@RequestHeader("Authorization") UUID token) throws CouponSystemException, CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return customerService.getCustomerDetails(id);
    }
    @GetMapping("/count")
    public int getCouponCount(@RequestHeader("Authorization") UUID token) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return customerService.getCouponsCount(id);
    }
}
