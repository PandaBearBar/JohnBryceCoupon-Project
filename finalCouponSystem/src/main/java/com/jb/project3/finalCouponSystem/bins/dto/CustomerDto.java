package com.jb.project3.finalCouponSystem.bins.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.List;
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class CustomerDto {

    private int notId;
    @NotBlank
    private String notFirstName;
    @NotBlank
    private String notLastName;
    @NotBlank
    private String notEmail;
    @NotBlank
    private String notPassword;
    private List<CouponDto> notCoupons;

    public CustomerDto (CustomerPayLoadDto customerPayLoadDto){
        this.notFirstName = customerPayLoadDto.getNotFirstName();
        this.notLastName = customerPayLoadDto.getNotLastName();
        this.notEmail = customerPayLoadDto.getNotEmail();
        this.notPassword = customerPayLoadDto.getNotPassword();
        this.notCoupons = customerPayLoadDto.getNotCoupons();
    }

}
