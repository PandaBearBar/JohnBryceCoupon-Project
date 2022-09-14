package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.dto.CustomerDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import com.jb.project3.finalCouponSystem.bins.entity.Customer;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.excapt.ExceptionMsg;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
@Component
public class CustomerServiceImpl extends ClientService implements CustomerService {
    @Override
    public int getId(String email, String password) {
        return customerRepository.findByEmailAndPassword(email, password).getId();
    }

    @Override
    public boolean login(String email, String password) {
        return customerRepository.existsByEmailAndPassword(email, password);
    }


    @Override
    public CouponDto purchaseCoupon(int id ,int couponId,CouponDto couponDto) throws CouponSystemException {
        couponDto.setNotId(couponId);
        Coupon coupon = couponMapper.ToDAO(couponDto);
        if (couponRepository.exitsByCustomerIdAndCouponsId(id, coupon.getId()) == 1 ||
                coupon.getEndDate().equals(Date.valueOf(LocalDate.now())) ||
                coupon.getAmount() <= 0)
            throw new CouponSystemException(ExceptionMsg.PurchaseDenied);
        coupon.setAmount(coupon.getAmount() - 1);
        couponRepository.saveAndFlush(coupon);
        couponRepository.addCouponPurchase(id, coupon.getId());
        return couponMapper.ToDTO(coupon);
    }

    @Override
    public CouponDto refundCoupon(int id ,int couponId,CouponDto couponDto) throws CouponSystemException {
        couponDto.setNotId(couponId);
        Coupon coupon = couponMapper.ToDAO(couponDto);
        if (couponRepository.exitsByCustomerIdAndCouponsId(id, coupon.getId()) == 0)
            throw new CouponSystemException(ExceptionMsg.RefundDenied);
        coupon.setAmount(coupon.getAmount() + 1);
        couponRepository.saveAndFlush(coupon);
        couponRepository.deleteCouponPurchase(id, coupon.getId());
        return couponMapper.ToDTO(coupon);
    }

    @Override
    public List<CouponDto> getCustomerCoupons(int id) {
        List<Coupon> coupons =  couponRepository.findAllByCustomerId(id);
        return couponMapper.ListToDTO(coupons);
    }

    @Override
    public List<CouponDto> getCustomerCoupons(int id ,Category category) {
        List<Coupon> coupons = couponRepository.findAllByCustomerIdAndCategory(id, category.name());
        return couponMapper.ListToDTO(coupons);
    }

    @Override
    public List<CouponDto> getCustomerCoupons(int id ,double maxPrice) {
        List<Coupon> coupons = couponRepository.findAllByCustomerIdAndPriceLessThanEqual(id, maxPrice);
        return couponMapper.ListToDTO(coupons);
    }

    @Override
    public CustomerDto getCustomerDetails(int id) throws CouponSystemException {
        Customer customer = customerRepository.findById(id).orElseThrow(()->new CouponSystemException(ExceptionMsg.CustomerNotExist));
        return customerMapper.ToDTO(customer);
    }

    @Override
    public int getCouponsCount(int id) {
        return couponRepository.countByCustomerId(id);
    }
}
