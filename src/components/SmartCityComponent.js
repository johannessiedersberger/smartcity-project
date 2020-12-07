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
            <section class="page-section" id="smartcity">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">SmartCity</h2>
                    <h3 class="section-subheading text-muted">Was gehört dazu?</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-12">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-car fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Smart City</h4>
                        <p class="text-muted">Wie funktioniert ein Elektromtor und moderne Batterietechnologie? Wie funktioniert autonomes Fahren?</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default SmartCity;

