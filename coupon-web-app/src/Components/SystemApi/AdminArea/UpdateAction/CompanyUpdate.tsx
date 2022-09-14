import React, { useState } from 'react'
import { CompanyPayloadModel } from '../../../../Models/Users';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, useFormState } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import store from '../../../../Redux/Store';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
import { UpdateCompanyAction } from '../../../../Redux/UserAppState';


export const CompanyUpdate = () => {
  const navigate = useNavigate();
  const params = useParams();
  const toStr = params.id + "";
  const companyId:number = +toStr;
  const [id, setId] = useState<number>(companyId);
  const [company, setCompany] = useState<CompanyPayloadModel>(
    store.getState().authReducer.companiesInfo.filter(c => c.notId === id)[0]
  );
  const [origin, setOrigin] = useState<CompanyPayloadModel>({
    'notName' : company?.notName,
    'notEmail' : company?.notEmail,
    'notPassword' : company?.notPassword,
    'notCoupons' : company?.notCoupons
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
    notName:
      yup.string()
          .min(2,"at least 2")
          .max(20,"u took it to far `\(*_*)/`")
          .required("first name is required")
  });
  
  const { register, handleSubmit, control, formState: { errors, isDirty, isValid } }
    = useForm<CompanyPayloadModel>({ defaultValues: origin, mode: "all", resolver: yupResolver(schema) });
  const { dirtyFields } = useFormState({ control });
  
  const Update = async (company:CompanyPayloadModel) => {
      web.UpdateCompany(id,company)
      .then(res => {
          notify.success(SccMsg.UPDATE_Customer);
          store.dispatch(UpdateCompanyAction(res.data))
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

        <label htmlFor="name">Name</label>
        <input  {...register("notName")} type="text" placeholder="name" id="name" />
        <div className='ErrorRes'>{errors.notName?.message}</div>
        <button className="button-success" disabled={!isValid}>Update</button>
      </form>
    </div>
  )
}