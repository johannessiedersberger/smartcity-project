import React, { Component } from 'react';
import { HashLink } from 'react-router-hash-link';

class Header extends Component{
  


    render(){
        return(
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
                <div class="container">
                    <HashLink class="navbar-brand js-scroll-trigger" to="#page-top">Green Technology Project</HashLink>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i class="fas fa-bars ml-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ml-auto">
                            <li class="nav-item"><HashLink class="nav-link js-scroll-trigger" to="#themen">Themen</HashLink></li>
                            <li class="nav-item"><HashLink class="nav-link js-scroll-trigger" to="#mobility">Mobility</HashLink></li>
                            <li class="nav-item"><HashLink class="nav-link js-scroll-trigger" to="#smartcity">Smartcity</HashLink></li>
                            <li class="nav-item"><HashLink class="nav-link js-scroll-trigger" to="#stats">Stats</HashLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header class="masthead" id="page-top">
                <div class="container" >
                    <div class="masthead-subheading">Wie neue Technolgien den Klimawandel stoppen</div>
                    <div class="masthead-heading text-uppercase">Die Stadt der Zukunft</div>
                    <HashLink class="btn btn-primary btn-xl text-uppercase js-scroll-trigger " to="#themen">Tell Me More</HashLink>
                </div>
            </header>
        </div>
        );
    }
}

export default Header;