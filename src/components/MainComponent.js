import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './HomeComponent';
import Topics from './TopicsComponent';
import Mobility from './MobilityComponent';
import SmartCity from './SmartCityComponent';
import Stats from './StatsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import '../styles/styles.css';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="column">
                <Header/>
                <Home/>
                <Topics/>
                <Mobility/>
                <SmartCity/>
                <Stats/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Main;