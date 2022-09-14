package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;

import java.util.List;

public interface AdminService {
    int getId(String email,String password);
    boolean login(String email,String password);

    CompanyDto addCompany(CompanyDto companyDto) throws CouponSystemException;
    CompanyDto updateCompany(int companyId, CompanyDto companyDto) throws CouponSystemException;
    void deleteCompany(int companyId) throws CouponSystemException;
    List<CompanyDto>getAllCompanies();
    CompanyDto getOneCompany(int companyId) throws CouponSystemException;

    CustomerDto addCustomer(CustomerDto customerDto) throws CouponSystemException;
    CustomerDto updateCustomer(int customerId, CustomerDto customerDto) throws CouponSystemException;
    void deleteCustomer(int customerId) throws CouponSystemException;
    List<CustomerDto>getAllCustomers();
    CustomerDto getOneCustomer(int customerId);
    List<CouponDto>getAllCoupons();
    List<CouponDto>getCouponsByMaxPrice(double maxPrice);
    List<CouponDto>getCouponsByCategory(Category category);

}
