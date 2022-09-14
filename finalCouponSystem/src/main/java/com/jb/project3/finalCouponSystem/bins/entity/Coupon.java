package com.jb.project3.finalCouponSystem.bins.entity;

import lombok.*;
import javax.persistence.*;
import javax.validation.constraints.PositiveOrZero;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "coupons")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@ToString
public class Coupon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "company_id")
    private int companyId;
    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Category category;
    @Column(name = "description", nullable = false)
    private String desc;
    @Column(nullable = false)
    private String title;
    @Column(name = "start_date", nullable = false)
    private Date startDate;
    @Column(name = "end_date", nullable = false)
    private Date endDate;
    @PositiveOrZero(message = "Not Available Any More")
    @Column(nullable = false)
    private int amount;
    @Column(nullable = false)
    private double price;
    @Column(name = "image", nullable = false)
    private String img;
    @ToString.Exclude
    @ManyToMany()
    @JoinTable(
            name = "customers_coupons",
            joinColumns = @JoinColumn(name = "coupons_id", referencedColumnName = "id", foreignKey = @ForeignKey),
            inverseJoinColumns = @JoinColumn(name = "customer_id", referencedColumnName = "id", foreignKey = @ForeignKey, table = "customers"))
    private List<Customer> customers = new ArrayList<>();
}