import { CouponModel } from "./Coupons";

export class UserModel {
    public token?: string;
    public email?: string;
    public clientType?:string;

    public constructor(token?: string, clientType?:string,email?: string) {
        this.email = email;
        this.token = token;
        this.clientType=clientType;
    }
}

export class CustomerModel{
    public notId?:number;
    public notFirstName?:string;
    public notLastName?:string;
    public notEmail?:string;
    public notPassword?:string;
    public notCoupons?:CouponModel[];
    
    public constructor (notId?:number, notFirstName?:string, notLastName?:string, notEmail?:string, notPassword?:string, notCoupons?:CouponModel[]){
        this.notId = notId;
        this.notFirstName = notFirstName;
        this.notLastName = notLastName;
        this.notEmail = notEmail;
        this.notPassword = notPassword;
        this.notCoupons = notCoupons;
    }
}

export class CompanyModel{
    public notId?:number;
    public notName?:string;
    public notEmail?:string;
    public notPassword?:string;
    public notCoupons?:CouponModel[];

    public constructor(notId?:number, notName?:string, notEmail?:string, notPassword?:string, notCoupons?:CouponModel[]){
        this.notPassword = notPassword;
        this.notCoupons = notCoupons;
        this.notEmail = notEmail;
        this.notName = notName;
        this.notId = notId;
    }
}
export class CustomerPayloadModel{
    public notFirstName?:string;
    public notLastName?:string;
    public notEmail?:string;
    public notPassword?:string;
    public notCoupons?:CouponModel[];
    
    public constructor (notFirstName?:string, notLastName?:string, notEmail?:string, notPassword?:string, notCoupons?:CouponModel[]){
        this.notFirstName = notFirstName;
        this.notLastName = notLastName;
        this.notEmail = notEmail;
        this.notPassword = notPassword;
        this.notCoupons = notCoupons;
    }
}

export class CompanyPayloadModel{
    public notName?:string;
    public notEmail?:string;
    public notPassword?:string;
    public notCoupons?:CouponModel[];

    public constructor(notName?:string, notEmail?:string, notPassword?:string, notCoupons?:CouponModel[]){
        this.notPassword = notPassword;
        this.notEmail = notEmail;
        this.notName = notName;
        this.notCoupons = notCoupons;
    }
}

export class LoginModel {
    public email?:string;
    public password?:string;
    public client?:string;

    public constructor(email?:string,client?:string,password?:string){
        this.email=email;
        this.client=client;
        this.password=password;
    }
}

export class CredentialsModel {
    public email?:string;
    public password?:string;
    public type?:string;

    public constructor(email?:string,type?:string,password?:string){
        this.email=email;
        this.password=password;
        this.type=type;
    }
}

export class RegisterModel {
    public email?: string;
    public password?: string;
    public client?:string;
    public confirm?: string;

    public constructor(email?: string, password?: string,client?:string ,confirm?: string) {
        this.email = email;
        this.password = password;
        this.client=client;
        this.confirm = confirm;
    }
}
export class RegisterPayloadModel{
    public notFirstName?:string;
    public notLastName?:string;
    public notEmail?:string;
    public notPassword?:string;
    public notName?:string;
    
    public constructor (notFirstName?:string,notName?:string, notLastName?:string, notEmail?:string, notPassword?:string){
        this.notFirstName = notFirstName;
        this.notLastName = notLastName;
        this.notEmail = notEmail;
        this.notPassword = notPassword;
}
}