import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { LoginModel, CredentialsModel } from '../../../Models/Users';
import store from '../../../Redux/Store';
import { loginAction } from '../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../Service/notify';
import { web } from '../../../Service/WebAPi';
import { LoginForm } from './LoginForm';
import "./LoginPage.css"

export const LoginPage:React.FC= () => {
    const [type,setType] = useState<string>("Customer");
    
    const customer= () => {
        setType("Customer");
    }
    const company = () => {
        setType("Company");
    }
    const admin = () => {
        setType("Administrator");
    }
    return (
        <div className='LoginPage'>
            <button className={(type === "Customer")?"button-on":"button-off"} onClick={customer} >Customer</button>
            <button className={(type === "Company")?"button-on":"button-off"} onClick={company}>Company</button>
            <button className={(type === "Administrator")?"button-on":"button-off"} onClick={admin}>Administrator</button>
            <LoginForm type={type} />
            <NavLink to = "/register"> Register </NavLink>
        </div>
    )
}

