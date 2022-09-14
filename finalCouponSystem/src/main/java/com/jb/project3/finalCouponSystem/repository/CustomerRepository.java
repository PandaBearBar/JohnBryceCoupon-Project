package com.jb.project3.finalCouponSystem.repository;


import com.jb.project3.finalCouponSystem.bins.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer,Integer> {
    boolean existsByEmail(String email);
    Customer findByEmailAndPassword(String email, String password);
    boolean existsByEmailAndPassword(String email, String password);
}
