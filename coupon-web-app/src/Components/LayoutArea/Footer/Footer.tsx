import React from 'react'
import { NavLink } from 'react-router-dom'
import { Clock } from '../../PageArea/ClockTime/Clock'
import { SocialMedia } from '../../SocialMedia/SocialMedia'

const Footer:React.FC = () => {
    return (
        <div className = "Footer">
                <Clock/>
                <SocialMedia />
                <p>All Rights 2 Bar Saadi</p>
        </div>
    )
}

export default Footer