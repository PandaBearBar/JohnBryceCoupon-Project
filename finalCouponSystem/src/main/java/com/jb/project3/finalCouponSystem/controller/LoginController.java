package com.jb.project3.finalCouponSystem.controller;

import com.jb.project3.finalCouponSystem.bins.dto.LoginRequest;
import com.jb.project3.finalCouponSystem.bins.dto.LoginResult;
import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.secur.TokenManager;
import com.jb.project3.finalCouponSystem.service.loginSystem.ClientType;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.UUID;

@RestController
@RequestMapping("login")
@RequiredArgsConstructor
public class LoginController {
    private final TokenManager tokenManager;
    @PostMapping()
    @ResponseStatus(HttpStatus.CREATED)
    public LoginResult login(@Valid @RequestBody LoginRequest loginRequest , @RequestParam ClientType clientType) throws CouponSecurityException {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();
        UUID token = tokenManager.add(email, password, clientType);
        return new LoginResult(token,email,clientType);
    }
}
