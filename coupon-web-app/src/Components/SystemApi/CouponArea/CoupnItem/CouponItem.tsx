import moment from "moment";
import { CouponModel } from "../../../../Models/Coupons";

interface CouponItemProps {
    coupon: CouponModel;
}
export function CouponItem(props: CouponItemProps): JSX.Element {
    return (
        <div className="CouponItem">
            <h2 className="single-line-only">{props.coupon.notTitle}</h2>
            <div className="card">
                <img src="https://cataas.com/cat/gif" alt={"Coupn"} />
                <span className="single-line-only">{props.coupon.notCategory}</span>
                <span className="single-line-only">{props.coupon.notDesc}</span>
                <span className="single-line-only">{props.coupon.notAmount}</span>
                <span className="single-line-only">{props.coupon.notPrice}</span>
                <span className="date">{moment(props.coupon.notStartDate).format("DD/MM/yyyy")}</span>
                <span className="date">{moment(props.coupon.notEndDate).format("DD/MM/yyyy")}</span>
                <div className="flex-around">
                </div>
            </div>
        </div>
    );
}