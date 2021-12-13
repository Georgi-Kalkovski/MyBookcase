import React, { useState, useEffect } from 'react';
import './Footer.css';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import gmail from './img/gmail.svg';
import facebook from './img/facebook.svg';
import discord from './img/discord.svg';

const Footer = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {   
        window.addEventListener("scroll", listenToScroll);
        return () => 
           window.removeEventListener("scroll", listenToScroll); 
      }, []);
      
      const listenToScroll = () => {
        let heightToHideFrom = 10;
        const winScroll = document.body.scrollTop || 
            document.documentElement.scrollTop;
           
        if (winScroll < heightToHideFrom) { 
           isVisible &&        
             setIsVisible(false);
        } else {
             setIsVisible(true);
        }  
      };

    return (
        <div className='footer'>
            <footer id='footer' className='footer text-center'>

                <nav id='footerNav'>
                    <div className='container'>
                        <ul>
                            <p style={{ color: '#ad9b80', marginBottom: '-5px', fontSize: '10px' }}>Made with much ❤️ by Georgi Kalkovski aka Terter</p>
                            <a className='contactMe nav-link' href='https://github.com/Georgi-Kalkovski'><img src={github} /></a>
                            <a className='contactMe nav-link' href='https://www.linkedin.com/in/georgi-kalkovski/'><img src={linkedin} /></a>
                            <a className='contactMe nav-link' href='mailto:g.kalkovski.92@gmail.com'><img src={gmail} /></a>
                            <a className='contactMe nav-link' href='https://www.facebook.com/georgi.kalkovski'><img src={facebook} /></a>
                            <a className='contactMe nav-link' href='https://discord.com/users/242250226545590274'><img src={discord} /></a>
                        </ul>
                    </div>
                </nav>

                <div id='copyright'>
                    <a href='https://github.com/Georgi-Kalkovski/MyBookcase'>&copy; MyBookcase - {new Date().getFullYear()}</a>
                </div>
                {
                    isVisible
                    &&
                    <div id='hide'>
                        <a href='#' className='arrowUp'><h3>⮝</h3></a>
                    </div>
                }
            </footer>
        </div>
    );
};

export default Footer;
