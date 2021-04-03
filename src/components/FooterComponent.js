import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';

    
class Footer extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright © Berufsschule Plus 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <a class="mr-3" href="/imprint">Impressum</a>
                        <a href="#!">Datenschutz</a>
                    </div>
                </div>
            </div>
            </footer>
        );
    }
}

export default Footer;