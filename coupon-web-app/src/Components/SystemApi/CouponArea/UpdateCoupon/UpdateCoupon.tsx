import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CategoryModel, CouponModel, CouponPayloadModel } from '../../../../Models/Coupons';
import store from '../../../../Redux/Store';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import { web } from '../../../../Service/WebAPi';
import { notify, SccMsg } from '../../../../Service/notify';
import { CouponUpdatedAction } from '../../../../Redux/CouponAppState';
import { Categories } from '../../../PageArea/Enum/enum';


export function UpdateCoupon():JSX.Element{

    const coupons = store.getState().couponReducer.coupons
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
        const Category = Object.keys(CategoryModel);

    const schema = yup.object().shape({
        notPrice:
            yup.string()
                .required(),
        notAmount:
            yup.number()
                .moreThan(0)
                .integer("Must be naturel number")
                .required(),
        notTitle : 
            yup.string()
                .required(),
        notDesc :
            yup.string()
                .required(),
        notCategory :
            yup.mixed()
                .oneOf(Category)
                .required(),
        notImg :
            yup.string()
                .required(),
        notStartDate:
            yup.date()
                .min(new Date(), 'Umm... past due date? come on!')
                .default(new Date(Date.now()))
                .typeError("You must specify a due date")
                .required("due date is required")
                .nullable().default(() => new Date()),
        notEndDate:
            yup.date()
                .min(new Date(), 'Umm... past due date? come on!')
                .default(new Date())
                .typeError("You must specify a due date")
                .required("due date is required")
                .nullable().default(() => new Date(Date.now() + 6.048e+8))
    });
    const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
        = useForm<CouponPayloadModel>({ defaultValues: origin, mode: "all", resolver: yupResolver(schema) });
    const { dirtyFields } = useFormState({ control });
    
    const Update = async (coupon:CouponPayloadModel) => {
        web.updateCoupon(id,coupon)
        .then(res => {
            notify.success(SccMsg.UPDATE_COUPON);
            navigate('/owned');
            store.dispatch(CouponUpdatedAction(res.data));
        })
        .catch(err => { notify.error('Oppsy : ' + err.message) });
    }


    
    return (
        <div>
        <h1>Update Coupon :</h1>
        <form onSubmit={handleSubmit(Update)} className="flex-center-col">
                <label htmlFor="notTitle">Title : </label>
                <input {...register('notTitle')} type="text" placeholder='Ex.Best Coupon In D World'  id='notTitle'/>
                <div className = {'ErrorRes'}>{errors.notTitle?.message}</div>

                <label htmlFor="notDesc">Description : </label>
                <input {...register('notDesc')} type="text" placeholder='Ex.Omg! its MAGIC in a cup'  id='notDesc'/>
                <div className = {'ErrorRes'}>{errors.notDesc?.message}</div>
                
                <label htmlFor="notCategory">Category : </label>
                <select {...register('notCategory')} id='notCategory' >
                    <Categories />
                </select>
                <div className = {'ErrorRes'}>{errors.notCategory?.message}</div>

                <label htmlFor="notPrice">Price : </label>
                <input {...register('notPrice')} type="number" placeholder='Ex.420.69'  id='notPrice'/>
                <div className = {'ErrorRes'}>{errors.notPrice?.message}</div>

                <label htmlFor="notAmount">Amount : </label>
                <input {...register('notAmount')} type="number" placeholder='Ex.10'  id='notAmount'/>
                <div className = {'ErrorRes'}>{errors.notAmount?.message}</div>

                <label htmlFor="notImg">Image URL : </label>
                <input {...register('notImg')} type="text" placeholder='http:\\findItUrSelf.com'  id='notImg'/>
                <div className = {'ErrorRes'}>{errors.notImg?.message}</div>

                <label htmlFor="notStartDate"> Start @ : </label>
                <input {...register('notStartDate')} type="date" placeholder='dd/MM/yy'  id='notStartDate'/>
                <div className = {'ErrorRes'}>{errors.notStartDate?.message}</div>

                <label htmlFor="notEndDate"> End @ : </label>
                <input {...register('notEndDate')} type="date" placeholder='dd/MM/yy'  id='notEndDate'/>
                <div className = {'ErrorRes'}>{errors.notEndDate?.message}</div>

            <button className="button-success" disabled={!isValid}>Update</button>
        </form>
        </div>
    )
}
