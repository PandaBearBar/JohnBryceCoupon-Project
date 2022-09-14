package com.jb.project3.finalCouponSystem.controller;

import com.jb.project3.finalCouponSystem.bins.dto.*;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.excapt.SecurityMsg;
import com.jb.project3.finalCouponSystem.secur.TokenManager;
import com.jb.project3.finalCouponSystem.service.facade.AdminService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("admin")
public class AdminController {
    private final TokenManager tokenManager;
    private final AdminService adminService;

    @PostMapping("/company")
    @ResponseStatus(HttpStatus.CREATED)
    public CompanyDto addCompany(@RequestHeader("Authorization") UUID token, @RequestBody CompanyPayLoadDto companyDto) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return(adminService.addCompany(new CompanyDto(companyDto)));
    }

    @PutMapping("/company/{companyId}")
    public CompanyDto updateCompany(@PathVariable int companyId, @RequestBody CompanyPayLoadDto companyDto, @RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        tokenManager.getUserId(token);
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return(adminService.updateCompany(companyId,new CompanyDto(companyDto)));
    }
    @DeleteMapping("/company/{companyId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCompany(@PathVariable int companyId,@RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        adminService.deleteCompany(companyId);
    }
    @GetMapping("/companies")
    public List<CompanyDto> getAllCompanies (@RequestHeader("Authorization") UUID token) throws CouponSecurityException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return adminService.getAllCompanies();
    }
    @GetMapping("/company/{companyId}")
    public CompanyDto getOneCompany(@PathVariable int companyId,@RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return adminService.getOneCompany(companyId);
    }
    @PostMapping("/customer")
    @ResponseStatus(HttpStatus.CREATED)
    public CustomerDto addCustomer(@RequestHeader("Authorization") UUID token, @RequestBody CustomerPayLoadDto customerDto) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return(adminService.addCustomer(new CustomerDto(customerDto)));
    }

    @PutMapping("/customer/{customerId}")
    public CustomerDto updateCustomer(@PathVariable int customerId, @RequestBody CustomerPayLoadDto customerDto, @RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return(adminService.updateCustomer(customerId,new CustomerDto(customerDto)));
    }
    @DeleteMapping("/customer/{customerId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCustomer(@PathVariable int customerId,@RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        adminService.deleteCustomer(customerId);
    }
    @GetMapping("/customers")
    public List<CustomerDto> getAllCustomers (@RequestHeader("Authorization") UUID token) throws CouponSecurityException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return adminService.getAllCustomers();
    }
    @GetMapping("/customer/{customerId}")
    public CustomerDto getOneCustomer(@PathVariable int customerId,@RequestHeader("Authorization") UUID token) throws CouponSecurityException, CouponSystemException {
        if (tokenManager.getUserId(token) != -1) throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        return adminService.getOneCustomer(customerId);
    }
    @GetMapping("/coupons")
    public List<CouponDto> getAllCoupons() {
        return adminService.getAllCoupons();
    }

    @GetMapping("/coupons/price")
    public List<CouponDto> getCouponListByMaxPrice (@RequestParam double maxPrice) throws CouponSecurityException {
        return adminService.getCouponsByMaxPrice(maxPrice);
    }
    @GetMapping("/coupons/category")
    public List<CouponDto> getCouponListByCategory (@RequestParam Category category) throws CouponSecurityException {
        return adminService.getCouponsByCategory(category);
    }
}

