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
            <section class="page-section" id="smartcity" style={{backgroundColor: "whitesmoke"}}>
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">SmartCity</h2>
                    <h3 class="section-subheading text-muted">Was gehört dazu?</h3>
                </div>
                <div class="row text-center">
                <div class="col-md-12">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-city fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Smart Cities</h4>
                        <p class="text-muted">Wie sieht eine Stadt der Zukunft aus? Woher kommt die Energie?</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default SmartCity;

