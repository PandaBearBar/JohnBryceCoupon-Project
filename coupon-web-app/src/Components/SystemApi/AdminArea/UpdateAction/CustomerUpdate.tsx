import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CustomerModel, CustomerPayloadModel } from '../../../../Models/Users';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import store from '../../../../Redux/Store';
import { UpdateCustomerAction } from '../../../../Redux/UserAppState';


export const CustomerUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const toStr = params.id + "";
  const customerId:number = +toStr;
  const [id, setId] = useState<number>(customerId);
  const [customer, setCustomer] = useState<CustomerPayloadModel>(
    store.getState().authReducer.customersInfo.filter(c => c.notId === id)[0]
  );
  const [origin, setOrigin] = useState<CustomerPayloadModel>({
    'notFirstName' : customer?.notFirstName,
    'notLastName' : customer?.notLastName,
    'notEmail' : customer?.notEmail,
    'notPassword' : customer?.notPassword,
    'notCoupons' : customer?.notCoupons
  });
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
  
  const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
      = useForm<CustomerPayloadModel>({ defaultValues: origin, mode: "all", resolver: yupResolver(schema) });
  const { dirtyFields } = useFormState({ control });
  
  const Update = async (customer:CustomerPayloadModel) => {
      web.UpdateCustomer(id,customer)
      .then(res => {
          notify.success(SccMsg.UPDATE_Customer);
          store.dispatch(UpdateCustomerAction(res.data))
          navigate('/admin');
      })
      .catch(err => { notify.error('Oppsy : ' + err.message) });
  }

  return (
    <div>
    <h1>Update Customer :</h1>
      <form onSubmit={handleSubmit(Update)} className="flex-center-col">
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
        <button className="button-success" disabled={!isValid}>Update</button>
      </form>
    </div>
  )
}
