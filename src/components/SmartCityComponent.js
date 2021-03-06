import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Paper} from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';
import SmartCityIMG from '../assets/img/future_city_water.jpg'
    
class SmartCity extends Component {


    render(){
        return(
            <section class="page-section" id="smartcity" style={{
                textAlign: "center",
                color: "black",
                backgroundImage: "url(" + SmartCityIMG + ")", 
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Smart City</h2>
                    <h3 class="section-subheading ">Wie werden wir Wohnen und Leben?</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4"></div>

                    <div class="col-md-4">
                    <Paper elevation={3} style={{padding: "10px"}}>
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-city fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Smart Cities</h4>
                        <p class="text-muted">Wie sieht eine Stadt der Zukunft aus? Woher kommt die Energie?</p>
                    </Paper>
                    <HashLink smooth class="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-space " to="/smartcity/">Zu den Lerninhalten</HashLink>
                    </div>

                    <div class="col-md-4"></div>
                </div>
            </div>
        </section>
        );
    }
}

export default SmartCity;

