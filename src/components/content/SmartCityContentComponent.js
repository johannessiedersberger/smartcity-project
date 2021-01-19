import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

class SmartCityContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
            </div>
        );
        
        
        
       
    }
}

const Header = () => {
    return (
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
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Mobility</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Smartcity</a></li>
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#">Stats</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="mastheadCity" id="page-top">
            <div class="container" >
                <div class="mastheadCity-subheading">Die SmartCity</div>
                <div class="mastheadCity-heading text-uppercase">Die Stadt der Zukunft</div>
            </div>
        </header>
    </div>
    );
}

export default SmartCityContent;