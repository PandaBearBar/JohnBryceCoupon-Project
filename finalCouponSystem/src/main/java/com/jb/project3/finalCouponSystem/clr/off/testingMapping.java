package com.jb.project3.finalCouponSystem.clr.off;

import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.bins.entity.Company;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import com.jb.project3.finalCouponSystem.bins.entity.Customer;
import com.jb.project3.finalCouponSystem.mapper.CompanyMapper;
import com.jb.project3.finalCouponSystem.mapper.CouponMapper;
import com.jb.project3.finalCouponSystem.mapper.CustomerMapper;
import com.jb.project3.finalCouponSystem.repository.CompanyRepository;
import com.jb.project3.finalCouponSystem.repository.CouponRepository;
import com.jb.project3.finalCouponSystem.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Order(1)
@Component
@RequiredArgsConstructor
public class testingMapping implements CommandLineRunner {
    private final CompanyRepository companyRepository;
    private final CustomerRepository customerRepository;
    private final CouponRepository couponRepository;
    private final CompanyMapper companyMapper;
    private final CustomerMapper customerMapper;
    private final CouponMapper couponMapper;
    @Override
    public void run(String... args) throws Exception {
        Company company = Company.builder()
                .email("email")
                .password("password")
                .name("name")
                .build();
        Customer customer = Customer.builder()
                .firstName("f")
                .lastName("l")
                .email("e")
                .password("p")
                .build();
        Coupon coupon = Coupon.builder()
                .companyId(1)
                .desc("d")
                .title("t")
                .startDate(Date.valueOf(LocalDate.now()))
                .endDate(Date.valueOf(LocalDate.now().plusDays(1)))
                .img("i")
                .amount(1)
                .price(12.4)
                .category(Category.Electricity)
                .build();
        companyRepository.save(company);
        customerRepository.save(customer);
        couponRepository.save(coupon);
        System.out.println(companyMapper.ToDTO(companyRepository.getReferenceById(1)));
        couponRepository.addCouponPurchase(1,1);
        System.out.println(customerMapper.ToDTO(customerRepository.getReferenceById(1)));
        System.out.println(couponMapper.ToDTO(couponRepository.getReferenceById(1)));

    }
}
