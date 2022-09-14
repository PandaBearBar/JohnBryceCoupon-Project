import { CustomerModel } from "../../../../Models/Users";
import { BootCoupon } from "../../../PageArea/BootCoupon/BootCoupon";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";
import '../../CouponArea/CouponLIst/CouponList.css'
import { BootCustomers } from "../Boots/BootCustomer";

interface OneCustomerProps {
    customer: CustomerModel;
    info : boolean;
}
export function OneCustomer(props: OneCustomerProps): JSX.Element {
    return (
        <div>
            {
                (props.customer === undefined)
                ?
                <img src = 'https://media2.giphy.com/media/Rkis28kMJd1aE/200w.webp?cid=ecf05e47ptixd5ndupt9yk90yy7yix1dnlu7oxztcyt0hrfi&rid=200w.webp&ct=g'/>
                :
                <BootCustomers customer={props.customer} info={props.info} />
            }
        </div>
    );
}