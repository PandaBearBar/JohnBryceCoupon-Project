package com.jb.project3.finalCouponSystem.service.loginSystem;

import com.jb.project3.finalCouponSystem.service.facade.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import org.springframework.beans.factory.config.BeanDefinition;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Component
@Scope(BeanDefinition.SCOPE_SINGLETON)
@AllArgsConstructor
public class LoginManager {
    private final AdminService adminService;
    private final CustomerService customerService;
    private final CompanyService companyService;

    public ClientService login(String email, String password, ClientType clientType){
        switch (clientType){
            case Administrator:
                return (adminService.login(email, password))? (ClientService) adminService :null;
            case Company:
                return (companyService.login(email, password))? (ClientService) companyService :null;
            case Customer:
                return (customerService.login(email, password))? (ClientService) customerService :null;
            default:
                return null;
        }
    }
}
