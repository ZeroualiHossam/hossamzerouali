import ReactGA from 'react-ga';
import { useTheme } from '../../../context/ThemeContext';
import './title-buttons.css';

const TitleButtons = () => {
    const { config } = useTheme();

    const handleDownloadCVClick = () => {
        ReactGA.event({ category: 'CV', action: 'download', label: 'Download CV' });
        window.location.href = 'https://drive.google.com/uc?export=download&id=1ERKbQhNHp7zjdOCSR62ko5fpXzOdzcF4';
    };

    const handleLinkedInClick = () => {
        ReactGA.event({ category: 'Profile', action: 'navigate', label: 'LinkedIn Profile' });
        window.open('https://www.linkedin.com/in/hossam-zerouali-385643305/');
    };

    const handleGithubClick = () => {
        ReactGA.event({ category: 'Profile', action: 'navigate', label: 'GitHub Profile' });
        window.open('https://github.com/ZeroualiHossam');
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <div className='title-desc'>
                <h1 className='presentation'>
                    {config.title}
                </h1>
                <p className='descripcion'>
                    {config.description}
                </p>
            </div>
            <div className="buttons-container">
                <button className="btn" onClick={handleDownloadCVClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:cloud-download.svg?color=white" alt="CV Icon" /> Download CV
                </button>
                <button className="btn" onClick={handleLinkedInClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:social-linkedin.svg?color=white" alt="LinkedIn Icon" /> LinkedIn
                </button>
                <button className="btn" onClick={handleGithubClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:social-github.svg?color=white" alt="Github Icon" /> Github
                </button>
            </div>
            <div className="arrow-container" onClick={() => scrollToSection('description')}>
                <img src="https://api.iconify.design/ep:bottom.svg?color=white" className="down-arrow" alt="Scroll Down" />
            </div>
        </div>
    );
}

export default TitleButtons;
