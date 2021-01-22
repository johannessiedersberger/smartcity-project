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
        this.state = {
          surveyJSON : json, 
          questionsLoaded : null
        }

       
    }

    componentDidMount(){
      this.fillUpQuestions();
    }

    fillUpQuestions(){
      var surveyQuestions = this.props.surveyData;
      for(var i=0; i< surveyQuestions.length; i++){
        var answers = [];

        for(var a=1; a <= 6; a++){

          var index = String('antwort_' + a);
          var answer = surveyQuestions[i][index];
          if(answer != null){
            answers.push(answer);
          }
        }

        this.state.surveyJSON.pages.push({
          maxTimeToFinish: 15,
          questions: [
            {
              type: "radiogroup",
              title: surveyQuestions[i]['frage'],
              choicesOrder: "random",
              choices: answers
            }
          ]
        });
      
      }

      this.setState({questionsLoaded : "blabla"});
      
      
      
      
    }





    

    render(){
        if(this.state.questionsLoaded == null){
          return <p>Loading ...</p>
        }

        return(
            <section class="page-section" id="stats">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Umfrage</h2>
                        <h3 class="section-subheading text-muted">Wie umweltfreundlich bist du wirklich?</h3>
                    </div>
                    <Survey.Survey
                        model={new Survey.Model(this.state.surveyJSON)}
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
      { questions: [ { type: "html", html: "You are about to start quiz about your green foodprint. <br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
    ],
    completedHtml: "<h4>You are finished</h4>"
  };
  

export default ClimateSurvey;
