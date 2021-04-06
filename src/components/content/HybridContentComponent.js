import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import CarStat from "../../assets/img/statistik_autonomes_fahren.png";
import CarCity from "../../assets/img/image_city.png";
import Energiewende from "../../assets/img/energiewende.png";
import Motor from "../../assets/img/emotor.png";
import Batterie from "../../assets/img/e_batterie.png";
import Aufbau from "../../assets/img/brennstoffzelle_aufbau.jpg";
import Strom from "../../assets/img/brennstoffzelle_stromerzeugung.png";
import Footer from '../FooterComponent';
Survey.StylesManager.applyTheme("default");

class Hybrid extends Component {
   
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
                <h3 class="section-heading text-uppercase">Mild-Hybrid</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Unterstützt den Verbrennungsmotor in bestimmten Fahrsituationen z.B. Anfahren oder Volllast.​</li>
                    <li>Zu kleine Elektromotorisierung, sie reicht für komplettes elektrisches Fahren nicht aus. </li>
                    <li>Elektromotoren besitzen bei geringer Drehzahl ein hohes Drehmoment</li>
                    <li>(zählt laut Definition nicht zur E-Mobilität)</li>
                </ul>
                
            </div>
          
            
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Full-Hybrid (HEV)</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Kann dynamisch zwischen Benzin- und Elektroantrieb wechseln</li>
                    <li>ggf. ist sogar eine Kombination der beiden Antriebe möglich​</li>
                    <li>flexiblere Tank-, Ladesituation​</li>
                    <li>Elektronen gehen Weg über Leitung - Stromerzeugung</li>
                    
                </ul>
                
            </div>
          
           
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Extended Range Electric Vehicle (EREV)​</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Das Fahrzeug fährt rein elektrisch</li>
                    <li>Verbrennungsmotor dient ausschließlich der Stromerzeugung falls der Akku nicht mehr genug Kapazität hat​</li>
                </ul>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Vorteile des Hybridmotors​</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Vor allem geeignet in Stop Go Situationen (Stadtverkehr,…)​ -- weniger Schadstoffemissionen und geringerer Kraftstoffverbrauch</li>
                    <li>Energie kann durch regeneratives Bremsen zurückgewonnen werden​</li>
                </ul>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">CO2-Bilanz​​</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Verhältnismäßig hoher CO2 Ausstoß des Fahrzeugs ​</li>
                    <li>Verhältnismäßig geringer CO2 Ausstoß bei der Kraftstofferzeugung​​</li>
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
                <div class="mastheadEcar-heading text-uppercase">Hybrid</div>
            </div>
        </header>
    </div>
    );
}

export default Hybrid;