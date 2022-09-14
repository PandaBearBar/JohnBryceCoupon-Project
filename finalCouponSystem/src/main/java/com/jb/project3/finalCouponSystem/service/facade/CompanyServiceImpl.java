package com.jb.project3.finalCouponSystem.service.facade;

import com.jb.project3.finalCouponSystem.bins.dto.CompanyDto;
import com.jb.project3.finalCouponSystem.bins.dto.CouponDto;
import com.jb.project3.finalCouponSystem.bins.entity.Category;
import com.jb.project3.finalCouponSystem.bins.entity.Company;
import com.jb.project3.finalCouponSystem.bins.entity.Coupon;
import com.jb.project3.finalCouponSystem.excapt.CouponSystemException;
import com.jb.project3.finalCouponSystem.excapt.ExceptionMsg;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Component
public class CompanyServiceImpl extends ClientService implements CompanyService{
    @Override
    public boolean login(String email, String password) {
        return companyRepository.existsByEmailAndPassword(email, password);
    }
    @Override
    public int getId(String email, String password){
        return companyRepository.findByEmailAndPassword(email, password).getId();
    }

    @Override
    public CouponDto addCoupon(int id ,CouponDto couponDto) throws CouponSystemException {
        Coupon coupon = couponMapper.ToDAO(couponDto);
        if (couponRepository.existsByCompanyIdAndTitle(id, coupon.getTitle()))
            throw new CouponSystemException(ExceptionMsg.CouponAddDenied);
        coupon.setCompanyId(id);
        return couponMapper.ToDTO(couponRepository.save(coupon));
    }

    @Override
    public CouponDto updateCoupon(int id  ,int couponId,CouponDto couponDto) throws CouponSystemException {
        couponDto.setNotId(couponId);
        Coupon coupon = couponMapper.ToDAO(couponDto);
        coupon.setCompanyId(id);
        if (!couponRepository.existsByCompanyIdAndId(id,coupon.getId()))
            throw new CouponSystemException(ExceptionMsg.CouponUpdateDenied);
        return couponMapper.ToDTO(couponRepository.saveAndFlush(coupon));
    }

    @Override
    public void deleteCoupon(int id ,int couponId) throws CouponSystemException {
        if (!couponRepository.existsById(couponId))
            throw new CouponSystemException(ExceptionMsg.CouponNotExist);
        couponRepository.deleteById(couponId);
    }

    @Override
    public List<CouponDto> getCompanyCoupons(int id) {
        List<Coupon> coupons = couponRepository.findAllByCompanyId(id);
        return couponMapper.ListToDTO(coupons);
    }

    @Override
    public List<CouponDto> getCompanyCoupons(int id ,Category category) {
        List<Coupon> coupons = couponRepository.findAllByCompanyIdAndCategory(id, category);
        return couponMapper.ListToDTO(coupons);

    }

    @Override
    public List<CouponDto> getCompanyCoupons(int id ,double maxPrice) {
        List<Coupon> coupons = couponRepository.findAllByCompanyIdAndPriceLessThanEqual(id, maxPrice);
        return couponMapper.ListToDTO(coupons);

    }

    @Override
    public CouponDto findSingleCoupon(int id , int couponId) throws CouponSystemException {
        if (!couponRepository.existsById(couponId))
            throw new CouponSystemException(ExceptionMsg.CouponNotExist);
        Coupon coupon = couponRepository.findByCompanyIdAndId(id, couponId);
        return couponMapper.ToDTO(coupon);
    }

    @Override
    public CompanyDto getCompanyDetails(int id ) throws CouponSystemException {
        Company company =  companyRepository.findById(id).orElseThrow(()->new CouponSystemException(ExceptionMsg.CompanyNotExist));
        return companyMapper.ToDTO(company);
    }

    @Override
    public int getCouponCount(int id) {
        return couponRepository.countByCompanyId(id);
    }
}
