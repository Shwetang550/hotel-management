import React from 'react'
import './Navbar.css'

import Logo from '../../assets/logo.png';
import { menuItems } from './navItems';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='navbar-container'>
                
                <div className='navbar-left' onClick={() => navigate('/')}>
                    <img
                        src={Logo}
                        alt='logo'
                        className='navbar-logo'
                    />
                    <h1>Aa Ke Rehlo</h1>
                </div>

                <div className='navbar-navItems'>
                    {
                        menuItems.map(i => (
                            <NavLink
                                key={i.title}
                                to={i.path}
                                className={({ isActive }) => isActive ? 'navbar-item active-nav' : 'navbar-item'}
                            >
                                {i.title}
                            </NavLink>
                        ))
                    }

                    <NavLink to={'/book-stay'} className='navbar-book-stay'>Book a Stay</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar