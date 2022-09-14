import { useState, useEffect } from "react";
import { CustomerModel } from "../../../../Models/Users";
import store from "../../../../Redux/Store";
import { SaveCompanyAction, SaveCustomerAction } from "../../../../Redux/UserAppState";
import { notify, SccMsg } from "../../../../Service/notify";
import { web } from "../../../../Service/WebAPi";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";
import { BootCustomers } from "../Boots/BootCustomer";

export const CustomerList:React.FC = () => {
    const [customers, setCustomers] = useState<CustomerModel[]>(store.getState().authReducer.customersInfo??[]); 
    const type = store.getState().authReducer?.user?.clientType;

    useEffect(() => {
        if(customers.length === 0 || customers.length !==store.getState().authReducer.customersInfo.length){
            web.getCustomers()
            .then((res)=>{
                notify.success(SccMsg.Customers_Found);
                store.dispatch(SaveCustomerAction(res.data));
                setCustomers(store.getState().authReducer.customersInfo);
            })
            .catch((err)=>{
                notify.error(err.message);
            });
        }
        return store.subscribe(()=>{
            setCustomers(customers);
        });
    }, [customers])

    return(
        <div className="CouponList">
            {
                (customers.length > 0)
                    ?
                    customers.map(c => <BootCustomers key={c.notId} customer={c} info={false}/>)
                    :
                    <EmptyView msg='No Companies' />
            }
        </div>
    );
}