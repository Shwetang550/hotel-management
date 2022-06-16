import React from 'react';
import './Footer.css';

import { useNavigate } from 'react-router-dom';
import { footerRoutes } from './footerItems';

import Twitter from '../../assets/twitter.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Logo from '../../assets/logo.png';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <>

            <div className="footer">
            
                <div className="m-3 footer__contact">
                    <h2 style={{ fontSize: '32px' }}>
                        <img src={Logo} className='footer-logo' />
                        Aa ke rehlo</h2>

                    <h3>Homeless Joe</h3>
                    <h4>contactHomeless@aakerehlo.com</h4>
                    <h4>Cupboard Under the Stairs,</h4>
                    <h4>4 Privet Drive, Surrey</h4>
                    <h4>+91 1234569780</h4>
                </div>

                <div className="footer__routes">
                    
                    {
                        footerRoutes.map(item => (
                            <p key={item.title} onClick={() => navigate(item.route)} style={{ cursor: 'pointer' }}>
                                {item.title}
                            </p>
                        ))
                    }
                    
                </div>

                <div>
                
                    <div className="footer__links">
                        
                        {
                            [Instagram, Twitter, Facebook].map(item => (
                                    <img src={item} alt={'icon'} className='social-footer' />
                            ))
                        }
                        
                    </div>
                
                </div>
            
            </div>

            <div className='footer__credit'>
                <p style={{fontSize: '1rem', color: '#bbbbbb'}}>©{new Date().getFullYear()} Aa ke rehlo.</p>
            </div>
        </>
    )
}

export default Footer;
