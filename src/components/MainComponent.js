import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Topics from './TopicsComponent';
import Mobility from './MobilityComponent';
import SmartCity from './SmartCityComponent';
import Stats from './StatsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import '../styles/styles.css';
import '../styles/mystyles.css';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="column">
                <Header/>
                <Topics/>
                <Mobility/>
                <SmartCity/>
                <Stats/>
                <Footer/>
            </div>
        )
    }
}

export default Main;