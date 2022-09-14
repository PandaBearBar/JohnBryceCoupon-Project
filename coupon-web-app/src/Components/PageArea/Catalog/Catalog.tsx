import React, { useEffect, useState } from 'react'
import { CouponModel } from '../../../Models/Coupons';
import { CouponDownloadedAction, CouponDownloadedWebAction } from '../../../Redux/CouponAppState';
import store from '../../../Redux/Store';
import { notify, SccMsg } from '../../../Service/notify';
import { web } from '../../../Service/WebAPi';
import { BootCoupon } from '../BootCoupon/BootCoupon';
import '../../SystemApi/CouponArea/CouponLIst/CouponList.css'
import { SearchPage } from '../../SystemApi/CouponArea/Serach/searching';
import "./Catalog.css"

export const Catalog:React.FC = () => {
  const [view,setView] = useState<string>("all");
  const all = () => {
    setView("all");
  };
  const search = () => {
    setView("search");
  };
  const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponReducer.webCoupons);
  useEffect(()=>{
    if(store.getState().couponReducer.webCoupons.length === 0 ){
        web.getAllCoupons()
        .then((res)=>{
            notify.success(SccMsg.COUPON_FOUND);
            setCoupons(res.data);
            store.dispatch(CouponDownloadedWebAction(res.data));
        })
        .catch((err)=>{
            notify.error(err.message);
        });
    }
    return store.subscribe(()=>{
      setCoupons(store.getState().couponReducer.webCoupons);
    })
  }, [coupons,view]);
  const own = (Id:number):boolean => {
    return store.getState().couponReducer.coupons.filter(c => c.notId === Id)[0] !== undefined;
  };
  return (
    <div>
      <div className='Catalog'>
      <button className={(view === "all")?"button-on":"button-off"} onClick={all} >All</button>
      <button className={(view === "search")?"button-on":"button-off"} onClick={search}>Search</button>
      </div>
      {
        (view=== "search")
        ?
        <div>
          <SearchPage/>
        </div>
        :
        <div className='CouponList'>
        {coupons.map(c => <BootCoupon key={c.notId} coupon={c} owned={own(c.notId??0)} />)}
      </div>
      }
      {
        (coupons.length === 0)
        ?
        <img src = 'https://media2.giphy.com/media/kUTME7ABmhYg5J3psM/200.webp?cid=ecf05e47v0ilx2sb2xil6q3xxs953mm4pktt50h3f6ry8sss&rid=200.webp&ct=g'/>
        :
        <></>
      }
    </div>
  )
  
}
