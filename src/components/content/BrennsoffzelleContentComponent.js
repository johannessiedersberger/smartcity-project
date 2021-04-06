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

class FuelCell extends Component {
   
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
                <h3 class="section-heading text-uppercase">Wie funktioniert ein FCEV? (Fuel-Cell-Electric-Vehicle)</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Grundsätzlich ein Elektrofahrzeug</li>
                    <li>Enthält Brennstoffzelle mit Wassertank</li>
                    <li>Strom wird dadurch während der Fahrt erzeugt</li>
                </ul>
                
            </div>
            <div class="row text-justify">
                <img src={Aufbau} alt="" height={200}/>
                
            </div>
            
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Stromerzeugung​</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>Der Strom wird während der Fahrt durch eine umgekehrte Elektrolyse gewonnen</li>
                    <li>Wasserstoffmolekül wird in Wasserstoffionen und Elektronen gespalten</li>
                    <li>Wasserstoffionen wandern durch Membran und verbindet sich mit Sauerstoff zu Wasser</li>
                    <li>Elektronen gehen Weg über Leitung - Stromerzeugung</li>
                    
                </ul>
                
            </div>
            <div class="row text-justify">
                <img src={Strom} alt=""/>
            </div>
           
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Allgemeine Fakten</h3>
            </div>
            <div class="row text-justify">
                <ul>
                    <li>In Deutschland gibt es aktuell nur rund 100 Wasserstofftankstellen - Planung bis Ende 2021 - Erhöhung auf 130 Stück</li>
                    <li>Die Speicherung erfolgt entweder gasförmig unter sehr hohem Druck oder flüssig bei – 253 °C (superisolierte, doppelwandige Tanks notwendig)</li>
                    <li>- An sich emissionsfrei, allgemein hängt es aber mit der Gewinnung des Wasserstoffs zusammen (mit Erdgas / erneuerbaren Energien) </li>
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
                <div class="mastheadEcar-heading text-uppercase">Brennstoffzelle</div>
            </div>
        </header>
    </div>
    );
}

export default FuelCell;