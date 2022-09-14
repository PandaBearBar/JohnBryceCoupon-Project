import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home} from '../../PageArea/Home/Home'
import {About} from '../../PageArea/About/About'
import {Donate} from '../../PageArea/Donate/Donate'
import {Page404} from '../../PageArea/Page404/Page404'
import { Logout } from '../../AuthArea/Logout/Logout'
import {Catalog} from '../../PageArea/Catalog/Catalog'
import { AddCoupon } from '../../SystemApi/CouponArea/AddCoupon/AddCoupon'
import { Owner } from '../../PageArea/Cart/Owner'
import { DeleteCoupon } from '../../SystemApi/CouponArea/DeleteCoupon/DeleteCoupon'
import {UpdateCoupon} from '../../SystemApi/CouponArea/UpdateCoupon/UpdateCoupon'
import {CouponPurchase} from '../../SystemApi/CouponArea/CouponPurchase/CouponPurchase'
import {CouponRefund} from '../../SystemApi/CouponArea/CouponRefund/CouponRefund'
import { Info } from '../../PageArea/Info/Info'
import { LoginPage } from '../../AuthArea/Login/LoginPage'
import {RegisterPage} from '../../AuthArea/Register/RegisterPage'
import { AdminController } from '../../SystemApi/AdminArea/AdminController/AdminController'
import { DeleteCustomer } from '../../SystemApi/AdminArea/DeleteAction/DeleteCustomer'
import { DeleteCompany } from '../../SystemApi/AdminArea/DeleteAction/DeleteCompay'
import { CustomerUpdate } from '../../SystemApi/AdminArea/UpdateAction/CustomerUpdate'
import { CompanyUpdate } from '../../SystemApi/AdminArea/UpdateAction/CompanyUpdate'
import { Cart } from '../../PageArea/Cart/Cart'

const Routing:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/donate' element={<Donate />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/owned" element={<Cart />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/add" element={<AddCoupon />} />
                <Route path="/delete/:id" element={<DeleteCoupon />} />
                <Route path="customer/delete/:id" element={<DeleteCustomer />} />
                <Route path="company/delete/:id" element={<DeleteCompany />} />
                <Route path="customer/update/:id" element={<CustomerUpdate />} />
                <Route path="company/update/:id" element={<CompanyUpdate />} />
                <Route path="/update/:id" element = {<UpdateCoupon/>}  />
                <Route path="/refund/:id" element={<CouponRefund />} />
                <Route path="/purchase/:id" element={<CouponPurchase />} />
                <Route path="/info" element={<Info />} />
                <Route path="/admin" element={<AdminController />}/>
                <Route path='*' element={<Page404 />} />
            </Routes>
            
        </div>
    )
}

export default Routing