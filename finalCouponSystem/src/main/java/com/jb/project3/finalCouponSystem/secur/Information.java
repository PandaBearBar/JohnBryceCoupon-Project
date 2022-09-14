package com.jb.project3.finalCouponSystem.secur;

import com.jb.project3.finalCouponSystem.service.facade.ClientService;
import com.jb.project3.finalCouponSystem.service.loginSystem.ClientType;
import com.jb.project3.finalCouponSystem.service.loginSystem.LoginManager;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Information {
    private ClientService clientService;
    private int id;
    private ClientType clientType;
    private LocalDateTime time;
    private String email;
}
