package com.jb.project3.finalCouponSystem.excapt;

public class CouponSystemException extends Exception{
    public CouponSystemException(ExceptionMsg message) {
        super(message.getMsg());
    }
}
