package com.jb.project3.finalCouponSystem.bins.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.sql.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CouponDto {
    private int notId;
    @NotBlank
    private int notCompanyId;
    @NotBlank
    private int notAmount;
    @NotBlank
    private double notPrice;
    @NotBlank
    private Category notCategory;
    @NotBlank
    private String notTitle;
    @NotBlank
    private String notImg;
    @NotBlank
    private String notDesc;
    @NotBlank
    private Date notStartDate;
    @NotBlank
    private Date notEndDate;
    public CouponDto(CouponPayLoadDto couponPayLoadDto){
        this.notCompanyId = couponPayLoadDto.getNotCompanyId();
        this.notAmount = couponPayLoadDto.getNotAmount();
        this.notPrice = couponPayLoadDto.getNotPrice();
        this.notCategory = couponPayLoadDto.getNotCategory();
        this.notTitle = couponPayLoadDto.getNotTitle();
        this.notImg = couponPayLoadDto.getNotImg();
        this.notDesc = couponPayLoadDto.getNotDesc();
        this.notStartDate = Date.valueOf(couponPayLoadDto.getNotStartDate());
        this.notEndDate =  Date.valueOf(couponPayLoadDto.getNotEndDate());
    }
}
