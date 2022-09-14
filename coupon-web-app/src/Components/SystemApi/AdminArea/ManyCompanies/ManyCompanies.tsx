import { useState, useEffect } from "react";
import { CompanyModel } from "../../../../Models/Users";
import { CouponDownloadedAction } from "../../../../Redux/CouponAppState";
import store from "../../../../Redux/Store";
import { SaveCompanyAction } from "../../../../Redux/UserAppState";
import { notify, SccMsg } from "../../../../Service/notify";
import { web } from "../../../../Service/WebAPi";
import { BootCoupon } from "../../../PageArea/BootCoupon/BootCoupon";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";
import '../../CouponArea/CouponLIst/CouponList.css'
import { BootCompany } from "../Boots/BootComapny";


export const CompanyList:React.FC = () => {
    const [companies, setCompanies] = useState<CompanyModel[]>(store.getState().authReducer.companiesInfo??[]); 
    const type = store.getState().authReducer?.user?.clientType;

    useEffect(() => {
        if(companies.length === 0 || companies.length !==store.getState().authReducer.companiesInfo.length){
            web.getCompanies()
            .then((res)=>{
                notify.success(SccMsg.Companies_Found);
                store.dispatch(SaveCompanyAction(res.data))
                setCompanies(store.getState().authReducer.companiesInfo);
            })
            .catch((err)=>{
                notify.error(err.message);
            });
        }
            return store.subscribe(() =>{
                setCompanies(companies);
            });
    }, [companies])

    return(
        <div className="CouponList">
            {
                (companies.length > 0)
                    ?
                    companies.map(c => <BootCompany key={c.notId} company={c} info={false}/>)
                    :
                    <EmptyView msg='No Companies' />
            }
        </div>
    );
}