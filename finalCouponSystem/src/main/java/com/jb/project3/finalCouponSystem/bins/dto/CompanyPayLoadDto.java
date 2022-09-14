package com.jb.project3.finalCouponSystem.bins.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import java.util.List;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CompanyPayLoadDto {
    @NotBlank
    private String notName;
    @NotBlank
    private String notEmail;
    @NotBlank
    private String notPassword;
    private List<CouponDto> notCoupons;
}
