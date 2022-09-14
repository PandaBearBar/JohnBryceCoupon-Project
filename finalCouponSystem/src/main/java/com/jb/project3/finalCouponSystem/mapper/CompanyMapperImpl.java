package com.jb.project3.finalCouponSystem.mapper;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.entity.Company;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CompanyMapperImpl implements CompanyMapper {
    private final CouponMapper couponMapper;
    @Override
    public CompanyDto ToDTO(Company company) {
        if ( company == null ) {
            return null;
        }

        CompanyDto.CompanyDtoBuilder companyDto = CompanyDto.builder();

        companyDto.notId( company.getId() );
        companyDto.notName( company.getName() );
        companyDto.notEmail( company.getEmail() );
        companyDto.notPassword( company.getPassword() );
        companyDto.notCoupons(couponMapper.ListToDTO(company.getCoupons()) );

        return companyDto.build();
    }

    @Override
    public List<CompanyDto> ListToDTO(List<Company> companies) {
        if ( companies == null ) {
            return null;
        }

        List<CompanyDto> list = new ArrayList<CompanyDto>( companies.size() );
        for ( Company company : companies ) {
            list.add( ToDTO( company ) );
        }

        return list;
    }

    @Override
    public Company ToDAO(CompanyDto companyDto) {
        if ( companyDto == null ) {
            return null;
        }

        Company.CompanyBuilder company = Company.builder();

        company.id( companyDto.getNotId() );
        company.name( companyDto.getNotName() );
        company.email( companyDto.getNotEmail() );
        company.password( companyDto.getNotPassword() );
        company.coupons(couponMapper.ListToDAO(companyDto.getNotCoupons()));

        return company.build();
    }

    @Override
    public List<Company> ListToDAO(List<CompanyDto> companiesDto) {
        if ( companiesDto == null ) {
            return null;
        }

        List<Company> list = new ArrayList<Company>( companiesDto.size() );
        for ( CompanyDto companyDto : companiesDto ) {
            list.add( ToDAO( companyDto ) );
        }

        return list;
    }


    protected Coupon couponDtoToCoupon(CouponDto couponDto) {
        if ( couponDto == null ) {
            return null;
        }

        return couponMapper.ToDAO(couponDto);
    }

    protected List<Coupon> couponDtoListToCouponList(List<CouponDto> list) {
        if ( list == null ) {
            return null;
        }

        List<Coupon> list1 = new ArrayList<Coupon>( list.size() );
        for ( CouponDto couponDto : list ) {
            list1.add( couponDtoToCoupon( couponDto ) );
        }

        return list1;
    }
}
