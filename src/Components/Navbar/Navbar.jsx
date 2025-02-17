import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { ShopContext } from './../../Context/ShopContext';
const Navbar = () => {

    let [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);

    const menuRef = useRef();
    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }
    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>Craftopia</p>
            </div>
            {/* <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" /> */}
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: 'none' }}>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: 'none' }}>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{ textDecoration: 'none' }}>Gifts</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace("/"); }}>Logout</button>
                    : <Link to='/login' style={{ textDecoration: 'none' }}><button>Login</button></Link>}
                <Link to="/cart"><img src={cart_icon} alt="cart" /></Link>
                <div className='nav-cart-count'>
                    {getTotalCartItems()}
                </div>
            </div>
        </div>
    )
}

export default Navbar
