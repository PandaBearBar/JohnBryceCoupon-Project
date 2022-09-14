package com.jb.project3.finalCouponSystem.excapt;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public enum ExceptionMsg {
    CompanyEmailOrNameUnavailable("Company Add Denied - Email or Name Are Unavailable"),
    CompanyUpdateDenied("Company Update Denied - Unauthorized Changes"),
    CompanyNotExist("Company Not Exist"),
    CustomerEmailUnavailable("Customer Add Denied - Email Is Unavailable"),
    CustomerUpdateDenied("Company Update Denied - Unauthorized Changes"),
    CustomerNotExist("Company Not Exist"),
    CouponAddDenied("Denied cause - Similar Title Exist"),
    CouponUpdateDenied("Denied cause - Unauthorized Changes"),
    CouponNotExist("This Coupon Not Exist"),
    PurchaseDenied("This Coupon Cannot Be Purchase cause - Expired, Out Of Stock or Coupon Already Have Been Purchaced"),
    RefundDenied("Coupon Does Not Exist ...");
    private String msg;
}
