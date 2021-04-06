import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import CarStat from "../../assets/img/statistik_autonomes_fahren.png";
import CarCity from "../../assets/img/image_city.png";
import Energiewende from "../../assets/img/energiewende.png";
import Motor from "../../assets/img/emotor.png";
import Batterie from "../../assets/img/e_batterie.png";
import Aufbau from "../../assets/img/pluginhybrid_aufbau.png";
import Laden from "../../assets/img/pluginhybrid_laden.jpg";
import Footer from '../FooterComponent';
Survey.StylesManager.applyTheme("default");

class PlugInHybrid extends Component {
   
    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

const Content = () => {
    return(
      <div>
        <section class="page-section" id="definition" style={{
            color: "black",
            backgroundColor: "whitesmoke", 
            padding: "20px"
        }}>
        <div class="container">
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Aufbau</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Getriebe mit/und Elektromotor​</li>
                    <li>Ein Verbrennungsmotor</li>
                    <li>Ein Tank</li>
                    <li>Eine Batterie​</li>
                    <li>Lade- und Steuerungselektronik</li>
                </ul>
                
            </div>
            <div class="row text-justify">
                <img src={Aufbau} alt="" height={200}/>
                
            </div>
            
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">LADEVORGANG (13KWH-AKKU VON MERCEDES)​</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Gewöhnliche Steckdose: 5,5h Ladedauer​</li>
                    <li>Wallbox" für ca. 400-800€​</li>
                    <li>Wallbox" bei 230V: 3h Ladedauer​</li>
                    <li>Wallbox" bei 400V: 45 Minuten Ladedauer​</li>
                    <li>Einmal Aufladen – ca. 5€​</li>
                </ul>
                
            </div>
            <div class="row text-justify">
                <img src={Laden} alt=""/>
            </div>
           
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Förderung</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Bis 40.000 € Kaufpreis - bis zu 6.750 € Förderung</li>
                    <li>40.000 – 65.000 € Kaufpreis - bis zu 5.625 € </li>
                    <li>Bedingungen: Rein Elektrische Reichweite von 40 Kilometern (ab 2022 60KM) oder höchstens 50 Gramm CO2 pro KM emitieren </li>
                    <li>Bessere Konditionen bei Dienstfahrzeugen</li>
                </ul>
            </div>
        </div>
    </section>
    <Footer/>
    </div>
    );
}

const Header = () => {
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand js-scroll-trigger" href="#page-top">Green Technology Project</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars ml-1"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav text-uppercase ml-auto">
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/smartcity-project">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="mastheadEcar" id="page-top">
            <div class="container" >
                <div class="mastheadEcar-subheading">E-Mobilität und Autonomes Fahren</div>
                <div class="mastheadEcar-heading text-uppercase">Plug In Hybrid</div>
            </div>
        </header>
    </div>
    );
}

export default PlugInHybrid;