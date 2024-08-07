import React from 'react'
import './footer.css'

const Footer = () => {
    const handleDownloadCVClick = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1vZCL22ZPMTJRDwkjVpOJytpPMpATX3Te';
    };

    const handleLinkedInClick = () => {
        window.location.href = 'https://www.linkedin.com/in/hossam-zerouali-385643305/';
    };

    const handleGithubClick = () => {
        window.location.href = 'https://github.com/HossamZerouali';
    };
    return (
        <div className="footer-container">
            <div className='line-footer'></div>
            <div className='images-footer'>
            <button className="btn-footer" onClick={handleGithubClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:social-github.svg?color=white" alt="Github Icon" />
                </button>
                <button className="btn-footer" onClick={handleLinkedInClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:social-linkedin.svg?color=white"  alt="LinkedIn Icon" />
                </button>
                <button className="btn-footer" onClick={handleDownloadCVClick}>
                    <img className='icon' src="https://api.iconify.design/simple-line-icons:cloud-download.svg?color=white" alt="CV Icon" />
                </button>
            </div>
            <div className='footer-end-text'>
                <h2 className='footer-text'>Made with </h2>
                <img src="https://api.iconify.design/logos:react.svg" alt="" />
                <h2 className='footer-text'>by Hossam Zerouali</h2>
            </div>
        </div>
    )
}

export default Footer