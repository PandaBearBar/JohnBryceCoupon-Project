import { CompanyModel, CustomerModel, UserModel } from "../Models/Users";

export class AuthAppState {
    public user: UserModel | null= new UserModel();
    public customersInfo: CustomerModel[] = []; 
    public companiesInfo: CompanyModel[] = []; 

    public constructor(){
        try 
        {
            const storedUser = JSON.parse(localStorage.getItem("user")||"");
            if (storedUser){
                this.user = storedUser;
            }
        }
        catch
        {
            this.user = null;
        }
    }
}
export enum AuthActionType {
    Register = "register",
    Login = "login",
    Logout = "logout",
    SaveCustomer = "SaveCustomer",
    SaveCompany = "SaveCompany",
    AddCustomer = "AddCustomer",
    AddCompany = "AddCompany",
    DeleteCustomer = "DeleteCustomer",
    DeleteCompany = "DeleteCompany",
    UpdateCustomer = "UpdateCustomer",
    UpdateCompany = "UpdateCompany"
}
export interface AuthAction {
    type : AuthActionType;
    payload?:any;
}
export function registerAction(): AuthAction {
    return { type: AuthActionType.Register };
}

export function loginAction(user: UserModel): AuthAction {
    return { type: AuthActionType.Login, payload: user };
}

export function logoutAction(): AuthAction {
    return { type: AuthActionType.Logout };
}
export function SaveCustomerAction(customers : CustomerModel[]): AuthAction {
    return { type: AuthActionType.SaveCustomer , payload: customers };
}
export function SaveCompanyAction(companies : CompanyModel[]): AuthAction {
    return { type: AuthActionType.SaveCompany, payload: companies };
}
export function AddCustomerAction(customer : CustomerModel): AuthAction {
    return { type: AuthActionType.AddCustomer , payload: customer };
}
export function AddCompanyAction(company : CompanyModel): AuthAction {
    return { type: AuthActionType.AddCompany, payload: company };
}
export function DeleteCustomerAction(id : number): AuthAction {
    return { type: AuthActionType.DeleteCustomer , payload: id };
}
export function DeleteCompanyAction(id : number): AuthAction {
    return { type: AuthActionType.DeleteCompany, payload: id };
}
export function UpdateCustomerAction(customer : CustomerModel): AuthAction {
    return { type: AuthActionType.UpdateCustomer , payload: customer };
}
export function UpdateCompanyAction(company : CompanyModel): AuthAction {
    return { type: AuthActionType.UpdateCompany, payload: company };
}

export function authReducer(currentState: AuthAppState = new AuthAppState(),
    action: AuthAction): AuthAppState {

    const newState = { ...currentState }
    switch (action.type) {
        case AuthActionType.Register:
            break;
        case AuthActionType.Login:
            newState.user = action.payload;
            localStorage.setItem("user", JSON.stringify(newState.user));
            break;
        case AuthActionType.Logout:
            localStorage.removeItem("user");
            newState.customersInfo = [];
            newState.companiesInfo = [];
            newState.user = null;
            break;
        case AuthActionType.SaveCompany:
            newState.companiesInfo = action.payload;
            break;
        case AuthActionType.SaveCustomer:
            newState.customersInfo = action.payload;
            break;
        case AuthActionType.AddCompany:
            newState.companiesInfo.push(action.payload);
            break;
        case AuthActionType.AddCustomer:
            newState.customersInfo.push(action.payload);
            break;        
        case AuthActionType.UpdateCompany:
            const idxCom = newState.companiesInfo.findIndex(c => c.notId === action.payload.notId);
            newState.companiesInfo[idxCom] = action.payload;
            break;
        case AuthActionType.UpdateCustomer:
            const idxCus = newState.customersInfo.findIndex(c => c.notId === action.payload.notId);
            newState.customersInfo[idxCus] = action.payload;
            break;        
        case AuthActionType.DeleteCompany:
            newState.companiesInfo = newState.companiesInfo.filter(c => c.notId !== action.payload);
            break;
        case AuthActionType.DeleteCustomer:
            newState.customersInfo = newState.customersInfo.filter(c => c.notId !== action.payload);
            break;
    }
    return newState;
}