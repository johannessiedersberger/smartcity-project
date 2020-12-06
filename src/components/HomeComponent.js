import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

    
class Home extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="fullpage-text-center" id="home"
                style={{
                        background: "url(" + "https://i.ibb.co/5B43JLG/solar-panel-city.jpg" + ")",
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-12">
                            <h1 className="display-4">Das Leben der Zukunft</h1>
                            <p>Wie reagiert die Gesellschaft mit neuen Technologien auf den Klimawandel?</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;

