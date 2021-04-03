import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import Footer from '../FooterComponent';

Survey.StylesManager.applyTheme("default");

class SmartCityContent extends Component {
   

    render(){
        return(
            <div>
                <Header/>
                <Content/>
                <Footer/>
   
            </div>
        );
    }
}

const Content = () => {
    return(
        <section class="page-section" id="definition" style={{
            color: "black",
            backgroundColor: "whitesmoke", 
            padding: "20px"
        }}>
        <div class="container">
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Was sind Smart Cities?</h3>
            </div>
            <div class="row text-justify">
                <p>Der Begriff "Smart Cities" steht für die Entwicklung und Nutzung digitaler Technologien in
                fast allen Bereichen auf kommunaler Ebene.</p>

                <p>Technologien entwickeln sich rasant weiter, Unternehmen und Menschen auf der ganzen
                Welt nutzen sie häufiger und vielfältiger.Smart Cities gelten als klimafreundliche Alternative
                der Zukunft.</p>
               
                <p>Die Menschen erwarten auch, dass Städte und Gemeinden diese neuen
                Möglichkeiten nutzen. In einigen Gebieten sind bereits räumliche Effekte zu erkennen. Zum
                Beispiel durch Online-Handel in weniger attraktiven Zentren und Bezirken.
                </p>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Haben Smart Cities eine höhere Ressourceneffizienz?</h3>
            </div>
            <div class="row text-justify">
                <p>
                    Wenn es um die Zukunftsfähigkeit von Städten geht, taucht der Begriff Smart City schnell
                    auf. Auch wenn es keine richtige Definition von Smart City gibt: Unter dem Strich geht es
                    immer um Ressourceneffizienz, bessere Lebensqualität, wirtschaftliche
                    Wettbewerbsfähigkeit und die Fähigkeit, mit Krisen umzugehen (E-Auto optimiert, viele
                    Bäume und Pflanzen)
                </p>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Wie sehen Smart Cities in Zukunft aus ?</h3>
            </div>
            <div class="row text-justify">
                <p>
                Es ist sicher, dass in Zukunft die Anzahl solcher Städte auf der Welt zunehmen wird. Bis
                2050 sollen 70 Prozent der Weltbevölkerung dort leben.
                Umweltfreundliche Antriebsarten wie Elektromotoren, intelligente mobile Anwendungen und
                autonome Autos sind daher wesentliche Elemente einer intelligenten Stadt.
                </p>
                <p>
                In Zukunft
                könnte der gesamte Verkehr in der Stadt in ein riesiges Netzwerk-Ökosystem mit
                KI-gesteuerten Autos, Zügen und Lufttaxis sowie gemieteten Fahrrädern und E-Scootern
                integriert werden.
                </p>
                <p>
                Wissenschaftler weltweit glauben, dass es in Städten einen kleineren Radius geben wird.
                Das heißt innerhalb von 15 Minuten kann man alles erreichen: seinen Arbeitsplatz, seinen
                Arzt oder diverse Einkaufsmöglichkeiten.
                </p>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Wie haben sich Smart Cities durch Covid-19 verändert?</h3>
            </div>
            <div class="row text-justify">
                <p>
                Durch ausfallende Arbeitskräfte aufgrund von Covid, wurde die Automatisierung
                vorangetrieben, sodass in Fabriken schneller auf Robotik gesetzt werden konnte. Dadurch
                konnten weitere Produktionen garantiert werden, ohne jemanden zu gefährden.
                Die steigenden Zahlen an Menschen die von zu Hause aus arbeiten müssen, trieben die
                Digitalisierung voran.</p>
                <p>
                Dieser Schub an Modernisierung wurde durch Corona regelrecht vorangetrieben.
                Das effiziente Nutzen von öffentlichen Verkehrsmitteln wurde in der Pandemie minimiert, da
                Autos öfter genutzt wurden, um ein Ansteckungsrisiko zu verringern. Dies verursachte eine
                höhere Umweltbelastung und Verkehrsbehinderungen.
                </p>
               
            </div>
            <div class="container mt-5"/>
            <iframe title="Smart City Video" width="560" height="315" src="https://www.youtube.com/embed/VRRPy-yEKRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div/>
            <div class="container mt-5">
                <Survey.Survey
                        model={survey}
                />
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Quellen</h3>
            </div>
            <div class="row text-justify">
            <p>
                <a href="https://www.bmi.bund.de/DE/themen/bauen-wohnen/stadt-wohnen/stadtentwicklung/smart-cities/smart-cities-node.html">bmi.bund.de</a>  <br/> 
                <a href="https://www.gisa.de/blog-smart-city-wie-technologien-unser-leben-bereichern-koennen/">gisa.de</a><br/> 
                <a href="https://www.merckgroup.com/de/the-future-transformation/smart-cities.html">merckgroup.com</a>  <br/> 
                <a href="https://www.dw.com/de/covid-19-chance-f%C3%BCr-smart-cities/av-55628913">dw.com</a>  <br/> 
                </p>
                
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
        <header class="mastheadCity" id="page-top">
            <div class="container" >
                <div class="mastheadCity-subheading">Die Stadt der Zukunft</div>
                <div class="mastheadCity-heading text-uppercase">Die Smart City</div>
            </div>
        </header>
    </div>
    );
}



  const pages =  [
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
          correctAnswer:"Resourceneffizienz, Bessere Lebensqualität, Krisenstandhaftigkeit"
        }
      ]
    },
    
  ];

  const json = {
    title: "Smart City Umfrage",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 120,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: pages,
    completedHtml: GetCompletedHTML()
  };

  function GetCompletedHTML(){
    var string = "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4> </br> <h4>Correct Anwsers</h4> </br>";
    
    string = string.concat("<strong>Was versteht man unter Smart Cities?</strong> </br>");
    string = string.concat("Umweltfreundliche Nutzung von digitalen Technologien in Großstädten </br></br>");

    string = string.concat("<strong>Wie viel Prozent der Weltbevölkerung sollen in den nächsten 30 Jahren in Smart Cities Leben?</strong> </br>");
    string = string.concat("70 </br></br>");

    string = string.concat("<strong>Was sind die wesentlichen Elemente der Smart City?</strong> </br>");
    string = string.concat("Elektromotoren, mobile Anwendungen, automomes Fahren </br></br>");

    string = string.concat("<strong>Warum werden zu Corona-Zeiten eher Autos anstatt der ÖPNV genutzt?</strong> </br>");
    string = string.concat("Weniger Ansteckung </br></br>");

    string = string.concat("<strong>Um was geht es Grundsätzlich bei Smart-Cities??</strong> </br>");
    string = string.concat("Resourceneffizienz, Bessere Lebensqualität, Krisenstandhaftigkeit </br></br>");

    
    return string;
     
  }

  const survey = new Survey.Model(json);

export default SmartCityContent;