import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Topics from './TopicsComponent';
import Mobility from './MobilityComponent';
import SmartCity from './SmartCityComponent';
import Stats from './StatsComponent';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import '../styles/styles.css';
import '../styles/mystyles.css';
import ClimateSurvey from './ClimateSurveyComponent';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false, 
            surveyData: null,
        }
    }

    componentDidMount(){
        //this.loadSurveyData();
    }

    loadSurveyData(){
        fetch("http://umweltprojektbe-env.eba-xvnpe4sr.eu-central-1.elasticbeanstalk.com/api/getUmfrage")
        .then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({ surveyData: data, isLoading: false });
            console.log(this.state);
        });
    }



    render(){
        if (this.state.isLoading) {
            return <p>Loading ...</p>;
        }
      

        return(
            <div className="column">
                <Header/>
                <Topics/>
                <Mobility/>
                <SmartCity/>
                <Stats/>
                <ClimateSurvey surveyData={this.state.surveyData}/>
                <Footer/>
            </div>
        )
    }
}

export default Main;