import React from 'react';
import './Projects.css';
import culturappImage from '../../../assets/culturapp_mock.png';
import kbinImage from '../../../assets/kbin_mock.png';
import f1Image from '../../../assets/f1_mock.png';
import keyboardImage from '../../../assets/teclado_mock.png';
import portfolioImage from '../../../assets/portfolio_mock.png';

const Projects = () => {
        
        const handleViewProjectClickCulturApp = () => {
            window.location.href = 'https://github.com/HossamZerouali/culturapp';
        };
    
        const handleDownloadProjectClickCulturApp = () => {
            window.location.href = 'https://github.com/HossamZerouali/culturapp/releases/tag/culturapp';
        };
        
        const handleViewProjectClickKbinSocial = () => {
            window.location.href = 'https://github.com/HossamZerouali/kbinproject';
        };

        const handleVisitClonClick = () => {
            window.location.href = 'https://asw-projecte-kbin-social-alphatretze.onrender.com/';
        };
    
        const handleVisitRedesignClick = () => {
            window.location.href = 'https://asw-projecte-kbin-social-react.onrender.com/';
        };

        const handleViewProjectClickF1Web = () => {
            window.location.href = 'https://github.com/HossamZerouali/f1-website-angular';
        };

        const handleViewProjectClickKeyboard = () => {
            window.location.href = 'https://github.com/HossamZerouali/f1-website-angular';
        };

        const handleDownloadProjectClickKeyboard = () => {
            window.location.href = 'https://github.com/HossamZerouali/keyboard-optimization/releases';
        };

        const handleViewProjectClickPortfolio = () => {
            window.location.href = 'https://github.com/HossamZerouali/hossamzerouali';
        };

    return (
        <div className="projects-container">
            <div className='title-projects'>
                <h1>PROJECTS</h1>
                <div className='line'></div>
            </div>
            <div className='projects'>
                <div className='project'>
                    <img className='project-image' src={culturappImage} alt='project' />
                    <div className='content-project'>
                        <h1>CulturApp</h1>
                        <p>CulturApp is an Android application designed to make researching cultural events in Catalonia effortless. It not only simplifies the process of finding events but also provides incentives for participation. Additionally, it offers an interactive and secure communication space, ensuring users can engage with the cultural community safely and enjoyably. Whether you're a local or a visitor, CulturApp is your gateway to discovering and experiencing the rich cultural tapestry of Catalonia.</p>
                        <div className='project-dev'>
                            <h2 className='devwith'>Built with</h2>
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-flutter.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-js-official.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-node.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-firebase.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-gcloud.svg" alt="" />
                        </div>
                        <div className='project-links'>
                            <button className='project-button' onClick={handleViewProjectClickCulturApp}>View Project</button>
                            <button className='download-button' onClick={handleDownloadProjectClickCulturApp}>Download Project</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-image h' src={kbinImage} alt='project' />
                    <div className='content-project'>
                        <div className='coming'>
                            <h1>Kbin.Social Clon & Redesign</h1>
                            <h2 className='res' >(No Resizable)</h2>
                        </div>
                        <p>This project involved replicating the main functionalities of kbin.social over three sprints. In the first phase, the platform was cloned using Django (MVC server-side framework) and PostgreSQL (separate database architecture) to create a classic web app. In the second phase, a Level 2 REST API was designed and implemented in Python, complete with Swagger documentation. The final phase involved developing a responsive client web application using the React.js framework.</p>
                        <div className='project-dev'>
                            <h2 className='devwith'>Built with</h2>
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-python.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-django.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-pgsql.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-swagger.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-reactjs.svg" alt="" />
                        </div>
                        <div className='project-links'>
                            <button className='project-button' onClick={handleViewProjectClickKbinSocial}>View Project</button>
                            <button className='download-button' onClick={handleVisitClonClick}>Visit Clon</button>
                            <button className='download-button' onClick={handleVisitRedesignClick}>Visit Redesign</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-image h hh' src={f1Image} alt='project' />
                    <div className='content-project'>
                        <div className='coming'>
                            <h1>Website for F1 fans</h1>
                            <h2>(In progress)</h2>
                        </div>
                        <p>An informational website for F1 fans, built using Angular with Firebase as the backend database and data fetched through a Node.js API powered by Express. This platform is designed to deliver comprehensive and up-to-date information on Formula 1, including detailed profiles of drivers and teams, the latest news, race results, and schedules. The platform aims to introduce exciting new features such as fan forums and live race chats, enhancing the experience to make it even more engaging and immersive for F1 enthusiasts.</p>
                        <div className='project-dev'>
                            <h2 className='devwith'>Built with</h2>
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-angular.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-js-official.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-node.svg" alt="" />
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-firebase.svg" alt="" />
                        </div>
                        <div className='project-links'>
                            <button className='project-button' onClick={handleViewProjectClickF1Web}>View Project</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-image v' src={keyboardImage} alt='project' />
                    <div className='content-project'>
                        <h1>Keyboard Layout Optimization</h1>
                        <p>A Java-based application to optimize keyboard layouts. Using advanced algorithms like the Hungarian Algorithm for Quadratic Assignment Problems (QAP) and Hill Climbing, we ensure efficient key assignments based on usage frequency and ergonomic principles. A simple and intuitive interface allows users to generate personalized layouts, enhancing typing efficiency and comfort.</p>
                        
                        <div className='project-dev'>
                            <h2 className='devwith'>Built with</h2>
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-class.svg" alt="" />
                        </div>
                        <div className='project-links'>
                            <button className='project-button' onClick={handleViewProjectClickKeyboard}>View Project</button>
                            <button className='download-button' onClick={handleDownloadProjectClickKeyboard}>Download Project</button>
                        </div>
                    </div>
                </div>
                <div className='project'>
                    <img className='project-image h hh' src={portfolioImage} alt='project' />
                    <div className='content-project'>
                        <h1>Personal Portfolio</h1>
                        <p> I have developed my personal web portfolio using React, aiming for an attractive and pleasant design. My goal was to create a visually appealing and graphical interface that makes my projects easily visible and understandable. Additionally, I focused on facilitating contact and access to me for potential clients and collaborators.</p>
                        <div className='project-dev'>
                            <h2 className='devwith'>Built with</h2>
                            <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-reactjs.svg" alt="" />
                        </div>
                        <div className='project-links'>
                            <button className='project-button' onClick={handleViewProjectClickPortfolio}>View Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;