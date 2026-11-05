import culturappImage from '../../../assets/culturapp_mock.png';
import denstanaImage from '../../../assets/dentsana_mock.png';
import f1Image from '../../../assets/f1_mock.png';
import kbinImage from '../../../assets/kbin_mock.png';
import portfolioImage from '../../../assets/portfolio_mock.png';
import keyboardImage from '../../../assets/teclado_mock.png';
import { MODES, useTheme } from '../../../context/ThemeContext';
import './Projects.css';

/* ─── Software projects (existing) ─── */
const SoftwareProjects = () => {
    const open = (url) => window.open(url, '_blank');

    return (
        <>
            <div className='project'>
                <img className='project-image h' src={denstanaImage} alt='Dentsana' />
                <div className='content-project'>
                    <div className='coming'><h1>Clínica Dental Dentsana</h1></div>
                    <p>A website developed with React, designed to offer an informative experience for current and prospective patients. Featuring an intuitive and modern design, the site provides comprehensive details about the clinic's services, including in-depth descriptions of various treatments. Patients can easily find essential information such as the clinic's location through integrated maps, learn about the professional staff, and read patient reviews.</p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-reactjs.svg" alt="React" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => open('https://www.dentsanamartorell.es/')}>Visit Project</button>
                    </div>
                </div>
            </div>

            <div className='project'>
                <img className='project-image' src={culturappImage} alt='CulturApp' />
                <div className='content-project'>
                    <h1>CulturApp</h1>
                    <p>CulturApp is an Android application designed to make researching cultural events in Catalonia effortless. It not only simplifies the process of finding events but also provides incentives for participation. Additionally, it offers an interactive and secure communication space, ensuring users can engage with the cultural community safely and enjoyably.</p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-flutter.svg" alt="Flutter" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-js-official.svg" alt="JS" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-node.svg" alt="Node" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-firebase.svg" alt="Firebase" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-gcloud.svg" alt="GCloud" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => open('https://github.com/ZeroualiHossam/culturapp')}>View Project</button>
                        <button className='download-button' onClick={() => open('https://github.com/ZeroualiHossam/culturapp/releases/tag/CulturApp')}>Download</button>
                    </div>
                </div>
            </div>

            <div className='project'>
                <img className='project-image h' src={kbinImage} alt='Kbin' />
                <div className='content-project'>
                    <div className='coming'>
                        <h1>Kbin.Social Clon & Redesign</h1>
                        <h2 className='res'>(No Resizable)</h2>
                    </div>
                    <p>This project involved replicating the main functionalities of kbin.social over three sprints. In the first phase, the platform was cloned using Django and PostgreSQL. In the second phase, a Level 2 REST API was designed in Python with Swagger documentation. The final phase involved developing a responsive client using React.js.</p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-python.svg" alt="Python" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-django.svg" alt="Django" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-pgsql.svg" alt="PostgreSQL" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-swagger.svg" alt="Swagger" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-reactjs.svg" alt="React" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => open('https://github.com/ZeroualiHossam/kbin')}>View Project</button>
                        <button className='download-button' onClick={() => open('https://asw-projecte-kbin-social-react.onrender.com/')}>Visit Redesign</button>
                    </div>
                </div>
            </div>

            <div className='project'>
                <img className='project-image h hh' src={f1Image} alt='F1' />
                <div className='content-project'>
                    <div className='coming'>
                        <h1>Website for F1 fans</h1>
                        <h2>(In progress)</h2>
                    </div>
                    <p>An informational website for F1 fans, built using Angular with Firebase as the backend database and data fetched through a Node.js API powered by Express. This platform delivers comprehensive and up-to-date information on Formula 1, including detailed profiles of drivers and teams, the latest news, race results and schedules.</p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-angular.svg" alt="Angular" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-js-official.svg" alt="JS" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-node.svg" alt="Node" />
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-firebase.svg" alt="Firebase" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => open('https://github.com/ZeroualiHossam/f1-website-angular')}>View Project</button>
                    </div>
                </div>
            </div>

            <div className='project'>
                <img className='project-image v' src={keyboardImage} alt='Keyboard' />
                <div className='content-project'>
                    <h1>Keyboard Layout Optimization</h1>
                    <p>A Java-based application to optimize keyboard layouts. Using advanced algorithms like the Hungarian Algorithm for Quadratic Assignment Problems (QAP) and Hill Climbing, we ensure efficient key assignments based on usage frequency and ergonomic principles. A simple and intuitive interface allows users to generate personalized layouts.</p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-class.svg" alt="Java" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => open('https://github.com/ZeroualiHossam/keyboard-optimization')}>View Project</button>
                        <button className='download-button' onClick={() => open('https://github.com/ZeroualiHossam/keyboard-optimization/releases/tag/keyboard')}>Download</button>
                    </div>
                </div>
            </div>

            <div className='project'>
                <img className='project-image h hh' src={portfolioImage} alt='Portfolio' />
                <div className='content-project'>
                    <h1>Personal Portfolio</h1>
                    <p>I have developed my personal web portfolio using React, aiming for an attractive and pleasant design. My goal was to create a visually appealing and graphical interface that makes my projects easily visible and understandable. Additionally, I focused on facilitating contact and access to me for potential clients and collaborators.</p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/vscode-icons:file-type-reactjs.svg" alt="React" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => open('https://github.com/ZeroualiHossam/hossamzerouali')}>View Project</button>
                    </div>
                </div>
            </div>
        </>
    );
};

