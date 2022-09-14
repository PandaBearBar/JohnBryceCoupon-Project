package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.bins.entity.Company;
import com.jb.project3.finalCouponSystem.bins.entity.Customer;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.excapt.ExceptionMsg;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
@Component
public class AdminServiceImpl extends ClientService implements AdminService{
    private final String email= "admin@admin.com";
    private final String password = "admin";

    @Override
    public boolean login(String email, String password) {
        return this.email.equals(email)&&this.password.equals(password);
    }

    @Override
    public int getId(String email, String password) {
        if (login(email, password)) return -1;
        return 0;
    }

    @Override
    public CompanyDto addCompany(CompanyDto companyDto) throws CouponSystemException {
        Company company = companyMapper.ToDAO(companyDto);
        if (companyRepository.existsByEmailOrName(company.getEmail(), company.getName()))
            throw new CouponSystemException(ExceptionMsg.CompanyEmailOrNameUnavailable);
        return companyMapper.ToDTO(companyRepository.save(company));
    }

    @Override
    public CompanyDto updateCompany(int companyId, CompanyDto companyDto) throws CouponSystemException {
        companyDto.setNotId(companyId);
        Company company = companyMapper.ToDAO(companyDto);
        if (!companyRepository.existsByIdAndName(company.getId(), company.getName()))
            throw new CouponSystemException(ExceptionMsg.CompanyUpdateDenied);
        return companyMapper.ToDTO(companyRepository.saveAndFlush(company));
    }

    @Override
    public void deleteCompany(int companyId) throws CouponSystemException {
        if (!companyRepository.existsById(companyId))
            throw new CouponSystemException(ExceptionMsg.CompanyNotExist);
        companyRepository.deleteById(companyId);
    }

    @Override
    public List<CompanyDto> getAllCompanies() {
        List<Company> companies = companyRepository.findAll();
        return companyMapper.ListToDTO(companies);
    }

    @Override
    public CompanyDto getOneCompany(int companyId) throws CouponSystemException {
        if (!companyRepository.existsById(companyId))
            throw new CouponSystemException(ExceptionMsg.CompanyNotExist);
        Company company = companyRepository.getReferenceById(companyId);
        return companyMapper.ToDTO(company);
    }

    @Override
    public CustomerDto addCustomer(CustomerDto customerDto) throws CouponSystemException {
        Customer customer = customerMapper.ToDAO(customerDto);
        if (customerRepository.existsByEmail(customer.getEmail()))
            throw new CouponSystemException(ExceptionMsg.CustomerEmailUnavailable);
        return (customerMapper.ToDTO(customerRepository.save(customer)));
    }

    @Override
    public CustomerDto updateCustomer(int customerId,CustomerDto customerDto) throws CouponSystemException {
        customerDto.setNotId(customerId);
        Customer customer = customerMapper.ToDAO(customerDto);
        if (!customerRepository.existsById(customer.getId()))
            throw new CouponSystemException(ExceptionMsg.CustomerUpdateDenied);
        return customerMapper.ToDTO(customerRepository.saveAndFlush(customer));
    }

    @Override
    public void deleteCustomer(int customerId) throws CouponSystemException {
        if (!customerRepository.existsById(customerId))
            throw new CouponSystemException(ExceptionMsg.CustomerNotExist);
        customerRepository.deleteById(customerId);
    }

    @Override
    public List<CustomerDto> getAllCustomers() {
        List<Customer> customers =  customerRepository.findAll();
        return customerMapper.ListToDTO(customers);
    }

    @Override
    public CustomerDto getOneCustomer(int customerId) {
        Customer customer = customerRepository.getReferenceById(customerId);
        return customerMapper.ToDTO(customer);
    }

    @Override
    public List<CouponDto> getAllCoupons() {
        return couponMapper.ListToDTO(couponRepository.findAll());
    }

    @Override
    public List<CouponDto> getCouponsByMaxPrice(double maxPrice) {
        return couponMapper.ListToDTO(couponRepository.findAllByPriceLessThanEqual(maxPrice));
    }

    @Override
    public List<CouponDto> getCouponsByCategory(Category category) {
        return couponMapper.ListToDTO(couponRepository.findAllByCategory(category));
    }

}
