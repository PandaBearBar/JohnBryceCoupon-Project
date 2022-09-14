import React, { useState } from 'react'
import './Searching.css';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { CategoryModel, CouponModel, CouponPayloadModel, searchModel } from '../../../../Models/Coupons';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
import { BootCoupon } from '../../../PageArea/BootCoupon/BootCoupon';
import { EmptyView } from '../../../PageArea/EmptyView/EmptyView';
import { Categories } from '../../../PageArea/Enum/enum';
import store from '../../../../Redux/Store';


export const UserSearch:React.FC = () => {
    const [param,setParam] = useState("Category");
    const [user,setUser] = useState(store.getState().authReducer.user?.clientType);
    const Category = Object.keys(CategoryModel);
    const [coupons,setCoupons] = useState<CouponModel[]>([]);

    const category = () => {
        setParam("Category")
    };

    const maxPrice = () => {
        setParam("maxPrice")
    };

    const schema = yup.object().shape({
        maxPrice:
            yup.number()
                .moreThan(0),
        category:
            yup.mixed()
                .oneOf(Category)
        });
    const {register,handleSubmit,formState:{errors,isDirty,isValid}} = 
    useForm<searchModel>({mode:'all',resolver:yupResolver(schema)});

    const search = async(search:searchModel) => {
        console.log(store.getState().authReducer.user)
        switch(user){
            case "Customer":
                switch (param){
                    case "maxPrice" :
                        web.getCouponsByCustomerPrice(search.maxPrice)
                            .then(res =>{
                                notify.success(SccMsg.Price_Found);
                                setCoupons(res.data);
                                })
                            .catch(err =>{
                            notify.error('Oppsy :' + err.message);
                            });
                            break; 
                            case "Category" :
                                web.getCouponsByCustomerCategory(search.category)
                                    .then(res =>{
                                        notify.success(SccMsg.CATEGORY_FOUND);
                                        setCoupons(res.data);
                                        })
                                    .catch(err =>{
                                    notify.error('Oppsy :' + err.message);
                                    });
                            break;
                }
            break;
            case "Company":
                switch (param){
                    case "maxPrice" :
                        web.getCouponsByCompanyPrice(search.maxPrice)
                            .then(res =>{
                                notify.success(SccMsg.CATEGORY_FOUND);
                                setCoupons(res.data);
                                })
                            .catch(err =>{
                            notify.error('Oppsy :' + err.message);
                            });
                            break; 
                            case "Category" :
                                web.getCouponsByCompanyCategory(search.category)
                                    .then(res =>{
                                        notify.success(SccMsg.Price_Found);
                                        setCoupons(res.data);
                                        })
                                    .catch(err =>{
                                    notify.error('Oppsy :' + err.message);
                                    });
                            break;
                }
            }
        };

    return (
        <div className='SearchPage'>
            <button className={(param === "Category")?"button-on":"button-off"} onClick={category} >By Category</button>
            <button className={(param === "maxPrice")?"button-on":"button-off"} onClick={maxPrice}>By Max Price</button>
            <form onSubmit={handleSubmit(search)} className="flex-center-col">
            {(param === "maxPrice")
            ?
                <div>
                    <label htmlFor="maxPrice">Price : </label>
                    <input {...register('maxPrice')} type="text" placeholder='Ex.420.69'  id='maxPrice'/>
                    <div className='ErrorRes'>{errors.maxPrice?.message}</div>
                    <button className="button-success" disabled={!isValid}>Search</button>
                </div>
            :
                <div>
                    <label htmlFor="category">Category : </label>
                    <select {...register('category')} id='notCategory' >
                        <Categories />
                    </select>
                    <div className = {'ErrorRes'}>{errors.category?.message}</div>
                    <button className="button-success" disabled={!isValid}>Search</button>
                </div>
            }
        </form>
        <div className="CouponList">
            {
                (coupons.length > 0)
                    ?
                    coupons.map(c => <BootCoupon key={c.notId} coupon={c} owned={false} />)
                    :
                    <EmptyView msg='No Coupons' />
            }
        </div>
        </div>
    )
}
