package com.jb.project3.finalCouponSystem;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@ComponentScan(basePackages = {"com.jb.project3.finalCouponSystem"},
		excludeFilters = @ComponentScan.Filter(
				type = FilterType.ASPECTJ,
				pattern = "com.jb.project3.finalCouponSystem.clr.off.*"
		)
)
public class FinalCouponSystemApplication {

	public static void main(String[] args) {
		SpringApplication.run(FinalCouponSystemApplication.class, args);
	}

}
