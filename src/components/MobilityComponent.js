import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Paper } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';
import ECAR from '../assets/img/e_car.jpg';

    
class Mobility extends Component {


    render(){
        return(
            <div>
            <section class="page-section" id="mobility" style={{
                textAlign: "center",
                color: "black",
                backgroundImage: "url(" + ECAR + ")", 
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "scroll",
                backgroundPosition: "center center",
                backgroundSize: "cover"
            }}>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">E-Mobilität</h2>
                    <h3 class="section-subheading ">Wie kommen wir von A nach B?</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4"></div>

                    <div class="col-md-4">
                    <Paper elevation={3} style={{padding: "10px"}}>
                    <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-car fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">E-Mobilität</h4>
                        <p class="text-muted">Wie funktioniert ein Elektromtor und moderne Batterietechnologie? Wie funktioniert autonomes Fahren?</p>
                    </Paper>
                    <HashLink class="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-space " to="/e-mobility/">Zu den Lerninhalten</HashLink>
                    </div>

                    <div class="col-md-4"></div>
                </div>
            </div>
        </section>

        
        <section class="page-section" id="mobility" style={{
                textAlign: "center",
                color: "black",
                backgroundColor: "whitesmoke"
            }}>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">E-Mobilität</h2>
                    <h3 class="section-subheading text-muted">Welche Bereiche</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                    <Paper elevation={3} style={{padding: "10px", margin: "10px"}}>
                        <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-car fa-stack-1x fa-inverse"></i> 
                            </span>
                            <h4 class="my-3">Autonomes Fahren</h4>
                            <p class="text-muted">Wie funktioniert Autonomous Driving? Wie werden die Daten gesammelt?</p>
                    </Paper>
                    </div> 
                    <div class="col-md-4">
                        <Paper elevation={3} style={{padding: "10px", margin: "10px"}}>
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-battery-three-quarters fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">Batterietechnologie</h4>
                            <p class="text-muted">Wie funktioniert moderne Batterietechnologie? </p>
                        </Paper>
                    </div>

                    <div class="col-md-4">
                        <Paper elevation={3} style={{padding: "10px", margin: "10px"}}>
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-power-off fa-stack-1x fa-inverse"></i>
                            </span>
                            <h4 class="my-3">Elektromotor</h4>
                            <p class="text-muted">Wie funktioniert ein Elektromtor? </p>
                        </Paper>
                    </div>
                </div>
            </div>
        </section>


        
        </div>
        );
    }
}

export default Mobility;