/* ─── Data Science projects ─── */
const DataScienceProjects = () => {
    return (
        <>
            <div className='project'>
                <div className='project-placeholder'>
                    <div className='placeholder-icon'>
                        <img src="https://api.iconify.design/carbon:machine-learning-model.svg" alt="DS" />
                    </div>
                </div>
                <div className='content-project'>
                    <div className='coming'>
                        <h1>Energy Forecasting at GreenPowerMonitor (DNV)</h1>
                        <h2 className='coming-soon-badge'>Coming Soon</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/logos:python.svg" alt="Python" />
                        <img className='img-dev' src="https://api.iconify.design/logos:pandas-icon.svg" alt="Pandas" />
                        <img className='img-dev' src="https://api.iconify.design/logos:numpy.svg" alt="NumPy" />
                        <img className='img-dev' src="https://api.iconify.design/simple-icons:scikitlearn.svg" alt="Scikit-learn" />
                        <img className='img-dev' src="https://api.iconify.design/logos:jupyter.svg" alt="Jupyter" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => window.open('https://github.com/ZeroualiHossam', '_blank')}>View GitHub</button>
                    </div>
                </div>
            </div>
        </>
    );
};

/* ─── DevOps projects ─── */
const DevOpsProjects = () => {
    return (
        <>
            <div className='project'>
                <div className='project-placeholder'>
                    <div className='placeholder-icon'>
                        <img src="https://api.iconify.design/logos:docker-icon.svg" alt="DevOps" />
                    </div>
                </div>
                <div className='content-project'>
                    <div className='coming'>
                        <h1>Infrastructure & Deployment Pipeline</h1>
                        <h2 className='coming-soon-badge'>Coming Soon</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='project-dev'>
                        <h2 className='devwith'>Built with</h2>
                        <img className='img-dev' src="https://api.iconify.design/logos:docker-icon.svg" alt="Docker" />
                        <img className='img-dev' src="https://api.iconify.design/logos:linux-tux.svg" alt="Linux" />
                        <img className='img-dev' src="https://api.iconify.design/logos:bash-icon.svg" alt="Bash" />
                        <img className='img-dev' src="https://api.iconify.design/logos:nginx.svg" alt="Nginx" />
                        <img className='img-dev' src="https://api.iconify.design/logos:github-actions.svg" alt="GH Actions" />
                    </div>
                    <div className='project-links'>
                        <button className='project-button' onClick={() => window.open('https://github.com/ZeroualiHossam', '_blank')}>View GitHub</button>
                    </div>
                </div>
            </div>
        </>
    );
};

/* ─── Main Projects component ─── */
const Projects = () => {
    const { mode } = useTheme();

    return (
        <div className="projects-container">
            <div className='title-projects'>
                <h1>PROJECTS</h1>
                <div className='line'></div>
            </div>
            <div className='projects'>
                {mode === MODES.SOFTWARE && <SoftwareProjects />}
                {mode === MODES.DATASCIENCE && <DataScienceProjects />}
                {mode === MODES.DEVOPS && <DevOpsProjects />}
            </div>
        </div>
    );
};

export default Projects;
