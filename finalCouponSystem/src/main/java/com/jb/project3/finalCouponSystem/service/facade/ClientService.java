package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.mapper.CompanyMapper;
import com.jb.project3.finalCouponSystem.mapper.CouponMapper;
import com.jb.project3.finalCouponSystem.mapper.CustomerMapper;
import com.jb.project3.finalCouponSystem.repository.CompanyRepository;
import com.jb.project3.finalCouponSystem.repository.CouponRepository;
import com.jb.project3.finalCouponSystem.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;

public abstract class ClientService {
    @Autowired
    protected CustomerRepository customerRepository;
    @Autowired
    protected CouponRepository couponRepository;
    @Autowired
    protected CompanyRepository companyRepository;
    @Autowired
    protected CompanyMapper companyMapper;
    @Autowired
    protected CustomerMapper customerMapper;
    @Autowired
    protected CouponMapper couponMapper;
    public abstract boolean login(String email, String password) throws CouponSecurityException;
    public abstract int getId(String email, String password);
}
