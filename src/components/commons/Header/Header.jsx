import { useState } from 'react';
import { MODES, useTheme } from '../../../context/ThemeContext';
import DropdownMenu from '../Dropdown/DropdownMenu';
import './Header.css';

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { mode, setMode } = useTheme();

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

            {/* ── Mode Selector (center) ── */}
            <div className="mode-selector">
                <button
                    className={`mode-btn ${mode === MODES.SOFTWARE ? 'active' : ''}`}
                    data-mode="software"
                    onClick={() => setMode(MODES.SOFTWARE)}
                >
                    <img src="https://api.iconify.design/pajamas:monitor-o.svg" alt="" />
                    Software
                </button>
                <button
                    className={`mode-btn ${mode === MODES.DATASCIENCE ? 'active' : ''}`}
                    data-mode="datascience"
                    onClick={() => setMode(MODES.DATASCIENCE)}
                >
                    <img src="https://api.iconify.design/carbon:machine-learning-model.svg" alt="" />
                    Data Science
                </button>
                <button
                    className={`mode-btn ${mode === MODES.DEVOPS ? 'active' : ''}`}
                    data-mode="devops"
                    onClick={() => setMode(MODES.DEVOPS)}
                >
                    <img src="https://api.iconify.design/mdi:server-outline.svg" alt="" />
                    DevOps
                </button>
            </div>

            <div className="rightside-container">
                <div className="rightside">
                    <a className="option" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>About Me</a>
                    <a className="option" href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                    <a className="option" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <img className="menu-icon-img" src="https://api.iconify.design/heroicons-solid:menu.svg" alt="Menu Icon" />
                </div>
            </div>
            {showMenu && <DropdownMenu onOptionClick={toggleMenu} />}
        </div>
    );
}

export default Header;
