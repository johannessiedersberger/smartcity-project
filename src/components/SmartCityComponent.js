import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';

    
class SmartCity extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section class="page-section" id="smartcity" style={{
                textAlign: "center",
                color: "black",
                backgroundImage: "url(" + "https://i.ibb.co/zm2t13z/future-city.png" + ")", 
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
                    <div class="col-4"></div>

                    <div class="col-4">
                    <Paper elevation={3} style={{padding: "10px"}}>
                    <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-city fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Smart Cities</h4>
                        <p class="text-muted">Wie sieht eine Stadt der Zukunft aus? Woher kommt die Energie?</p>
                    </Paper>
                    </div>

                    <div class="col-4"></div>
                </div>
            </div>
        </section>
        );
    }
}

export default SmartCity;

