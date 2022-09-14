export enum CategoryModel{
    Food = "Food",
    Electricity = "Electricity",
    Restaurant ="Restaurant",
    Vacation ="Vacation",
}

export class CouponModel{
    public notId?: number;
    public notCompanyId?:number;
    public notPrice?: number;
    public notAmount?: number;
    public notTitle?: string;
    public notDesc?:string;
    public notCategory?: string;
    public notImg?:string;
    public notStartDate?: Date;
    public notEndDate?: Date;

    public constructor (notId?: number,notCompanyId?:number,notPrice?: number,notAmount?: number,notTitle?: string,notDesc?:string,notCategory?: string,notImg?:string,notStartDate?: Date,notEndDate?: Date){
        
        this.notId = notId;
        this.notCompanyId = notCompanyId;
        this.notPrice = notPrice;
        this.notAmount = notAmount;
        this.notTitle = notTitle;
        this.notDesc = notDesc;
        this.notCategory = notCategory;
        this.notImg = notImg;
        this.notStartDate = notStartDate;
        this.notEndDate = notEndDate;
    }
}

export class CouponPayloadModel{
    public notPrice?: number;
    public notCompanyId?:number;
    public notAmount?: number;
    public notTitle?: string;
    public notDesc?:string;
    public notCategory?: string;
    public notImg?:string;
    public notStartDate?: Date;
    public notEndDate?: Date;

    public constructor (notPrice?: number,notCompanyId?:number,notAmount?: number,notTitle?: string,notDesc?:string,notCategory?: string,notImg?:string,notStartDate?: Date,notEndDate?: Date){

        this.notCompanyId = notCompanyId;
        this.notPrice = notPrice;
        this.notAmount = notAmount;
        this.notTitle = notTitle;
        this.notDesc = notDesc;
        this.notCategory = notCategory;
        this.notImg = notImg;
        this.notStartDate = notStartDate;
        this.notEndDate = notEndDate;
    }
}
export class searchModel{
    public category?:string;
    public maxPrice?:number;
    public constructor(category?:string,maxPrice?: number){
        this.category=category;
        this.maxPrice=maxPrice;
    }
} 
