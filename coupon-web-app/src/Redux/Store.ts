import { combineReducers, createStore } from "redux";
import { couponReducer } from "./CouponAppState";
import { authReducer } from "./UserAppState";

const reducers = combineReducers({couponReducer: couponReducer,authReducer: authReducer});
const store = createStore(reducers);

export default store;