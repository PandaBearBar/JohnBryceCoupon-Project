import React, { useEffect, useState } from 'react'
import store from '../../../../Redux/Store';
import { SaveCompanyAction, SaveCustomerAction } from '../../../../Redux/UserAppState';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
import { AddAction } from '../AddAction/AddAction';
import { CompanyList } from '../ManyCompanies/ManyCompanies'
import { CustomerList } from '../ManyCustomers/ManyCustomers'
import { OneCompany } from '../OneCompany/OneCompany';
import { SelectOne } from './SelectOne';

export const AdminController = ():JSX.Element => {
    const [viewMode, setViewMode] = useState<string>('All');
    const [selectType, setSelectType] = useState<string>('Customer');    
    return (
        <div>
            <h1>Admin-Controller</h1>
            <div>
                <button className={(selectType === "Customer")?"button-on":"button-off"} onClick={()=> setSelectType("Customer")} >Customer</button>
                <button className={(selectType === "Company")?"button-on":"button-off"} onClick={()=> setSelectType("Company")}>Company</button>
            </div>
            <div>
                <button className={(viewMode === "All")?"button-on":"button-off"} onClick={()=> setViewMode("All")} >All</button>
                <button className={(viewMode === "One")?"button-on":"button-off"} onClick={()=> setViewMode("One")}>One</button>
                <button className={(viewMode === "Add")?"button-on":"button-off"} onClick={()=> setViewMode("Add")}>Add</button>
            </div>
            {
                (selectType === "Customer")
                ?
                    (viewMode === "All")
                    ?
                    <CustomerList/>
                    :
                    (viewMode === "One")
                    ?
                    <SelectOne type={selectType} />
                    :
                    <AddAction type={selectType} />
                :
                    (viewMode === "All")
                    ?
                    <CompanyList/>
                    :
                        (viewMode === "One")
                        ?
                        <SelectOne type={selectType} />
                        :
                        <AddAction type={selectType} />
            }
        </div>
    )
}
