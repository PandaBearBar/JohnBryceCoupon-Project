import { MdDelete, MdModeEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { CompanyModel } from "../../../../Models/Users";
import { BootCoupon } from "../../../PageArea/BootCoupon/BootCoupon";
import { EmptyView } from "../../../PageArea/EmptyView/EmptyView";

interface BootCardProps {
    company: CompanyModel;
    info:boolean
}

export function BootCompany(props: BootCardProps): JSX.Element {
    return (
        <div className="Boots" >
        <div className="card-body">
            <h5 className="card-title">{props.company.notName}</h5>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Email : {props.company.notEmail}</li>
            <li className="list-group-item">Password : {props.company.notPassword}</li>
            <li>        
                <div className="CouponList">
                    {
                        (props.company.notCoupons?.length??0 > 0)
                            ?
                            props.company.notCoupons?.map(c => <BootCoupon key={c.notId} coupon={c} owned={props.info} />)
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
            <NavLink to={`/company/delete/${props.company.notId}`}><MdDelete size={42} /></NavLink>
            <NavLink to={`/company/update/${props.company.notId}`}><MdModeEdit size={42}/></NavLink>
        </div>
        }
        </div>
    );
}
