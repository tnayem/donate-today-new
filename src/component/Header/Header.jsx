import React from 'react';
import Logo from '../logo/Logo.png'
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    const myMenu = <>
   <li> <NavLink to='/home'>Home</NavLink>  </li>
   <li> <NavLink to='/donation'>Donation</NavLink> </li>
   <li> <NavLink to='/statistics'>Statistics</NavLink> </li>
</>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {myMenu}
                    </ul>
                </div>
                <NavLink><img id='image-width' src={Logo} alt="Logo" /></NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {myMenu}
                </ul>
            </div>
        </div>
    );
};

export default Header;