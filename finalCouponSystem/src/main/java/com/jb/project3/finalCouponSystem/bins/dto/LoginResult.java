package com.jb.project3.finalCouponSystem.bins.dto;

import com.jb.project3.finalCouponSystem.service.loginSystem.ClientType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class LoginResult {
    private UUID token;
    private String email;
    private ClientType clientType;
}
