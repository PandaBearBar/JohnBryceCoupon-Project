import { MdDelete, MdModeEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CustomerModel } from "../../../../Models/Users";
import { BootCoupon } from "../../../PageArea/BootCoupon/BootCoupon";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";
import "./Boots.css"

interface BootCardProps {
    customer: CustomerModel;
    info:boolean;
}

export function BootCustomers(props: BootCardProps): JSX.Element {
    return (
        <div className="Boots" >
        <div className="card-body">
            <h5 className="card-title">{props.customer.notFirstName} {props.customer.notLastName}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Email : {props.customer.notEmail}</li>
            <li className="list-group-item">Password : {props.customer.notPassword}</li>
            <li>        
                <div className="CouponList">
                    {
                        (props.customer.notCoupons?.length??0 > 0)
                            ?
                            props.customer.notCoupons?.map(c => <BootCoupon key={c.notId} coupon={c} owned={props.info} />)
                            :
                            <EmptyView msg='No Coupons' />
                    }
                </div>
            </li>
        </ul>
        {
        (props.info)
        ?
        <></>
        :
        <div className="card-body">
            <NavLink to={`/customer/delete/${props.customer.notId}`}><MdDelete size={42} /></NavLink>
            <NavLink to={`/customer/update/${props.customer.notId}`}><MdModeEdit size={42}/></NavLink>
        </div>
        }
        </div>
    );
}
