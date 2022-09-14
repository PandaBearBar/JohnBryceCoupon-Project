import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthMenu } from '../../AuthArea/AuthMenu/AuthMenu'
import './NavbarOverwrite.css'
import { OwnedIcon } from '../../PageArea/Cart/OwnedIcon'
import {AiOutlineHome, AiOutlineInfoCircle} from 'react-icons/ai'
import {FiShoppingBag} from 'react-icons/fi'
import {FaDonate, FaMagic} from 'react-icons/fa'
import { RiCoupon3Line } from 'react-icons/ri'
import { FcViewDetails } from 'react-icons/fc'
import store from '../../../Redux/Store'

export const Head:React.FC= () => {
    const [type,setType] = useState<string|undefined>();
    useEffect(() => {
        setType(store.getState().authReducer.user?.clientType);
        return store.subscribe(() => {
            setType(store.getState().authReducer.user?.clientType);
        })
    }, [type])
        return (
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink  className={"navbar-brand"} to={'/'}><AiOutlineHome size={45}/></NavLink>
        {
        (type === "Administrator")
        ?
            <NavLink className={"navbar-brand"} to={'/admin'}><FaMagic size={45}/></NavLink>
        :
        <>
            <NavLink  className={"navbar-brand"} to={'/catalog'}><FiShoppingBag size={45}/></NavLink>
            <NavLink  className={"navbar-brand"} to={'/about'}><AiOutlineInfoCircle size={45}/></NavLink>
            <NavLink  className={"navbar-brand"} to={'/donate'}><FaDonate size={45} /></NavLink>
            <NavLink  className={"navbar-brand"} to={'/owned'}><OwnedIcon /><RiCoupon3Line size={30} /></NavLink>
            <NavLink  className={"navbar-brand"} to={'/info'}><FcViewDetails size={30} /></NavLink>
        </>
        }
            <AuthMenu />
        </nav>
    )
}

