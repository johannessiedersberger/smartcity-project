import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

Survey.StylesManager.applyTheme("default");

class EcarContent extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

const Content = () => {
    return(
        <section class="page-section" id="definition" style={{
            color: "black",
            backgroundColor: "whitesmoke"
        }}>
        <div class="container">
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">E-Mobilität und Autonomes Fahren</h3>
            </div>
            <div class="row text-justify">
                <p>E-Mobilität soll soll in Zukunft alle Verbrennungsmotoren ersetzen. Regierungen und Unternehmen müssen sich dem neuen Trend
                  anpassen. Hinzu kommt, dass Autos in zukunft autonom fahren sollen. 
                </p>

            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Die neue Batterietechnologie von Tesla</h3>
            </div>
            <div class="container mt-5"/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/l6T9xIeZTds" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div/>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Autonomes Fahren - State of the Art</h3>
            </div>
            <div class="container mt-5">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/sRxaMDDMWQQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </section>
    );
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
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/smartcity-project">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="mastheadEcar" id="page-top">
            <div class="container" >
                <div class="mastheadEcar-subheading">E-Mobilität und Autonomes Fahren</div>
                <div class="mastheadEcar-heading text-uppercase">Wie kommen wir von A nach B</div>
            </div>
        </header>
    </div>
    );
}

const json = {
    title: "Smart City Umfrage",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      { questions: [ {type: "html", html: "You are about to start quiz about smart cities. <br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Was versteht man unter Smart Cities?",
            title: "Was versteht man unter Smart Cities?",
            choicesOrder: "random",
            choices: [ "Umweltfreundliche Nutzung von digitalen Technologien in Großstädten", "Städte mit digitaler Überwachung", "Städte mit großen Grünflächen"],
            correctAnswer: "Umweltfreundliche Nutzung von digitalen Technologien in Großstädten"
        }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Wie viel Prozent der Weltbevölkerung sollen in den nächsten 30 Jahren in Smart Cities Leben?",
            title: "Wie viel Prozent der Weltbevölkerung sollen in den nächsten 30 Jahren in Smart Cities Leben?",
            choicesOrder: "random",
            choices: [ "70", "20", "10"],
            correctAnswer: "70"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Was sind die wesentlichen Elemente der Smart City?",
            title: "Was sind die wesentlichen Elemente der Smart City?",
            choicesOrder: "random",
            choices: ["Elektromotoren, mobile Anwendungen, automomes Fahren", "Fahradfahrer, Klimaschutz", "Dieselfahrzeuge, überfüllte innenstädte, schlechte Luftqualität"],
            correctAnswer: "Elektromotoren, mobile Anwendungen, automomes Fahren"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Warum werden zu Corona-Zeiten eher Autos anstatt der ÖPNV genutzt?",
            title: "Warum werden zu Corona-Zeiten eher Autos anstatt der ÖPNV genutzt?",
            choicesOrder: "random",
            choices: ["Weniger Ansteckung", "Weniger CO2 Ausstoß", "Mehr Spaß am Autofahren"],
            correctAnswer: "Weniger Ansteckung"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Um was geht es Grundsätzlich bei Smart-Cities?",
            choicesOrder: "random",
            title: "Um was geht es Grundsätzlich bei Smart-Cities?",
            choices: ["Resourceneffizienz, Bessere Lebensqualität, Krisenstandhaftigkeit",
             "Größere Städte", "Mehr Konsum"],
          }
        ]
      },
      
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
  };
  const survey = new Survey.Model(json);

export default EcarContent;