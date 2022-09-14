import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { RegisterCompany } from './RegisterCompany';
import { RegisterCustomer } from './RegisterCustomer';
import "./RegisterPage.css"


export const RegisterPage:React.FC = () => {
    const [type,setType] = useState<string>("Customer");

    const customer = () => {
        setType("Customer")
    };
    const company = () => {
        setType("Company")
    };    
    return (
        <div className='RegisterPage'>
            <button className={(type === "Customer")?"button-on":"button-off"} onClick={customer} >Customer</button>
            <button className={(type === "Company")?"button-on":"button-off"} onClick={company}>Company</button>
            {
                (type ==="Company")
                ?
                <RegisterCompany />
                :
                <RegisterCustomer />
            }
        <div>
            <span>Member already ? </span>
            <NavLink to = "/login"> Login </NavLink>
        </div>
        </div>
    )

}
