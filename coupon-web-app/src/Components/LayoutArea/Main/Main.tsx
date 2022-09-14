import React from 'react'
import { Route, Switch } from 'react-router'
import { Outlet } from 'react-router-dom'
import Routing from '../../WebArea/Routing/Routing'



const Main:React.FC = () => {
    return (
        <div className = "Main">
            <Routing />
            <Outlet/>
        </div>
    )
}

export default Main