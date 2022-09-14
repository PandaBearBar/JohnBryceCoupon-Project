package com.jb.project3.finalCouponSystem.repository;

import com.jb.project3.finalCouponSystem.bins.entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
public interface CompanyRepository extends JpaRepository<Company,Integer> {
    boolean existsByEmailOrName(String email, String Name);
    boolean existsByIdAndName(int id, String Name);
    boolean existsByEmailAndPassword(String email, String password);
    Company findByEmailAndPassword(String email, String password);
    @Transactional
    @Modifying
    @Query(nativeQuery = true,
            value =
                    "DELETE project2.companies,project2.coupons,project2.customers_coupons\n" +
                    "FROM project2.companies\n" +
                    "JOIN project2.coupons\n" +
                    "JOIN project2.customers_coupons\n" +
                    "ON companies.id = coupons.company_id = :companyId ;\n")
    void eliminateCompany(@Param("companyId") int companyId);
}
