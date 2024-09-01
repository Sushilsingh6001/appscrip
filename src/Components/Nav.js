import React, { useState } from 'react';
import './nav.css';


const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return (
        <header>
            <div className="header-container">
                <div className="mobile-menu-toggle-container">
                    <button
                        className="mobile-menu-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        ☰
                    </button>
                </div>
                <div className='main_logo' >
                    <img height={40} width={40} src="/assets/logo.PNG" alt="logo" />
                </div>
                <div className="logo">LOGO</div>
                <div className="header-icons">
                    <img height={15} width={15} src="/assets/search.png" alt="search" />
                    <img height={15} width={15} src="/assets/heart.png" alt="heart" />
                    <span className='cart_span' >
                        <img height={15} width={15} src="/assets/shopping-bag.png" alt="shopping" />
                        <button>2</button>
                    </span>
                    <img height={15} width={15} src="/assets/contact.png" alt="contact" />
                    <span>ENG ▼</span>
                </div>
            </div>
            <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav