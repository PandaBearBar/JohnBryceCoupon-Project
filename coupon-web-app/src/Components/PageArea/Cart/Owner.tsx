import React from 'react'
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import store from '../../../Redux/Store'
import { AddCoupon } from '../../SystemApi/CouponArea/AddCoupon/AddCoupon';
import { CouponList } from '../../SystemApi/CouponArea/CouponLIst/CouponList';
import {IoMdAddCircleOutline} from 'react-icons/io'

export const Owner:React.FC = () => {
    const type = store.getState().authReducer.user?.clientType;
        return(
        <>
            {
                (type === "Company")
                ?
                <>
                <div className = "navbar">
                    <NavLink className={"navbar-brand"} to={'/add'}><h1>Add Coupon :</h1><IoMdAddCircleOutline size={100} /></NavLink>
                </div>
                </>
                :
                <></>
            }
        <div>
            <CouponList/>
        </div>
        </>
        );
}