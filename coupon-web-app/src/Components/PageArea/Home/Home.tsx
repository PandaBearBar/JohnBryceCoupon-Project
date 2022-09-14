import { type } from 'os';
import React, { useEffect, useState } from 'react'
import { CouponModel } from '../../../Models/Coupons';
import { CouponDownloadedAction } from '../../../Redux/CouponAppState';
import store from '../../../Redux/Store'
import { AddCompanyAction, AddCustomerAction, SaveCompanyAction, SaveCustomerAction } from '../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../Service/notify';
import { web } from '../../../Service/WebAPi';
import { AdminController } from '../../SystemApi/AdminArea/AdminController/AdminController';
import './Home.css'

export const Home:React.FC = () => {
    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponReducer.coupons); 
    const type = store.getState().authReducer?.user?.clientType;

    useEffect(() => {
        if(coupons.length === 0 && (type === 'Customer' || type === 'Company')){
            console.log("entered");
            switch(type){
                case 'Customer':
                    web.getCustomerCoupons ()
                    .then((res)=>{
                        store.dispatch(CouponDownloadedAction(res.data))
                        setCoupons(store.getState().couponReducer.coupons);
                    });
                    web.CustomerDetails()
                .then(res=> {
                    notify.success(SccMsg.CUSTOMER_DETAILS);
                    store.dispatch(AddCustomerAction(res.data));
                })
                .catch(err => {
                    notify.error(err.message);
                });
                break;
                case 'Company':
                    web.getCompanyCoupons()
                    .then((res)=>{
                        store.dispatch(CouponDownloadedAction(res.data))
                        setCoupons(store.getState().couponReducer.coupons);
                    });
                    web.CompanyDetails()
                    .then(res=> {
                        notify.success(SccMsg.Company_Details);
                        store.dispatch(AddCompanyAction(res.data));
                    })
                    .catch(err => {
                        notify.error(err.message);
                    });
                break;
            }
        }
        return store.subscribe(() => {
            setCoupons(coupons);
        })
    }, [coupons])
    return (
        <div className='home'>
        {
            (type !== "Administrator")
            ?
            <>
            <img className = "img" src="https://media0.giphy.com/media/lQTvKuycxCxi5cVo2I/giphy.gif?cid=ecf05e47eeyvg0du2qy2su2jwsjyuepxkokp4dyx078axz92&rid=giphy.gif&ct=g" alt="Hello There"/>
            </>
            :
            <>
            <img className = "img" src="https://media0.giphy.com/media/3n65nUEEvQ7c7iOjt4/giphy.gif?cid=ecf05e47yh3dx1kwdl8jy8sw0bafthzdmrhjl0m8p1ofnpcb&rid=giphy.gif&ct=g" alt="Hello Admin" />
            </>
        }
        </div>
    )
}
