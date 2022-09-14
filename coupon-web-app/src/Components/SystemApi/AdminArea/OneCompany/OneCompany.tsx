import moment from "moment";
import { CompanyModel } from "../../../../Models/Users";
import { BootCoupon } from "../../../PageArea/BootCoupon/BootCoupon";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";
import '../../CouponArea/CouponLIst/CouponList.css'
import { BootCompany } from "../Boots/BootComapny";

interface OneCompanyProps {
    company: CompanyModel ;
    info :boolean;
}
export function OneCompany(props: OneCompanyProps): JSX.Element {
    return (
        <div>
            {
                (props.company === undefined)
                ?
                <img src = 'https://media2.giphy.com/media/Rkis28kMJd1aE/200w.webp?cid=ecf05e47ptixd5ndupt9yk90yy7yix1dnlu7oxztcyt0hrfi&rid=200w.webp&ct=g'/>
                :
                <BootCompany company={props.company} info={props.info} />
            }
        </div>
    );
}