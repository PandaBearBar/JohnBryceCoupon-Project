import moment from "moment";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { CouponModel } from "../../../Models/Coupons";
import store from "../../../Redux/Store";
import './BootCoupon.css';
import { MdDelete, MdModeEdit } from "react-icons/md";
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs";

interface BootCardProps {
    coupon: CouponModel;
    owned : boolean;
}

export function BootCoupon(props: BootCardProps): JSX.Element {
    const type = store.getState().authReducer.user?.clientType;
    const statement: boolean = props.owned;
    return (
        <div className="BootCoupon" >
        <img className="card-img-top" src="https://cataas.com/cat/gif" alt="Card image cap" />
        <div className="card-body">
            <h5 className="card-title">{props.coupon.notTitle}</h5>
            <p className="card-text">{props.coupon.notDesc}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Category : {props.coupon.notCategory}</li>
            <li className="list-group-item">Amount : {props.coupon.notAmount}</li>
            <li className="list-group-item">Price: {props.coupon.notPrice}</li>
            <li className="list-group-item">Started @ : {moment(props.coupon.notStartDate).format("DD/MM/yyyy")}</li>
            <li className="list-group-item">End @ : {moment(props.coupon.notEndDate).format("DD/MM/yyyy")}</li>
        </ul>
        <div className="card-body">
            {
                (type === "Company")
                ?
                (statement)
                ?
                <>
                    <NavLink to={`/delete/${props.coupon.notId}`}><MdDelete size={42} /></NavLink>
                    <NavLink to={`/update/${props.coupon.notId}`}><MdModeEdit size={42}/></NavLink>
                </>
                :
                <></>
                :
                (type === "Customer")
                ?
                (statement)
                ?
                <>
                    <NavLink to={`/refund/${props.coupon.notId}`}><BsFillCartDashFill size={42} /></NavLink>
                </>
                :
                <>
                    <NavLink to={`/purchase/${props.coupon.notId}`}><BsFillCartPlusFill size={42} /></NavLink>
                </>
                :
                <></>
            }
        </div>
        </div>
    );
}
