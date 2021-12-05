import React from 'react';
import './Footer.css';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';
import gmail from './img/gmail.svg';
import facebook from './img/facebook.svg';
import discord from './img/discord.svg';

const Footer = () => (
    <div className='footer'>
        <footer id="footer" className="footer text-center">

            <nav id="footerNav">
                <div className="container">
                    <ul>
                        <li id="contactMeText">Contact Me: </li>
                        <a className="contactMe nav-link" href="https://github.com/Georgi-Kalkovski"><img src={github} /></a>
                        <a className="contactMe nav-link" href="https://www.linkedin.com/in/georgi-kalkovski/"><img src={linkedin} /></a>
                        <a className="contactMe nav-link" href="mailto:g.kalkovski.92@gmail.com"><img src={gmail} /></a>
                        <a className="contactMe nav-link" href="https://www.facebook.com/georgi.kalkovski"><img src={facebook} /></a>
                        <a className="contactMe nav-link" href="https://discord.com/users/242250226545590274"><img src={discord} /></a>
                    </ul>
                </div>
            </nav>

            <div id="copyright">
                &copy; MyBookcase - {new Date().getFullYear()}
            </div>

            <a href="#" className="arrowUp"><h3>⮝</h3></a>
        </footer>
    </div>
);

export default Footer;