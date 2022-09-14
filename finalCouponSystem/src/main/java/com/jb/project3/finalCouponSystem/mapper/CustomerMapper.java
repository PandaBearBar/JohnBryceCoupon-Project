package com.jb.project3.finalCouponSystem.mapper;

import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Customer;
import org.mapstruct.InheritInverseConfiguration;

import java.util.List;


public interface CustomerMapper {
    CustomerDto ToDTO(Customer customer);
    List<CustomerDto> ListToDTO(List<Customer> customers);
    @InheritInverseConfiguration
    Customer ToDAO(CustomerDto customerDto);
    List<Customer> ListToDAO(List<CustomerDto> customersDto);
}
