import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { CompanyPayloadModel } from '../../../../Models/Users';
import store from '../../../../Redux/Store';
import { AddCompanyAction, registerAction } from '../../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';


export const AddCompany:React.FC = () => {
    
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
        notName:
            yup.string()
                .min(2,"at least 2")
                .max(20,"u took it to far `\(*_*)/`")
                .required("first name is required")
    });

    const { register, handleSubmit, formState: { errors, isDirty, isValid } } =
    useForm<CompanyPayloadModel>({ mode: "all", resolver: yupResolver(schema) });
    
    const registerUser = async(user:CompanyPayloadModel) => {
            console.log(user);
            web.registerCompany(user)
            .then(res => {
                notify.success(SccMsg.REGISTER_SUCCESS);
                navigate("/admin");
                store.dispatch(AddCompanyAction(res.data));
            })
            .catch(err => { 
                notify.error('Oppsy : ' + err.message);
                navigate('/admin');
            });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(registerUser)} className="flex-center-col">
                <label htmlFor="email">email</label>
                <input {...register("notEmail")} type="email" placeholder="email" id="email" />
                <div className='ErrorRes'>{errors.notEmail?.message}</div>

                <label htmlFor="password">password</label>
                <input  {...register("notPassword")} type="password" placeholder="password" id="password" />
                <div className='ErrorRes'>{errors.notPassword?.message}</div>

                <label htmlFor="name">name</label>
                <input  {...register("notName")} type="text" placeholder=" name" id=" name" />
                <div className='ErrorRes'>{errors.notName?.message}</div>

                <button className="button-success" disabled={!isValid}>Add</button>
            </form>
        </div>
    )
}
