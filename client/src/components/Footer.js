import React, { useRef, useEffect } from 'react';
import './Footer.css';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import gmail from './img/gmail.svg';
import facebook from './img/facebook.svg';
import discord from './img/discord.svg';

const Footer = () => {
    const arrow = useRef(null);

    const myScrollFunc = () => (() => {
        var y = arrow.current.focus();
        if (y >= 100) {
            arrow.current.style.display = 'block';
        } else {
            arrow.current.style.display = 'none';
        }
    });

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

                <div ref={arrow} onScroll={myScrollFunc}>
                    <a href='#' className='arrowUp'><h3>⮝</h3></a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;
