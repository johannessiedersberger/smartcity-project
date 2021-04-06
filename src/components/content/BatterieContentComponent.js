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
import Car from '../../assets/img/ecar.jpg';
Survey.StylesManager.applyTheme("default");

class BatterieCar extends Component {
   
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
                <h5 class="section-heading text-uppercase">Aufbau</h5>
            </div>

                
            <div class="row text-justify">
                <img src={Car} alt="" height={200}/>  
            </div>

            <div class="row text-justify">
                <h5 class="section-heading text-uppercase">Ladegerät</h5> 
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Stellt einen Wandler für den “Hausstrom” zur benötigten Leistung des Autoakkus dar</li>
                </ul>
            </div>

            <div class="row text-justify">
                <h5 class="section-heading text-uppercase">E-Maschine</h5> 
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Ist für das Bauteil welches für den zentralen Antrieb im auto zuständig ist.</li>
                </ul>
            </div>

            <div class="row text-justify">
                <h5 class="section-heading text-uppercase">Ladedose</h5> 
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Dient als initialer Input für den Ladestrom</li>
                </ul>
            </div>

            <div class="row text-justify">
                <h5 class="section-heading text-uppercase">Hochvoltspeicher (Akku)</h5> 
            </div>
            <div class="row text-justify">
                <ul>
                    <li>stellt das Kernstück des Autos dar und speichert die Energie</li>
                </ul>
            </div>
           
               
               
            
           
            
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Ladeleistung und Ladedauer</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Haushaltssteckdose (2,3 kW) ca.17 h</li>
                    <li>Wallbox ca. 9 h</li>
                    <li>Unterschiedliche Leistungen</li>
                    <li>3,7 kW ca.11 h</li>
                    <li>Bis zu 22 kW ca.2 h</li>
                </ul>
                
            </div>
       
           
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Fahrkomfort und Effizienz </h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Hohe Drehzahlen -Starke Beschleunigung</li>
                    <li>Äußerst hohe Effizienz-Wenig Energieverlust durch Wärme und Reibung</li>
                    <li>Rekuperation-Energie zurück gewinnen beim Bremsen oder Bergabfahren</li>
                    <li>Kein Gangwechseln-Dank der hohen Drehzahlen</li>
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
                <div class="mastheadEcar-heading text-uppercase">Batterie</div>
            </div>
        </header>
    </div>
    );
}

export default BatterieCar;