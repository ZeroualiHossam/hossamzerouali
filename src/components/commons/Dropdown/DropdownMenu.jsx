import { MODES, useTheme } from '../../../context/ThemeContext';
import './DropdownMenu.css';

const DropdownMenu = ({ onOptionClick }) => {
    const { mode, setMode } = useTheme();

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            onOptionClick();
        }
    };

    const handleModeChange = (newMode) => {
        setMode(newMode);
        onOptionClick();
    };

    return (
        <div className="dropdown-menu show">
            {/* Mode switcher inside mobile menu */}
            <div className="dropdown-mode-section">
                <span className="dropdown-mode-label">Switch Mode</span>
                <div className="dropdown-mode-buttons">
                    <button
                        className={`dropdown-mode-btn ${mode === MODES.SOFTWARE ? 'active' : ''}`}
                        onClick={() => handleModeChange(MODES.SOFTWARE)}
                    >
                        <img src="https://api.iconify.design/pajamas:monitor-o.svg" alt="" />
                        Software
                    </button>
                    <button
                        className={`dropdown-mode-btn ${mode === MODES.DATASCIENCE ? 'active' : ''}`}
                        onClick={() => handleModeChange(MODES.DATASCIENCE)}
                    >
                        <img src="https://api.iconify.design/carbon:machine-learning-model.svg" alt="" />
                        Data Science
                    </button>
                    <button
                        className={`dropdown-mode-btn ${mode === MODES.DEVOPS ? 'active' : ''}`}
                        onClick={() => handleModeChange(MODES.DEVOPS)}
                    >
                        <img src="https://api.iconify.design/mdi:server-outline.svg" alt="" />
                        DevOps
                    </button>
                </div>
            </div>

            <div className="dropdown-divider"></div>

            <a className="option" href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>About Me</a>
            <a className="option" href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
            <a className="option" href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
    );
}

export default DropdownMenu;
