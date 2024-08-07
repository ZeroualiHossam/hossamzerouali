import React from 'react'
import './description.css'
import Skills from '../../components/commons/skills/Skills'
import About from '../../components/commons/about-me/about'

const Description = () => {
    return (
        <div className="container-descrip">
            <About/>
            <Skills/>
        </div>
    )
}

export default Description;