import { CouponModel } from "../Models/Coupons";

export class CouponAppState{
    public coupons: CouponModel[] = [];
    public webCoupons : CouponModel[] = [];
}
export enum CouponActionType {
    CouponDeleted = "CouponDeleted",
    CouponClear = "CouponClear",
    CouponPurchased = "CouponPurchased",
    CouponRefund = "CouponRefund",
    CouponUpdated = "CouponUpdate",
    CouponsDownloaded = "CouponsDownloaded",
    CouponAdded = "CouponAdded",
    CouponsDownloadedWeb = "CouponsDownloadedWeb"
}

export interface CouponAction {
    type : CouponActionType;
    payload?: any;
}

export function CouponDeletedAction (id : number) : CouponAction {
    return{type: CouponActionType.CouponDeleted, payload:id};
}

export function CouponUpdatedAction (coupon : CouponModel) : CouponAction {
    return{type: CouponActionType.CouponUpdated, payload:coupon};
}
export function CouponPurchasedAction (coupon : CouponModel) : CouponAction {
    return{type: CouponActionType.CouponPurchased,payload:coupon};
}
export function CouponRefundAction (coupon :  CouponModel) : CouponAction {
    return{type: CouponActionType.CouponRefund,payload:coupon};
}

export function CouponClearAction () : CouponAction {
    return{type: CouponActionType.CouponClear};
}

export function CouponDownloadedAction (coupons : CouponModel[]) : CouponAction {
    return{type: CouponActionType.CouponsDownloaded , payload:coupons};
}
export function CouponDownloadedWebAction (coupons : CouponModel[]) : CouponAction {
    return{type: CouponActionType.CouponsDownloadedWeb , payload:coupons};
}
export function CouponAddedAction (coupon : CouponModel) : CouponAction {
    return{type: CouponActionType.CouponAdded , payload:coupon};
}

export function couponReducer(currentState : CouponAppState = new CouponAppState(), action: CouponAction) : CouponAppState {

    const newState = { ...currentState }

    let idx:number;
    let idxWeb:number;

    switch (action.type) {
        case CouponActionType.CouponUpdated:
            idx = newState.coupons.findIndex(c => c.notId === action.payload.notId);
            newState.coupons[idx] = action.payload;
            idxWeb = newState.webCoupons.findIndex(c => c.notId === action.payload.notId);
            newState.webCoupons[idxWeb] = action.payload;
            break;
        case CouponActionType.CouponDeleted:
            newState.coupons = newState.coupons.filter(c => c.notId !== action.payload);
            newState.webCoupons = newState.webCoupons.filter(c => c.notId !== action.payload);
            break;
        case CouponActionType.CouponClear:
            newState.coupons = [];
            break;
        case CouponActionType.CouponsDownloaded:
            newState.coupons = action.payload;
            break;
        case CouponActionType.CouponsDownloadedWeb:
            newState.webCoupons = action.payload;
            break;
        case CouponActionType.CouponAdded:
            newState.coupons.push(action.payload);
            newState.webCoupons.push(action.payload);
            break;
        case CouponActionType.CouponRefund:
            newState.coupons = newState.coupons.filter(c => c.notId !== action.payload.notId);
            idxWeb = newState.webCoupons.findIndex(c => c.notId === action.payload.notId);
            newState.webCoupons[idxWeb] = action.payload;
            break;
        case CouponActionType.CouponPurchased:
            newState.coupons.push(action.payload);
            idxWeb = newState.webCoupons.findIndex(c => c.notId === action.payload.notId);
            newState.webCoupons[idxWeb] = action.payload;
            break;
        }
        return newState
}
