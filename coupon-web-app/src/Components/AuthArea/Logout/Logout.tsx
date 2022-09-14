import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CouponClearAction } from '../../../Redux/CouponAppState';
import store from '../../../Redux/Store';
import { logoutAction } from '../../../Redux/UserAppState';

export const Logout:React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const res = window.confirm("Logout for sure ?");
        if(res){
            store.dispatch(logoutAction());
            store.dispatch(CouponClearAction());
            navigate('/login');
        }
        else{navigate('/');}
    });
    return (
        <>
        </>
    );
}
