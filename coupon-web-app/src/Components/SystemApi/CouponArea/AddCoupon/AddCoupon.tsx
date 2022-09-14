import { yupResolver } from '@hookform/resolvers/yup';
import { now } from 'moment';
import React from 'react'
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { CategoryModel, CouponPayloadModel } from '../../../../Models/Coupons';
import { CouponAddedAction, CouponDownloadedAction } from '../../../../Redux/CouponAppState';
import store from '../../../../Redux/Store';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
import { Categories } from '../../../PageArea/Enum/enum';

export const AddCoupon:React.FC = () => {
    const Category = Object.keys(CategoryModel);
    const navigate = useNavigate();
    const schema = yup.object().shape({
        notPrice:
            yup.number()
                .moreThan(0)
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

    const {register,handleSubmit,formState:{errors,isDirty,isValid}} = 
        useForm<CouponPayloadModel>({mode:'all',resolver:yupResolver(schema)});

    const Add = async(coupon : CouponPayloadModel) => {
        console.log(coupon);
        web.addCoupon(coupon)
            .then(res =>{
                notify.success(SccMsg.COUPON_ADDED);
                navigate('/owned');
                store.dispatch(CouponAddedAction(res.data));
            })
            .catch(err =>{
                notify.error('Oppsy :' + err.message);
                navigate('/add');
            });
    };


    return (
        <div>
        <h1>Add Coupon :</h1>
        <form onSubmit={handleSubmit(Add)} className="flex-center-col">
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

                <label htmlFor="notCategory">Price : </label>
                <input {...register('notPrice')} type="text" placeholder='Ex.420.69'  id='notPrice'/>
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
                
            <button className="button-success" disabled={!isValid}>Add</button>
        </form>
        </div>
    )
}
