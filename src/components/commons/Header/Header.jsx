import React, { useState } from 'react';
import './Header.css';
import DropdownMenu from '../Dropdown/DropdownMenu';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="header">
            <div className="leftside">
                <a className='name' href="/">Hossam Zerouali</a>
            </div>
            <div className="rightside-container">
                <div className="rightside">
                    <a className="option" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>About Me</a>
                    <a className="option" href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                    <a className="option" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <img src="https://api.iconify.design/heroicons-solid:menu.svg?color=rgb(111, 184, 159)" alt="Menu Icon" />
                </div>
            </div>
            {showMenu && <DropdownMenu onOptionClick={toggleMenu} />}
        </div>
    );
}

export default Header;