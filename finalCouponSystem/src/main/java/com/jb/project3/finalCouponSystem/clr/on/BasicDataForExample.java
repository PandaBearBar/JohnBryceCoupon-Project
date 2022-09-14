package com.jb.project3.finalCouponSystem.clr.on;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.bins.entity.Company;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import com.jb.project3.finalCouponSystem.service.facade.AdminService;
import com.jb.project3.finalCouponSystem.service.facade.CompanyService;
import com.jb.project3.finalCouponSystem.service.facade.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class BasicDataForExample implements CommandLineRunner {
    private final AdminService adminService;
    private final CustomerService customerService;
    private final CompanyService companyService;

    @Override
    public void run(String... args) throws Exception {
        CompanyDto com1 = CompanyDto.builder()
                .notEmail("demo1@com.com")
                .notPassword("1234")
                .notName("Demo1")
                .build();
        CompanyDto com2 = CompanyDto.builder()
                .notEmail("demo2@com.com")
                .notPassword("1234")
                .notName("Demo2")
                .build();
        CompanyDto com3 = CompanyDto.builder()
                .notEmail("demo3@com.com")
                .notPassword("1234")
                .notName("Demo3")
                .build();

        CouponDto cop1 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo1")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo1")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop2 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Food)
                .notDesc("Demo2")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo2")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop3 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Restaurant)
                .notDesc("Demo3")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo3")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop4 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Vacation)
                .notDesc("Demo4")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo4")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop5 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo5")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo5")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop6 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo6")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo6")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop7 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo7")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo7")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop8 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo8")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo8")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop9 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo9")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo9")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();
        CouponDto cop10 = CouponDto.builder()
                .notAmount(8)
                .notCategory(Category.Electricity)
                .notDesc("Demo10")
                .notEndDate(Date.valueOf(LocalDate.now().plusMonths(1)))
                .notImg("image")
                .notPrice(20)
                .notTitle("Demo10")
                .notStartDate(Date.valueOf(LocalDate.now()))
                .build();

        CustomerDto cus1 = CustomerDto.builder()
                .notEmail("demo1@cus.com")
                .notPassword("1234")
                .notFirstName("Demo")
                .notLastName("1")
                .build();
        CustomerDto cus2 = CustomerDto.builder()
                .notEmail("demo2@cus.com")
                .notPassword("1234")
                .notFirstName("Demo")
                .notLastName("2")
                .build();
        CustomerDto cus3 = CustomerDto.builder()
                .notEmail("demo3@cus.com")
                .notPassword("1234")
                .notFirstName("Demo")
                .notLastName("3")
                .build();

        adminService.addCompany(com1);
        adminService.addCompany(com2);
        adminService.addCompany(com3);
        adminService.addCustomer(cus1);
        adminService.addCustomer(cus2);
        adminService.addCustomer(cus3);
        customerService.purchaseCoupon(1, 1, companyService.addCoupon(1, cop1));
        companyService.addCoupon(1, cop2);
        companyService.addCoupon(1, cop3);
        companyService.addCoupon(2, cop4);
        customerService.purchaseCoupon(1, 5, companyService.addCoupon(2, cop5));
        companyService.addCoupon(2, cop6);
        companyService.addCoupon(3, cop7);
        companyService.addCoupon(3, cop8);
        companyService.addCoupon(3, cop9);
        customerService.purchaseCoupon(1, 10, companyService.addCoupon(3, cop10));
    }
}
