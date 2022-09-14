import React from 'react'
import { AddCompany } from './RegisterCompany';
import { AddCustomer } from './RegisterCustomer';
interface AddActionProps {
    type : string ;
}
export function AddAction (props:AddActionProps):JSX.Element  {
    return (
        <div>
            {
                (props.type === "Customer")
                ?
                <AddCustomer />
                :
                <AddCompany />
            }
        </div>
    )
}
