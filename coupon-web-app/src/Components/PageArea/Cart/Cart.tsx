import React, { useEffect, useState } from 'react'
import store from '../../../Redux/Store';
import { UserSearch } from '../../SystemApi/CouponArea/Serach/userSearch';
import { Catalog } from '../Catalog/Catalog';
import { Owner } from './Owner';

export const Cart:React.FC = () => {
    const [view,setView] = useState<string>("all");
    const all = () => {
        setView("all");
        };
    const search = () => {
        setView("search");
    };
    const [type,setType] = useState<string|undefined>(store.getState().authReducer.user?.clientType);
    useEffect(() => {
        
        return () => {
            setType(store.getState().authReducer.user?.clientType);
        }
    }, [type])
    
    return (
        <div>
            <div className='Catalog'>
            <button className={(view === "all")?"button-on":"button-off"} onClick={all} >All</button>
            <button className={(view === "search")?"button-on":"button-off"} onClick={search}>Search</button>
            </div>
            {
                (type !== undefined)
                ?
                (view=== "search")
                ?
                <div>
                <UserSearch />
                </div>
                :
                <Owner />
                :
                <img src="https://media1.giphy.com/media/TfdLueon5hT5OwnZ0S/giphy.webp?cid=ecf05e47g91tyjcmdmidxx31akja5l89j5jomsbv4a0p268l&rid=giphy.webp&ct=g" alt="unrecognized" />
            }
        </div>
    )
}
