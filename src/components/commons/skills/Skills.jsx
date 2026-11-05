import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <div className='soft'>
                <div className='desc-soft'>
                    <div className='title-skill'>
                        <div className='tit'>
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/display.svg" alt="Software Engineer" />
                            <h1>Software Engineer</h1>
                        </div>
                        <p className='descrip-soft'>I like to code things from scratch and watching my ideas come to life in the browser. The process of transforming abstract concepts into interactive and functional applications is incredibly rewarding. I thrive on the challenge of solving complex problems and continuously learning new technologies.</p>
                    </div>
                    <div className='soft-container-skills'>
                        <h2>Tooling</h2>
                        <div className="tools">
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
                                <p>JavaScript</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
                                <p>React</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" />
                                <p>Flutter</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" />
                                <p>C++</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
                                <p>Python</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
                                <p>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='desc-soft'>
            <div className='title-skill'>
                        <div className='tit'>
                            <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/pencil-square.svg" alt="Designer" />
                            <h1>Designer</h1>
                        </div>
                        <p className='descrip-soft'>I believe that the essence of great design lies in its ability to communicate
                            ideas clearly and efficiently. Crafting visually appealing and intuitive user interfaces brings me immense
                            fulfillment, as I strive to create experiences that are both aesthetically pleasing and highly functional. Every
                            design choice I make is guided by the principles of clarity, usability, and user-centered thinking.</p>
                            </div>
                    <div className='info-rigth'>
                        <div className='soft-container-skills'>
                            <h2>Tooling</h2>
                            <div className="tools">
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" />
                                <p>Figma</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" alt="Photoshop" />
                                <p>Photoshop</p>
                            </div>
                            <div className="tool">
                                <img src="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/file-earmark-plus.svg" alt="Paper" />
                                <p>Paper</p>
                            </div>
                            </div>
                        </div>
                        <div className='curriculum-text'>
                            <h2>You can find more information in my </h2>
                            <a href='https://drive.google.com/uc?export=download&id=1ERKbQhNHp7zjdOCSR62ko5fpXzOdzcF4'>Curriculum</a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Skills;
