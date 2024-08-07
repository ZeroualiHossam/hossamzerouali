import React from 'react';
import './DropdownMenu.css';

const DropdownMenu = ({ onOptionClick }) => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            onOptionClick();
        }
    };
    
    return (
        <div className="dropdown-menu show">
            <a className="option" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>About Me</a>
            <a className="option" href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a className="option" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
    );
}

export default DropdownMenu;