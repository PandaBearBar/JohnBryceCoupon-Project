package com.jb.project3.finalCouponSystem.excapt;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum SecurityMsg {
    EMAIL_ALREADY_EXIST("email already exist", HttpStatus.CONFLICT),
    EMAIL_OR_PASSWORD_INCORRECT("email or password incorrect", HttpStatus.UNAUTHORIZED),
    INVALID_TOKEN("invalid token please login again", HttpStatus.UNAUTHORIZED);
    private String msg;
    private HttpStatus status;
    SecurityMsg(String msg, HttpStatus status){
        this.msg = msg;
        this.status = status;
    }
}
