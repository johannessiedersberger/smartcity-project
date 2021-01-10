import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props) {
        super(props);       
      }


    render(){
        return(
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
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#themen">Themen</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#mobility">Mobility</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#smartcity">Smartcity</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#stats">Stats</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="masthead" id="page-top">
            <div class="container" >
                <div class="masthead-subheading">Wie neue Technolgien den Klimawandel stoppen</div>
                <div class="masthead-heading text-uppercase">Die Stadt der Zukunft</div>
                <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#themen">Tell Me More</a>
            </div>
        </header>
        </div>
        );
    }
}

export default Header;