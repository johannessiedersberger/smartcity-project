import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';

    
class Topics extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <section class="page-section" id="themen">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Themenbereiche</h2>
                    <h3 class="section-subheading text-muted">Um was geht es?</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-4">
                        <HashLink class="nav-link js-scroll-trigger" to="#mobility">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-car fa-stack-1x fa-inverse"></i>
                            </span>
                        </HashLink>
                        <h4 class="my-3">E-Mobilität</h4>
                        <p class="text-muted">Wie funktioniert ein Elektromtor und moderne Batterietechnologie? Wie funktioniert autonomes Fahren?</p>
                    </div>
                    <div class="col-md-4">
                        <HashLink class="nav-link js-scroll-trigger" to="#smartcity">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-city fa-stack-1x fa-inverse"></i>
                            </span>
                        </HashLink>
                        <h4 class="my-3">Smart Cities</h4>
                        <p class="text-muted">Wie sieht eine Stadt der Zukunft aus? Woher kommt die Energie?</p>
                    </div>
                    <div class="col-md-4">
                        <HashLink class="nav-link js-scroll-trigger" to="#stats">
                            <span class="fa-stack fa-4x">
                                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                                <i class="fas fa-signal fa-stack-1x fa-inverse"></i>
                            </span>
                        </HashLink>
                        <h4 class="my-3">Konsumverhalten</h4>
                        <p class="text-muted">Wie umweltfreundlich ist die Gesellschaft aktuell?</p>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Topics;

