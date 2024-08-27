import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <div className="skills-container">
            <div className='soft'>
                <div className='desc-soft'>
                    <div className='title-skill'>
                        <div className='tit'>
                            <img src="https://api.iconify.design/pajamas:monitor-o.svg" alt="" />
                            <h1>Software Engineer</h1>
                        </div>
                        <p className='descrip-soft'>I like to code things from scratch and watching my ideas come to life in the browser. The process of transforming abstract concepts into interactive and functional applications is incredibly rewarding. I thrive on the challenge of solving complex problems and continuously learning new technologies.</p>
                    </div>
                    <div className='soft-container-skills'>
                        <h2>Tooling</h2>
                        <div className="tools">
                            <div className="tool">
                                <img src="https://api.iconify.design/logos:javascript.svg" alt="JavaScript" />
                                <p>JavaScript</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/logos:react.svg" alt="React" />
                                <p>React</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/logos:flutter.svg" alt="React" />
                                <p>Flutter</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/devicon:cplusplus.svg" alt="React" />
                                <p>C++</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/logos:python.svg" alt="React" />
                                <p>Python</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/devicon:firebase.svg" alt="React" />
                                <p>Firebase</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='desc-soft'>
            <div className='title-skill'>
                        <div className='tit'>
                            <img src="https://api.iconify.design/icon-park-outline:edit.svg" alt="" />
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
                                <img src="https://api.iconify.design/devicon:figma.svg" alt="Figma" />
                                <p>Figma</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/devicon:photoshop.svg" alt="Photoshop" />
                                <p>Photoshop</p>
                            </div>
                            <div className="tool">
                                <img src="https://api.iconify.design/wpf:create-new.svg" alt="Paper" />
                                <p>Paper</p>
                            </div>
                            </div>
                        </div>
                        <div className='curriculum-text'>
                            <h2>You can find more information in my </h2>
                            <a href='https://drive.google.com/uc?export=download&id=1PNgm8ZS6DNh8tV79IIfhfSTg3X8wWW3S'>Curriculum</a>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Skills;