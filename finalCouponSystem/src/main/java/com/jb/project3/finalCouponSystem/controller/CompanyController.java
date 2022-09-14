package com.jb.project3.finalCouponSystem.controller;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponPayLoadDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.secur.TokenManager;
import com.jb.project3.finalCouponSystem.service.facade.CompanyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("company")
public class CompanyController {
    private final CompanyService companyService;
    private final TokenManager tokenManager;

    @PostMapping("/")
    @ResponseStatus(HttpStatus.CREATED)
    public CouponDto addCoupon(@RequestHeader("Authorization") UUID token, @RequestBody CouponPayLoadDto couponDto) throws CouponSecurityException, CouponSystemException {
        int id = tokenManager.getUserId(token);
        return companyService.addCoupon(id, new CouponDto(couponDto));
    }

    @PutMapping("/{id}")
    public CouponDto updateCoupon(@PathVariable("id") int couponId, @RequestHeader("Authorization") UUID token, @RequestBody CouponPayLoadDto couponDto) throws CouponSystemException, CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return companyService.updateCoupon(id, couponId,new CouponDto(couponDto));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCoupon(@RequestHeader("Authorization") UUID token, @PathVariable("id") int couponId) throws CouponSecurityException, CouponSystemException {
        int id = tokenManager.getUserId(token);
        companyService.deleteCoupon(id,couponId);
    }

    @GetMapping("coupons")
    public List<CouponDto> getCoupons(@RequestHeader("Authorization") UUID token) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return companyService.getCompanyCoupons(id);
    }

    @GetMapping("/coupons/category")
    public List<CouponDto> getCouponsByCategory(@RequestHeader("Authorization") UUID token, @RequestParam Category category) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return companyService.getCompanyCoupons(id, category);
    }

    @GetMapping("/coupons/price")
    public List<CouponDto> getCouponsByPrice (@RequestHeader("Authorization") UUID token, @RequestParam double maxPrice) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return companyService.getCompanyCoupons(id, maxPrice);
    }

    @GetMapping("/info")
    public CompanyDto Details(@RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        int id = tokenManager.getUserId(token);
        return companyService.getCompanyDetails(id);
    }

    @GetMapping("/count")
    public int getCouponCount(@RequestHeader("Authorization") UUID token) throws CouponSecurityException {
        int id = tokenManager.getUserId(token);
        return companyService.getCouponCount(id);
    }

}
