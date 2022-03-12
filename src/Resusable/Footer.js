import React from 'react';
import './Footer.css';

function Footer({ img }) {
    return (
        <>
            <div className='footer-container'>
                <div className='footer-inner'>
                    <div className='footer-top'>
                        <div className='logo-container'>
                            <h1>Buffer Africa</h1>
                        </div>

                        <div className='footer-list'>
                            <ul>
                                <h3>Products</h3>

                                <a href='/'>
                                    <li>Personal</li>
                                </a>

                                <a href='/'>
                                    <li>Remote Workers</li>
                                </a>

                                <a href='/'>
                                    <li>Startups</li>
                                </a>
                            </ul>

                            <ul>
                                <h3>Company</h3>

                                <a href='/'>
                                    <li>About Buffer</li>
                                </a>

                                <a href='/'>
                                    <li>Contact</li>
                                </a>

                                <a href='/'>
                                    <li>Careers</li>
                                </a>

                                <a href='/'>
                                    <li>Blog</li>
                                </a>

                                <a href='/'>
                                    <li>Press</li>
                                </a>
                            </ul>
                        </div>
                    </div>

                    <small>Copyright &copy; 2022. Buffer Africa. All rights reserved.</small>
                </div>
            </div>

        </>
    )
}

export default Footer