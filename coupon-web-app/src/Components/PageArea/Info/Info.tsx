import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CompanyModel, CompanyPayloadModel, CustomerModel, CustomerPayloadModel } from '../../../Models/Users';
import store from '../../../Redux/Store'
import { AddCompanyAction, AddCustomerAction, AuthActionType, SaveCompanyAction, SaveCustomerAction } from '../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../Service/notify';
import { web } from '../../../Service/WebAPi';
import { OneCompany } from '../../SystemApi/AdminArea/OneCompany/OneCompany';
import { OneCustomer } from '../../SystemApi/AdminArea/OneCustomer/OneCustomer';
import { CouponList } from '../../SystemApi/CouponArea/CouponLIst/CouponList';
import './Info.css'

export const Info:React.FC = () => {
    const type = store.getState().authReducer.user?.clientType;
    const [company,setCompany] = useState<CompanyModel>(store.getState().authReducer.companiesInfo[0]);
    const [customer,setCustomer] = useState<CustomerModel>(store.getState().authReducer.customersInfo[0]);
useEffect(() => {
    switch(type){     
        case "Company" :
            if(store.getState().authReducer.companiesInfo.length === 0){
            web.CompanyDetails()
                .then(res=> {
                    notify.success(SccMsg.Company_Details);
                    store.dispatch(AddCompanyAction(res.data));
                    setCompany(store.getState().authReducer.companiesInfo[0]);
                })
                .catch(err => {
                    notify.error(err.message);
                });
            }
            break;
        case "Customer":
            if(store.getState().authReducer.customersInfo.length === 0){
            web.CustomerDetails()
                .then(res=> {
                    notify.success(SccMsg.CUSTOMER_DETAILS);
                    store.dispatch(AddCustomerAction(res.data));
                    setCompany(store.getState().authReducer.customersInfo[0]);
                })
                .catch(err => {
                    notify.error(err.message);
                });
            }
            break;
    }
    return store.subscribe(() => {
        setCompany(company);
        setCustomer(customer);
    });
}, [customer,company]);

    return(
        <div>
            {
                (type === "Company")
                ?
                <OneCompany company={company} info={true}/>
                :
                (type === "Customer")
                ?
                <OneCustomer customer={customer} info={true}/>
                :
                <>
                <img src="https://media1.giphy.com/media/TfdLueon5hT5OwnZ0S/giphy.webp?cid=ecf05e47g91tyjcmdmidxx31akja5l89j5jomsbv4a0p268l&rid=giphy.webp&ct=g" alt="unrecognized" />
                </>
            }
        </div>
);
}
