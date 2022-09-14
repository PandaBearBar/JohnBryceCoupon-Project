import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CouponDeletedAction } from '../../../../Redux/CouponAppState';
import store from '../../../../Redux/Store';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
export const DeleteCoupon:React.FC = () =>{

const navigate = useNavigate();
const params = useParams();
const couponId = +(params.id || 0);

const [id, setId] = useState<number>(couponId);


const no = () => {
    navigate('/owned');
}

const yes = () => {
    web.deleteCoupon(id)
        .then(res => {
            notify.success(SccMsg.DELETE_COUPON);
            navigate('/owned');
            store.dispatch(CouponDeletedAction(id));
        })
        .catch(err => {
            notify.error(err.message);
            navigate('/delete/' + id);
        });

}

return (
    <div className="DeleteTodo flex-center-col">
        <h1>Delete Coupon</h1>
        <h3>Are you sure you want to delete coupon #{id}?</h3>
        <div className="flex-row">
            <button className="button-danger" onClick={yes} >YES</button>
            <button className="button" onClick={no}>NO</button>
        </div>
    </div>
);
}

