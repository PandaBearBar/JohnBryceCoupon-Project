import  { useEffect, useState } from 'react'
import { CompanyModel, CustomerModel } from '../../../../Models/Users';
import store from '../../../../Redux/Store';
import { notify, SccMsg } from '../../../../Service/notify';
import { web } from '../../../../Service/WebAPi';
import { OneCompany } from '../OneCompany/OneCompany';
import { OneCustomer } from '../OneCustomer/OneCustomer';
    interface SelectOneProps {
        type:string;
    }
    export function SelectOne (props:SelectOneProps): JSX.Element{
        const [num,setNum] = useState<number>(1);
        const[customer,setCustomer] = useState<CustomerModel>(new CustomerModel);
        const[company,setCompany] = useState<CompanyModel>(new CompanyModel);
        const plus = () => {
            if(store.getState().authReducer.companiesInfo.length <= num || store.getState().authReducer.customersInfo.length <= num){
                window.alert("No More")
            }else{
                setNum(num + 1)
            }
            
        };
        const minus = () => {
            if(num >= 2 ) {
                setNum(num - 1)
            }else {
                window.alert("Cant be less then 1")
            }
        };
        useEffect(() => {
            switch(props.type){
                case "Customer" :
                    setCustomer(store.getState().authReducer.customersInfo.filter(c => c.notId === num)[0]);
                    if (customer === undefined){
                        web.GetCustomer(num)
                        .then(res =>{
                            notify.success(SccMsg.CUSTOMER_DETAILS);
                            setCustomer(res.data);
                        }).catch(err =>{
                            notify.error('Oppsy :' + err.message);
                            setCustomer(new CustomerModel)
                        });
                    }
                break;
                case "Company" :
                    setCompany(store.getState().authReducer.companiesInfo.filter(c => c.notId === num)[0]);
                    if(company === undefined){
                        web.GetCompany(num)
                        .then(res =>{
                            notify.success(SccMsg.Company_Details);
                            setCompany(res.data);
                        }).catch(err =>{
                            notify.error('Oppsy :' + err.message);
                            setCompany(new CompanyModel)
                        });
                    }
                break;
            }
            return () => {
                setCustomer(customer);
                setCompany(company);
            }
            }, [props.type,num]);
            useEffect(() => {
            return () => {
                setNum(1);
            }
            }, [props.type]);
            
        return (
            <div>
                <div>
                <button className={"bottom"} onClick={plus} >+</button>
                <span>  {num}  </span>
                <button className={"bottom"} onClick={minus} >-</button>
                </div>
                {
                (props.type === "Customer")
                ?
                <div>
                    <OneCustomer customer={customer} info={false} />
                </div>
                :
                <div>
                    <OneCompany company={company} info={false} />
                </div>
                }
            </div>
        )
    }