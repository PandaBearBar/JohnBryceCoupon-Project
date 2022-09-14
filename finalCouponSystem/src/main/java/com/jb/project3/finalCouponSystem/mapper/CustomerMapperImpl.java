package com.jb.project3.finalCouponSystem.mapper;

import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import com.jb.project3.finalCouponSystem.bins.entity.Customer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class CustomerMapperImpl implements CustomerMapper {
    private final CouponMapper couponMapper;
    @Override
    public CustomerDto ToDTO(Customer customer) {
        if ( customer == null ) {
            return null;
        }

        CustomerDto.CustomerDtoBuilder customerDto = CustomerDto.builder();

        customerDto.notId( customer.getId() );
        customerDto.notFirstName( customer.getFirstName() );
        customerDto.notLastName( customer.getLastName() );
        customerDto.notEmail( customer.getEmail() );
        customerDto.notPassword( customer.getPassword() );
        customerDto.notCoupons(couponMapper.ListToDTO(customer.getCoupons()) );

        return customerDto.build();
    }

    @Override
    public List<CustomerDto> ListToDTO(List<Customer> customers) {
        if ( customers == null ) {
            return null;
        }

        List<CustomerDto> list = new ArrayList<CustomerDto>( customers.size() );
        for ( Customer customer : customers ) {
            list.add( ToDTO( customer ) );
        }

        return list;
    }

    @Override
    public Customer ToDAO(CustomerDto customerDto) {
        if ( customerDto == null ) {
            return null;
        }

        Customer.CustomerBuilder customer = Customer.builder();

        customer.id( customerDto.getNotId() );
        customer.firstName( customerDto.getNotFirstName() );
        customer.lastName( customerDto.getNotLastName() );
        customer.email( customerDto.getNotEmail() );
        customer.password( customerDto.getNotPassword() );
        customer.coupons( couponMapper.ListToDAO(customerDto.getNotCoupons()) );

        return customer.build();
    }

    @Override
    public List<Customer> ListToDAO(List<CustomerDto> customersDto) {
        if ( customersDto == null ) {
            return null;
        }

        List<Customer> list = new ArrayList<Customer>( customersDto.size() );
        for ( CustomerDto customerDto : customersDto ) {
            list.add( ToDAO( customerDto ) );
        }

        return list;
    }

    protected Coupon couponDtoToCoupon(CouponDto couponDto) {
        if ( couponDto == null ) {
            return null;
        }

        Coupon.CouponBuilder coupon = Coupon.builder();

        return coupon.build();
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
