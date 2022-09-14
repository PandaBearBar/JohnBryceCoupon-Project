package com.jb.project3.finalCouponSystem.service.dailyTask;

import com.jb.project3.finalCouponSystem.repository.CouponRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.time.LocalDate;

@Component
@RequiredArgsConstructor
public class DailyEliminateJob {
    private final CouponRepository couponRepository;
    private final String POINTER ="0 45 13 * * *";

    @Scheduled(cron = POINTER)
    public void CouponEliminator(){
        couponRepository.deleteAllByEndDateLessThan(Date.valueOf(LocalDate.now()));
    }
}
