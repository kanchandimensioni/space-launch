import React, {Component} from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer'
import MissionList from './MissionList';

const Home = () => {
    return(
    <div> 
        <Header />
        <MissionList/>
        <Footer />
    </div>
    );
}; 

export default Home;