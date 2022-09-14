package com.jb.project3.finalCouponSystem.excapt;

import lombok.Data;

@Data
public class CouponSecurityException  extends Exception{

    private SecurityMsg secMsg;
    public CouponSecurityException(SecurityMsg secMsg){
        super(secMsg.getMsg());
        this.secMsg = secMsg;
    }
}