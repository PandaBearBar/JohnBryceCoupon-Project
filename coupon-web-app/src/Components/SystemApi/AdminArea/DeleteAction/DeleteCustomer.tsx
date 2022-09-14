import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CouponDeletedAction } from '../../../../Redux/CouponAppState';
import store from '../../../../Redux/Store';
import { DeleteCustomerAction } from '../../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
export const DeleteCustomer:React.FC = () =>{

const navigate = useNavigate();
const params = useParams();
const couponId = +(params.id || 0);

const [id, setId] = useState<number>(couponId);


const no = () => {
    navigate('/admin');
}

const yes = () => {
    web.deleteCustomer(id)
        .then(res => {
            notify.success(SccMsg.DELETE_Customer);
            store.dispatch(DeleteCustomerAction(id));
            navigate('/admin');
        })
        .catch(err => {
            notify.error(err.message);
            navigate('/delete/' + id);
        });

}

return (
    <div className="DeleteTodo flex-center-col">
        <h1>Delete Customer</h1>
        <h3>Are you sure you want to delete customer #{id}?</h3>
        <div className="flex-row">
            <button className="button-danger" onClick={yes} >YES</button>
            <button className="button" onClick={no}>NO</button>
        </div>
    </div>
);
}

