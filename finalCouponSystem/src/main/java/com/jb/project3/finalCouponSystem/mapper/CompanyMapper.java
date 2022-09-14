package com.jb.project3.finalCouponSystem.mapper;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.entity.Company;
import org.mapstruct.InheritInverseConfiguration;

import java.util.List;

public interface CompanyMapper {
    CompanyDto ToDTO (Company company);
    List<CompanyDto> ListToDTO(List<Company> companies);
    @InheritInverseConfiguration
    Company ToDAO (CompanyDto companyDto);
    List<Company> ListToDAO(List<CompanyDto> companiesDto);
}
