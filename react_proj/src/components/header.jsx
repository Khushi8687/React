import React from 'react';

function Header() {
    return (
        <header>
            <div className="logo">
                <img src="img/Khushi patel (2).jpg" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#My Work">Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;