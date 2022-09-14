import React, { useEffect, useState } from 'react'
import { RiCoupon3Line } from 'react-icons/ri';
import App from '../../../App';
import store from '../../../Redux/Store';
import { notify, SccMsg } from '../../../Service/notify';
import { web } from '../../../Service/WebAPi';
import './Circle.css'


export const OwnedIcon = () => {
    const [num, setNum] = useState<number>(store.getState().couponReducer.coupons.length);
    const [type,setType] = useState<string>();
    useEffect(() => {
        if(num === 0 ){
            switch(type){
            case "Company":
                web.countCompanyCoupons()
                    .then(res=>{
                        setNum(res.data);
                    })
                    .catch(err => notify.error(err.message))
            break;
            case "Customer":
                web.countCustomerCoupons()
                    .then(res=>{
                        setNum(res.data);
                    })
                    .catch(err => notify.error(err.message))
            break;
            }
        }
        return store.subscribe(()=>{
            setNum(store.getState().couponReducer.coupons.length);
            setType(store.getState().authReducer?.user?.clientType);
        });
    },[type,num]);
    
    return (
        <div>
            <div className="Circle">{num}</div>
        </div>
    );
}