import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import store from "../../../Redux/Store";

export const AuthMenu: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(store.getState().authReducer.user?.token?.length ?? 0> 0);
    const [email, setEmail] = useState(store.getState().authReducer?.user?.email);
    
    useEffect(() => {
        return store.subscribe(() => {
            setIsLoggedIn(store.getState().authReducer.user?.token?.length ?? 0 > 0);
            setEmail(store.getState().authReducer?.user?.email);
        });
    },[]);

return(
    <div className={"navbar-brand"}>
        {
        isLoggedIn
            ?
            <><div>Hello {email}</div>
                <NavLink to = "/logout"> Logout </NavLink>
            </>
            :
            <>
            <div>Hello Guest</div>
                <NavLink to = "login"> Login </NavLink>
            </>
        }
    </div>
)
}