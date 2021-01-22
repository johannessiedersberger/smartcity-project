import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';
import Chart from "react-apexcharts";
import * as Survey from 'survey-react';
import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';

    
class ClimateSurvey extends Component {
    constructor(props){
        super(props);


    }

    render(){
        return(
            <section class="page-section" id="stats">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Umfrage</h2>
                        <h3 class="section-subheading text-muted">Wie umweltfreundlich bist du wirklich?</h3>
                    </div>
                    <Survey.Survey
                        model={survey}
                    />
                </div>
            </section>
        );
    }
}

const json = {
    title: "Green foodprint",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      { questions: [ {type: "html", html: "You are about to start quiz about your green foodprint. <br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Wie wohnst du?",
            title: "Wie wohnst du?",
            choices: [ "In einem freistehenden Haus", "In einem Reihen- oder Mehrfamilienhaus", "In einem Wohnblock (> 4 Wohnungen)", "In einem großen Hochhaus" ],
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Welche Heizenergie wird bei dir im Haushalt genutzt?",
            title: "Welche Heizenergie wird bei dir im Haushalt genutzt?",
            choices: [ "Elektroheizung", "Kohleofen", "Ölheizung", "Gasheizung", "Wärmepumpe", "Holzheizung" ],
          }
        ]
      },
      
    ],
    completedHtml: "<h4>You are finished</h4>"
  };
  const survey = new Survey.Model(json);

export default ClimateSurvey;
