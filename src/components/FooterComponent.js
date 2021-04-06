import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { HashLink } from 'react-router-hash-link';
    
class Footer extends Component {
  

    render(){
        return(
            <footer class="footer py-4">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-4 text-lg-left">Copyright © Berufsschule Plus 2021</div>
                    <div class="col-lg-4 my-3 my-lg-0">
                        
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <HashLink class="mr-3" to="/imprint">Impressum</HashLink>
                        <a href="#!">Datenschutz</a>
                    </div>
                </div>
            </div>
            </footer>
        );
    }
}

export default Footer;