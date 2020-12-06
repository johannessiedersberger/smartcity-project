import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';

    
class Mobility extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="fullpage" id="mobility"
            style={{
                    background: "url(" + "https://i.ibb.co/kD6fy00/electric-car.png" + ")",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat', 
                  
                }}>
            <div>
                <div className="row row-header ">
                    <div className="col-6 col-sm-6">
                        
                    </div>
                    
                    <div className="col-6 col-sm-6" style={{backgroundColor: "white", height:"100vh"}}>
                        <Paper style={{marginTop:"20px", marginRight:"10px", height:"50vh"}} elevation={3}>
                            <h1 className="display-4">E-Mobilität</h1>
                            <p>Wie funktioniren E-Autos und Autonomes fahren</p>
                        </Paper>
                        
                    </div>
                    
                   
                </div>
            </div>
            </div>
        );
    }
}

export default Mobility;

