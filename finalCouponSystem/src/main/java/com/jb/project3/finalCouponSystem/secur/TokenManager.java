package com.jb.project3.finalCouponSystem.secur;

import com.jb.project3.finalCouponSystem.excapt.CouponSecurityException;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.excapt.SecurityMsg;
import com.jb.project3.finalCouponSystem.service.facade.*;
import com.jb.project3.finalCouponSystem.service.loginSystem.ClientType;
import com.jb.project3.finalCouponSystem.service.loginSystem.LoginManager;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TokenManager {
    private final Map<UUID,Information> map;
    private final LoginManager loginManager;

    public UUID add(String email, String password , ClientType clientType) throws CouponSecurityException {
        ClientService clientService = loginManager.login(email, password, clientType);
        int id = clientService.getId(email, password);
        if (id == 0)throw new CouponSecurityException(SecurityMsg.EMAIL_OR_PASSWORD_INCORRECT);

        removePreviousInstances(id);

        Information information =  new Information();

                information.setId(id);
                information.setEmail(email);
                information.setClientType(clientType);
                information.setTime(LocalDateTime.now());
                information.setClientService(clientService);

        UUID token = UUID.randomUUID();
        map.put(token,information);
        return token;
    }
    public int getUserId(UUID token) throws CouponSecurityException {

        Information information = map.get(token);
        if (information == null) {
            throw new CouponSecurityException(SecurityMsg.INVALID_TOKEN);
        }
        return information.getId();
    }


    @Scheduled(fixedRate = 1000 * 60)
    public void deleteExpiredTokenOver30Minutes() {
        map.entrySet().removeIf(ins -> ins.getValue().getTime().isAfter(LocalDateTime.now().plusMinutes(30)));
    }

    public void removePreviousInstances(int userID) {
        map.entrySet().removeIf(ins -> ins.getValue().getId() == userID);
    }
}
