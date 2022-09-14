import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import { CustomerPayloadModel } from '../../../Models/Users';
import store from '../../../Redux/Store';
import { registerAction } from '../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../Service/notify';
import * as yup from 'yup';
import { web } from '../../../Service/WebAPi';
import { useNavigate } from 'react-router-dom';


export const RegisterCustomer:React.FC = () => {
        
    const navigate = useNavigate();
    
    const schema = yup.object().shape({
        notEmail:
        yup.string()
            .email("Invalid Email Pattern")
            .required("Email is required"),
    notPassword:
        yup.string()
            .min(4, "at least 4")
            .max(16, "at most 16")
            .required("Password is required"),
    notFirstName:
        yup.string()
            .min(2,"at least 2")
            .max(20,"u took it to far `\(*_*)/`")
            .required("first name is required"),
    notLastName:
        yup.string()
            .min(2,"at least 2")
            .max(20,"u took it to far `\(*_*)/`")
            .required("first name is required")
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<CustomerPayloadModel>({ mode: "all", resolver: yupResolver(schema) });
    
    const registerUser = async(user:CustomerPayloadModel) => {
        web.registerCustomer(user)
            .then(res => {
                notify.success(SccMsg.REGISTER_SUCCESS);
                navigate("/login");
                store.dispatch(registerAction());
            })
            .catch(err => { 
                notify.error('Oppsy : ' + err.message);
                navigate('/register');
            });
    };

    return (
        <div>
            <h1>Customer Register :</h1>
            <form onSubmit={handleSubmit(registerUser)} className="flex-center-col">
                <label htmlFor="email">email</label>
                <input {...register("notEmail")} type="email" placeholder="email" id="email" />
                <div className='ErrorRes'>{errors.notEmail?.message}</div>

                <label htmlFor="password">password</label>
                <input  {...register("notPassword")} type="password" placeholder="password" id="password" />
                <div className='ErrorRes'>{errors.notPassword?.message}</div>

                <label htmlFor="first name">first name</label>
                <input  {...register("notFirstName")} type="text" placeholder="first name" id="first name" />
                <div className='ErrorRes'>{errors.notFirstName?.message}</div>

                <label htmlFor="last name">last name</label>
                <input  {...register("notLastName")} type="text" placeholder="last name" id="last name" />
                <div className='ErrorRes'>{errors.notLastName?.message}</div>
                <button className="button-success" disabled={!isValid}>Register</button>
                </form>
        </div>
    )
}
