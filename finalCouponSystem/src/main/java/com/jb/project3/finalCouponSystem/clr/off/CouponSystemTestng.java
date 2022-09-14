package com.jb.project3.finalCouponSystem.clr.off;

import com.jb.project3.finalCouponSystem.bins.art.AsciiArt;
import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.service.facade.AdminService;
import com.jb.project3.finalCouponSystem.service.facade.CompanyService;
import com.jb.project3.finalCouponSystem.service.facade.CustomerService;
import com.jb.project3.finalCouponSystem.service.loginSystem.ClientType;
import com.jb.project3.finalCouponSystem.service.loginSystem.LoginManager;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
@Order(6)
@RequiredArgsConstructor
public class CouponSystemTestng /*implements CommandLineRunner */{
//    private final LoginManager loginManager;
//    @Override
//    public void run(String... args) throws Exception {
//        adminTime2Shine();
//        companyTime2Shine();
//        customerTime2Shine();
//    }
//    public void adminTime2Shine() throws CouponSystemException {
//        System.out.println(AsciiArt.LINE);
//        System.out.println(AsciiArt.ADMIN_LOGIN);
//        AdminService adminService =
//                (AdminService) loginManager.login("admin@admin.com", "admin", ClientType.Administrator);
//        CustomerDto customer1 = CustomerDto.builder()
//                .notFirstName("1")
//                .notLastName("1")
//                .notEmail("1@customr.com")
//                .notPassword("customer")
//                .build();
//        CustomerDto customer2 = CustomerDto.builder()
//                .notFirstName("2")
//                .notLastName("2")
//                .notEmail("2@customr.com")
//                .notPassword("customer")
//                .build();
//        CustomerDto customer3 = CustomerDto.builder()
//                .notFirstName("3")
//                .notLastName("3")
//                .notEmail("3@customr.com")
//                .notPassword("customer")
//                .build();
//        CustomerDto customer4 = CustomerDto.builder()
//                .notFirstName("4")
//                .notLastName("4")
//                .notEmail("4@customr.com")
//                .notPassword("customer")
//                .build();
//        CustomerDto customer5 = CustomerDto.builder()
//                .notFirstName("5")
//                .notLastName("5")
//                .notEmail("5@customr.com")
//                .notPassword("customer")
//                .build();
//        CompanyDto company1 = CompanyDto.builder()
//                .notName("1")
//                .notEmail("1@company.com")
//                .notPassword("company")
//                .build();
//        CompanyDto company2 = CompanyDto.builder()
//                .notName("2")
//                .notEmail("2@company.com")
//                .notPassword("company")
//                .build();
//        CompanyDto company3 = CompanyDto.builder()
//                .notName("3")
//                .notEmail("3@company.com")
//                .notPassword("company")
//                .build();
//        CompanyDto company4 = CompanyDto.builder()
//                .notName("4")
//                .notEmail("4@company.com")
//                .notPassword("company")
//                .build();
//        CompanyDto company5 = CompanyDto.builder()
//                .notName("5")
//                .notEmail("5@company.com")
//                .notPassword("company")
//                .build();
//        adminService.addCompany(company1);
//        adminService.addCompany(company2);
//        adminService.addCompany(company3);
//        adminService.addCompany(company4);
//        adminService.addCompany(company5);
//        adminService.getAllCompanies().forEach(System.out::println);
//        company1 = adminService.getOneCompany(1);
//        company1.setNotEmail("theNewEmail@company.com");
//        company1.setNotPassword("theNewPassword");
//        adminService.updateCompany(company1);
//        adminService.getAllCompanies().forEach(System.out::println);
//        adminService.deleteCompany(5);
//        adminService.getAllCompanies().forEach(System.out::println);
//        System.out.println(AsciiArt.LINE);
//        adminService.addCustomer(customer1);
//        adminService.addCustomer(customer2);
//        adminService.addCustomer(customer3);
//        adminService.addCustomer(customer4);
//        adminService.addCustomer(customer5);
//        adminService.getAllCustomers().forEach(System.out::println);
//        customer1 = adminService.getOneCustomer(1);
//        customer1.setNotEmail("theNewEmail@customer.com");
//        customer1.setNotPassword("theNewPassword");
//        adminService.updateCustomer(customer1);
//        adminService.getAllCustomers().forEach(System.out::println);
//        adminService.deleteCustomer(5);
//        adminService.getAllCustomers().forEach(System.out::println);
//        System.out.println(AsciiArt.LINE);
//        System.out.println(AsciiArt.ADMIN_LOGOUT);
//    }
//    public void companyTime2Shine() throws CouponSystemException {
//        System.out.println(AsciiArt.LINE);
//        System.out.println(AsciiArt.COMPANY_LOGIN);
//        CompanyService companyService =
//                (CompanyService) loginManager.login("theNewEmail@company.com", "theNewPassword", ClientType.Company);
//        CouponDto coupon1 = CouponDto.builder()
//                .notTitle("1")
//                .notDesc("First")
//                .notCategory(Category.Electricity)
//                .notStartDate(Date.valueOf(LocalDate.now()))
//                .notEndDate(Date.valueOf(LocalDate.now().plusDays(1)))
//                .notImg("img.jpg")
//                .notPrice(135.5)
//                .notAmount(15)
//                .build();
//        CouponDto coupon2 = CouponDto.builder()
//                .notTitle("2")
//                .notDesc("Second")
//                .notCategory(Category.Food)
//                .notStartDate(Date.valueOf(LocalDate.now()))
//                .notEndDate(Date.valueOf(LocalDate.now().plusDays(1)))
//                .notImg("img.jpg")
//                .notPrice(18)
//                .notAmount(7)
//                .build();
//        CouponDto coupon3 = CouponDto.builder()
//                .notTitle("3")
//                .notDesc("Third")
//                .notCategory(Category.Restaurant)
//                .notStartDate(Date.valueOf(LocalDate.now()))
//                .notEndDate(Date.valueOf(LocalDate.now().plusDays(1)))
//                .notImg("img.jpg")
//                .notPrice(1000.5)
//                .notAmount(5)
//                .build();
//        CouponDto coupon4 = CouponDto.builder()
//                .notTitle("4")
//                .notDesc("Forth")
//                .notCategory(Category.Vacation)
//                .notStartDate(Date.valueOf(LocalDate.now()))
//                .notEndDate(Date.valueOf(LocalDate.now().plusDays(1)))
//                .notImg("img.jpg")
//                .notPrice(1.99)
//                .notAmount(100_000)
//                .build();
//        CouponDto coupon5 = CouponDto.builder()
//                .notTitle("5")
//                .notDesc("Fifth")
//                .notCategory(Category.Electricity)
//                .notStartDate(Date.valueOf(LocalDate.now()))
//                .notEndDate(Date.valueOf(LocalDate.now().plusDays(1)))
//                .notImg("img.jpg")
//                .notPrice(500)
//                .notAmount(35)
//                .build();
//        companyService.addCoupon(coupon1);
//        companyService.addCoupon(coupon2);
//        companyService.addCoupon(coupon3);
//        companyService.addCoupon(coupon4);
//        companyService.addCoupon(coupon5);
//        companyService.getCompanyCoupons().forEach(System.out::println);
//        System.out.println(AsciiArt.LINE);
//        System.out.println(companyService.getCompanyCoupons());
//        companyService.getCompanyCoupons().forEach(System.out::println);
//        coupon1 = companyService.findSingleCoupon(1);
//        coupon1.setNotTitle("TheNewTitle");
//        coupon1.setNotDesc("TheNewDescription");
//        companyService.updateCoupon(coupon1);
//        companyService.getCompanyCoupons(Category.Electricity);
//        companyService.deleteCoupon(2);
//        companyService.getCompanyCoupons(501);
//        System.out.println(companyService.getCompanyDetails());
//        System.out.println(AsciiArt.COMPANY_LOGOUT);
//    }
//    public void customerTime2Shine() throws CouponSystemException{
//        System.out.println(AsciiArt.LINE);
//        System.out.println(AsciiArt.CUSTOMER_LOGIN);
//        CustomerService customerService =
//                (CustomerService) loginManager.login("theNewEmail@customer.com","theNewPassword",ClientType.Customer);
//        customerService.purchaseCoupon(customerService.searchCoupon(1));
//        customerService.purchaseCoupon(customerService.searchCoupon(4));
//        customerService.purchaseCoupon(customerService.searchCoupon(3));
//        customerService.getCustomerCoupons().forEach(System.out::println);
//        customerService.refundCoupon(customerService.searchCoupon(4));
//        customerService.getCustomerCoupons(Category.Electricity).forEach(System.out::println);
//        System.out.println(AsciiArt.LINE);
//        customerService.getCustomerCoupons(150).forEach(System.out::println);
//        System.out.println(customerService.getCustomerDetails());
//        System.out.println(AsciiArt.LINE);
//        System.out.println(AsciiArt.CUSTOMER_LOGOUT);
//    }
}
