package com.jb.project3.finalCouponSystem.controller;

import com.jb.project3.finalCouponSystem.bins.dto.*;
import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.secur.TokenManager;
import com.jb.project3.finalCouponSystem.service.facade.AdminService;
import com.jb.project3.finalCouponSystem.service.loginSystem.ClientType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("/register/")
@RequiredArgsConstructor
public class RegisterController {
    private final AdminService adminService;
    @PostMapping("customer")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerDto login(@Valid @RequestBody CustomerPayLoadDto customerDto) throws CouponSecurityException, CouponSystemException {
        return adminService.addCustomer(new CustomerDto(customerDto));
    }
    @PostMapping("company")
    @ResponseStatus(HttpStatus.CREATED)
    public CompanyDto login(@Valid @RequestBody CompanyPayLoadDto companyDto) throws CouponSecurityException, CouponSystemException {
        return(adminService.addCompany(new CompanyDto(companyDto)));
    }
}
