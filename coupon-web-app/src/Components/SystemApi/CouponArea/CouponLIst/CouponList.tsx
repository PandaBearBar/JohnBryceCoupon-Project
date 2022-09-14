import { useEffect, useState } from "react";
import { CouponModel } from "../../../../Models/Coupons";
import { CouponDownloadedAction } from "../../../../Redux/CouponAppState";
import store from "../../../../Redux/Store";
import { notify, SccMsg } from "../../../../Service/notify";
import { web } from "../../../../Service/WebAPi";
import { BootCoupon } from "../../../PageArea/BootCoupon/BootCoupon";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";
import './CouponList.css'



export const CouponList:React.FC = () => {
    const [coupons, setCoupons] = useState<CouponModel[]>(store.getState().couponReducer.coupons); 
    const type = store.getState().authReducer?.user?.clientType;

    useEffect(() => {
        if(coupons.length !== store.getState().couponReducer.coupons.length || coupons.length === 0){
            switch(type){
                case 'Customer' :
                    web.getCustomerCoupons ()
                    .then((res)=>{
                        notify.success(SccMsg.COUPON_FOUND);
                        store.dispatch(CouponDownloadedAction(res.data))
                        setCoupons(store.getState().couponReducer.coupons);
                    })
                    .catch((err)=>{
                        notify.error(err.message);
                    });
                break;
                case 'Company' :
                    web.getCompanyCoupons()
                    .then((res)=>{
                        notify.success(SccMsg.COUPON_FOUND);
                        store.dispatch(CouponDownloadedAction(res.data))
                        setCoupons(store.getState().couponReducer.coupons);
                    })
                    .catch((err)=>{
                        notify.error(err.message);
                    });
                break;
            }
        }
        return store.subscribe(() => {
            setCoupons(coupons);
        })
    }, [coupons])

    return(
        <div className="CouponList">
            {
                (coupons.length > 0)
                    ?
                    coupons.map(c => <BootCoupon key={c.notId} coupon={c} owned={true} />)
                    :
                    <EmptyView msg='No Coupons' />
            }
        </div>
    );
}
