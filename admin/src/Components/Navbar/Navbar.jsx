import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/nav-logo.svg'
import navprofile from '../Assets/nav-profile.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={navlogo} className='nav-logo' alt="" />
            <img src={navprofile} className='nav-profile' alt="" />
        </div>
    )
}

export default Navbar
