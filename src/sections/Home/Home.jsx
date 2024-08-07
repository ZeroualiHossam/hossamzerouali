import React from 'react'
import './home.css'
import Header from '../../components/commons/Header/Header'
import TitleButtons from '../../components/commons/CenterTitle/title-buttons'

const Home = ({ onArrowClick }) => {
    return (
        <div className="container-home">
            <Header/>
            <TitleButtons/>
        </div>
    )
}

export default Home;
