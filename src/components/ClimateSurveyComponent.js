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
    title: "American History",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      { questions: [ {type: "html", html: "You are about to start quiz by history. <br/>You have 10 seconds for every page and 25 seconds for the whole survey of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
      {
        questions: [
          {
            type: "radiogroup",
            name: "civilwar",
            title: "When was the Civil War?",
            choices: [ "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950" ],
            correctAnswer: "1850-1900"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "libertyordeath",
            title: "Who said 'Give me liberty or give me death?'",
            choicesOrder: "random",
            choices: [ "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams" ],
            correctAnswer: "Patrick Henry"
          }
        ]
      },
      {
        maxTimeToFinish: 15,
        questions: [
          {
            type: "radiogroup",
            name: "magnacarta",
            title: "What is the Magna Carta?",
            choicesOrder: "random",
            choices: [ "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower" ],
            correctAnswer: "The foundation of the British parliamentary system"
          }
        ]
      }
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
  };
  const survey = new Survey.Model(json);

export default ClimateSurvey;
