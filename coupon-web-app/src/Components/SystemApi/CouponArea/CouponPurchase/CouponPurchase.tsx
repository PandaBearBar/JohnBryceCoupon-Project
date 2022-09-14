import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { useForm, useFormState } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import schema from 'yup/lib/schema';
import { CouponModel, CouponPayloadModel } from '../../../../Models/Coupons';
import { CouponPurchasedAction, CouponUpdatedAction } from '../../../../Redux/CouponAppState';
import store from '../../../../Redux/Store';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';

export const CouponPurchase:React.FC = () => {
    const coupons = store.getState().couponReducer.webCoupons;

    const navigate = useNavigate();
    const params = useParams();
    const toStr = params.id + "";
    const couponId:number = +toStr;
    const [id, setId] = useState<number>(couponId);
    const [coupon, setCoupon] = useState<CouponModel>(coupons.filter(c => c.notId === id)[0]??new CouponModel());
    const [origin, setOrigin] = useState<CouponPayloadModel>({ 
        'notPrice': coupon.notPrice,
        'notAmount':coupon.notAmount,
        'notTitle':coupon.notTitle,
        'notDesc':coupon.notDesc,
        'notCategory':coupon.notCategory,
        'notImg':coupon.notImg,
        'notStartDate':coupon.notStartDate,
        'notEndDate':coupon.notEndDate,
        'notCompanyId':coupon.notCompanyId
    });
        
        const no = () => {
            navigate('/owned');
        }

        const yes = () => {
            web.PurchaseCoupon(id ,origin)
                .then(res => {
                    notify.success(SccMsg.Coupon_Purchased);
                    navigate('/owned');
                    store.dispatch(CouponPurchasedAction(res.data));
                })
                .catch(err => {
                    notify.error(err.message);
                    navigate('/catalog');
                });
            }
    return (
        <div>
    <div className="PurchaseTodo flex-center-col">
        <h1>Purchase Coupon</h1>
        <h3>Are you sure you want to buy coupon #{id}?</h3>
        <div className="flex-row">
            <button className="button-danger" onClick={yes} >YES</button>
            <button className="button" onClick={no}>NO</button>
        </div>
    </div>
        </div>
    )
}
