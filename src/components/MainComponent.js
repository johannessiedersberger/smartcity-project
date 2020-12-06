import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './HomeComponent';

class Main extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="column">
                <Header/>
                <Home/>
            </div>
        )
    }
}

export default Main;