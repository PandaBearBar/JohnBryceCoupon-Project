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
interface LoginFormProps {
    type : string;
}
export function LoginForm(props: LoginFormProps):JSX.Element{

    const navigate = useNavigate();

    const schema = yup.object().shape({
        email:
            yup.string()
                .email("Invalid Email Pattern")
                .required("Email is required"),
        password:
            yup.string()
                .required("Password is required")
                .min(4, "min 4")
                .max(16, "max 16")
    });
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<LoginModel>({ mode: "all", resolver: yupResolver(schema) });

    const loginUser = async (model: LoginModel) => {
        const credentials = new CredentialsModel();
        credentials.email = model.email;
        credentials.password = model.password;
        credentials.type = props.type;
    
        web.login(credentials)
        .then((res) => {
            notify.success(SccMsg.LOGIN_SUCCESS );
            store.dispatch(loginAction(res.data));
            navigate('/');
        })
        .catch(err => {
            console.log("error")
            notify.error(err.message);
            navigate('/login');
        });
    }


    return(
        <form onSubmit={handleSubmit(loginUser)} className="flex-center-col">
            <h1>
                {
                    (props.type === "Customer")
                    ?
                    "Customer Login :"
                    :
                    (props.type === "Company")
                    ? 
                    "Company Login :"
                    :
                    "Admin Login :"
                }
            </h1>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" placeholder="email" id="email" />
        <div className = {'ErrorRes'}>{errors.email?.message}</div>
        <div></div>
        <label htmlFor="password">Password</label>
        <input  {...register("password")} type="password" placeholder="password" id="password" />
        <div className = {'ErrorRes'}>{errors.password?.message}</div>
        <div></div>
        <button className="button-success" disabled={!isValid}>Login</button>
        </form>
    )
}