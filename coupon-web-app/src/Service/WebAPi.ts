import axios from "axios";
import { useParams } from "react-router-dom";
import { CouponModel, CouponPayloadModel } from "../Models/Coupons";
import { CompanyModel, CompanyPayloadModel, CredentialsModel, CustomerModel, CustomerPayloadModel, LoginModel, UserModel } from "../Models/Users";
import globals from "./Globals";
import { tokenAxios } from "./InterceptorAxios";

class WebApi {

    private customerApi = globals.urls.customerApi;
    private companyApi = globals.urls.companyApi;
    private adminApi = globals.urls.adminApi;
    private loginApi = globals.urls.loginApi
    private registerApi = globals.urls.registerApi

    /*Login*/
    public async login(credentials: CredentialsModel): Promise<any> {
        const request:string ="?clientType="+credentials.type;
        return await axios.post<LoginModel>(this.loginApi + request, credentials);
    }
    /*Companies */
    public async CompanyDetails():Promise<any>{
        return await tokenAxios.get<CompanyModel>(this.companyApi  + "info")
    }
    public async registerCompany(credentials: CompanyPayloadModel): Promise<any> {
        return await axios.post<any>(this.registerApi + 'company', credentials);
    }
    public async countCompanyCoupons(): Promise<any> {
        return await tokenAxios.get<number>(this.companyApi + 'count');
    }
    public async getCompanyCoupons():Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.companyApi + 'coupons')
    }
    /* Customers */
    public async CustomerDetails():Promise<any>{
        return await tokenAxios.get<CustomerModel>(this.customerApi + "info")
    }
    public async registerCustomer(credentials: CustomerPayloadModel): Promise<any> {
        return await axios.post<any>(this.registerApi + 'customer', credentials);
    }
    public async countCustomerCoupons(): Promise<any> {
        return await tokenAxios.get<number>(this.customerApi + 'count');
    }
    public async getCustomerCoupons():Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.customerApi + 'coupons')
    }
    /* Coupons */
    public async addCoupon(coupon:CouponPayloadModel):Promise<any>{
        return await tokenAxios.post<any>(this.companyApi,coupon)
    }
    public async deleteCoupon(id:number):Promise<any>{
        return await tokenAxios.delete<any>(this.companyApi + id )
    }
    public async updateCoupon(id:number,coupon:CouponPayloadModel):Promise<any>{
        return await tokenAxios.put<any>(this.companyApi +  id , coupon)
    }
    public async getAllCoupons():Promise<any>{
        return await axios.get<any>(this.adminApi + 'coupons')
    }
    public async PurchaseCoupon(id:number, coupon : CouponPayloadModel):Promise<any>{
        return await tokenAxios.put<any>(this.customerApi + 'purchase/' + id,coupon)
    }
    public async RefundCoupon(id:number, coupon : CouponPayloadModel):Promise<any>{
        return await tokenAxios.put<any>(this.customerApi + 'refund/' + id,coupon )
    }
    public async getCouponsByCompanyCategory(category : string|undefined):Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.companyApi + `coupons/category?category=${category}`)
    }
    public async getCouponsByCustomerCategory(category : string|undefined):Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.customerApi +`coupons/category?category=${category}`)
    }
    public async getCouponsByCompanyPrice(price : number|undefined):Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.companyApi + `coupons/price?maxPrice=${price}` )
    }
    public async getCouponsByCustomerPrice(price : number|undefined):Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.customerApi  + `coupons/price?maxPrice=${price}`)
    }
    public async getCouponsByMaxPrice(price?:number):Promise<any>{
        return await axios.get<CouponModel[]>(this.adminApi  + `coupons/price?maxPrice=${price}`)
    }
    public async getCouponsByCategory(category?:string):Promise<any>{
        return await axios.get<CouponModel[]>(this.adminApi  + `coupons/category?category=${category}`)
    }
    /*Admin */
    public async getCompanies():Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.adminApi + 'companies')
    }
    public async getCustomers():Promise<any>{
        return await tokenAxios.get<CouponModel[]>(this.adminApi + 'customers')
    }
    public async deleteCompany(id:number):Promise<any>{
        return await tokenAxios.delete<any>(this.adminApi + 'company/' + id)
    }
    public async deleteCustomer(id:number):Promise<any>{
        return await tokenAxios.delete<any>(this.adminApi + 'customer/' + id)
    }
    public async GetCompany(id:number):Promise<any>{
        return await tokenAxios.get<any>(this.adminApi + 'company/' + id)
    }
    public async GetCustomer(id:number):Promise<any>{
        return await tokenAxios.get<any>(this.adminApi + 'customer/' + id)
    }
    public async UpdateCustomer(id:number,customer:CustomerPayloadModel):Promise<any>{
        return await tokenAxios.put<any>(this.adminApi + 'customer/' + id, customer)
    }
    public async UpdateCompany(id:number, company:CompanyPayloadModel):Promise<any>{
        return await tokenAxios.put<any>(this.adminApi + 'company/' + id,company)
    }

}
export const web = new WebApi();