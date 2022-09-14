package com.jb.project3.finalCouponSystem.bins.dto;

import lombok.*;

import javax.validation.constraints.NotBlank;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompanyDto {
    private int notId;
    @NotBlank
    private String notName;
    @NotBlank
    private String notEmail;
    @NotBlank
    private String notPassword;
    private List<CouponDto> notCoupons;

    public CompanyDto(CompanyPayLoadDto companyPayLoadDto) {
        this.notName = companyPayLoadDto.getNotName();
        this.notEmail = companyPayLoadDto.getNotEmail();
        this.notPassword = companyPayLoadDto.getNotPassword();
        this.notCoupons = companyPayLoadDto.getNotCoupons();
    }
}
