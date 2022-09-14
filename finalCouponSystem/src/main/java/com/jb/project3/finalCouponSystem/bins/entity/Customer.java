package com.jb.project3.finalCouponSystem.bins.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "customers")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "first_name",nullable = false)
    private String firstName;
    @Column(name = "last_name",nullable = false)
    private String lastName;
    @Column(nullable = false)
    private String email;
    @Column(nullable = false)
    private String password;
    @ManyToMany()
    @JoinTable(
            name = "customers_coupons",
            joinColumns = @JoinColumn(name = "customer_id",referencedColumnName = "id",foreignKey = @ForeignKey),
            inverseJoinColumns = @JoinColumn(name = "coupons_id",referencedColumnName = "id",foreignKey = @ForeignKey,table = "coupons"))
    private List<Coupon> coupons = new ArrayList<>();
}
