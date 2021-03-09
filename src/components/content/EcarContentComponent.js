import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import CarStat from "../../assets/img/statistik_autonomes_fahren.png";
import CarCity from "../../assets/img/image_city.png";
import Energiewende from "../../assets/img/energiewende.png";
import Motor from "../../assets/img/emotor.png";
import Batterie from "../../assets/img/e_batterie.png";
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
            backgroundColor: "whitesmoke", 
            
            padding: "20px"
        }}>
        <div class="container">
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Autonomes Fahren</h3>
            </div>
            <div class="row text-justify">
                <p>Die erste, seit ca. 2010 erprobte und 2015 kurz vor der Serieneinführung stehende Anwendung des fahrerlos autonomen Fahrens ist das vollständig autonome Einparken.
                    Das Frauenhofer-Institut IAO prognostizierte im November 2015, dass das autonome Fahren „bereits vor 2025 technische Reife erlangen“ 
                    Der Anteil von Neufahrzeugen, werden in der unteren Grafik dargestellt
                </p>
                <img src={CarStat}/>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Die IT-Industrie arbeitet an der digitalen Infrastruktur</h3>
            </div>
            <div class="row text-justify">
                <p>
                  Lkw von MAN und DB Schenker wurden auf der A9 schon erprobt. 
                  Der Fahrer des ersten Lkw gibt Tempo und Richtung vor, alle anderen Lastwagen folgen ihm im Windschatten im Abstand von jeweils 15 Metern automatisiert, 
                  lenken und bremsen selbsttätig im Takt des Führungsfahrzeugs.
                  In Europa schon ganz ohne Fahrer unterwegs sind aktuell einige öffentliche Nahverkehrsbusse, zum Beispiel in Berlin und im niederbayerischen Bad Birnbach. 
                  Noch können die Roboterbusse mit höchstens 15 km/h lediglich wie auf Schienen eine programmierte Strecke abfahren, 
                  halten aber dank vieler Sensoren zuverlässig vor jedem Hindernis. 
                </p>
                <img src={CarCity}/>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Umweltaspekte</h3>
            </div>
            <div class="row text-justify">
                <p>
                E Autos produzieren indirekt Co2 - 
                Durch die Stromproduktion das ist in Deutschland besonders viel, weil der Kohleanteil am Strommix noch besonders hoch ist. 
                Je nach Region 20-60%, doch Experten erwarten, dass das noch sinkt mit einem grüneren Strommix. 
                Es wird wartet dass der europäische Strommix 260g/kWh bis 2040 auf  116g/kWh fällt, was einer Senkung von 7,2g/kWh p.a. 
                entspricht. Das war auch der Schnitt über die letzten 29 Jahre, dieser Wert könnte auch unterboten werden wie z.B. 2012 
                als die Emissionen um 32% sanken oder 2019 als sie um 19% sanken. 
                </p>
                <img src={Energiewende} />
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Antrieb</h3>
            </div>
            <div class="row text-justify">
                <p>
                Elektromotoren: <br/> 
                  -	Kein Schaltgetriebe <br/>
                  -	Leise und keine Abgase <br/>
                  -	Hohe Beschleunigung <br/>
                  -	Laufen von selbst an <br/>
                  -	Verfügen über einen sehr hohen Drehzahlenbereich <br/>
                </p>
                <img src={Motor}/>
                <p>
                E-Motoren im Detail: <br/> 
                  -	Bei gleichen Leistungen kleiner <br/> 
                  -	Kleiner Verlust/ Großer Wirkungsgrad (85 – 95%) <br/> 
                  -	Energiedichte geringer <br/> 
                  -	Reichweite geringer <br/> 
                  -	Rekuperation (Nutzbremse) <br/> 
                  -	Langlebig <br/> 
                  -	Kein verschleiß der Bremsen <br/> 
                </p>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Batterien</h3>
            </div>
            <div class="row text-justify">
                <p>
                Gewicht von 200-700kg z.B. tesla model S: 600kg <br/> 
                Spannungen von 400-800V <br/> 
                Batterie ist Hauptfaktor für die Fahrzeugkosten <br/> 
                Lebensdauer ca 8 bis 10 Jahre <br/> 
                Lithium, Blei oder Nickeltechnik möglich <br/> 
                Heute hauptsächlich Lithium, weil es eine hohe gewichtsbezogene energiedichte hat <br/> 
                Große Akkus: Hohe Reichweite, Lebensdauer kann bis auf Fahrzeuglebensdauer verlängert werden, Gewicht und Investitionskosten steigen stark an <br/> 
                Kleine Akkus: Geringe Reichweite, geringes Gewicht, geringe Anschaffungskosten, geringe Lebensdauer, da höhere Belastung, setzt engmaschige Ladeinfrastruktur voraus <br/>
                <br/>
                Probleme:<br/>
                Förderung von Lithium, Nickel, Kobalt, Graphit und Mangan unter Umweltbelastungen und Kinderarbeit- großes Problem <br/>
                Bei Brand, z.B. nach Unfall: Löschen unmöglich, Feuerwehr muss Auto abbrennen lassen <br/>
                Begrenzte Haltbarkeit der Akkus <br/>
                Geringere Reichweite <br/>

                </p>
                <img src={Batterie} />
            </div>
            <div class="container mt-5">
                <Survey.Survey
                        model={survey}
                />
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
    title: "E-Auto Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 120,
    
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      { questions: [ {type: "html", html: "You are about to start quiz about smart cities. <br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Was wird bei dem Elektromotor nicht benötigt?",
            title: "Was wird bei dem Elektromotor nicht benötigt?",
            choicesOrder: "random",
            choices: [ "Zündkerze", "Batterie", "Stator", "Rotor"],
            correctAnswer: "Zündkerze"
        }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Wieso verschleißen bei E-Autos die Bremsen langsamer?",
            title: "Wieso verschleißen bei E-Autos die Bremsen langsamer?",
            choicesOrder: "random",
            choices: [ "weil bei leichtem bremsen die Rekuperation (die Nutzbremse) eingesetzt wird", "weil E-Autos langsamer Fahren", "weil die Bremsbelege besser sind"],
            correctAnswer: "weil bei leichtem bremsen die Rekuperation (die Nutzbremse) eingesetzt wird"
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
            name: "Ab wann gab es die ersten Versuche beim autonomen Fahren?",
            title: "Ab wann gab es die ersten Versuche beim autonomen Fahren?",
            choicesOrder: "random",
            choices: ["2010", "2005", "2000"],
            correctAnswer: "2010"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Die Rechenleistung beim Autonomen fahren ist Vergleich bei mit der Rechen Leistung von...?",
            title: "Die Rechenleistung beim Autonomen fahren ist Vergleich bei mit der Rechen Leistung von...?",
            choicesOrder: "random",
            choices: ["15 Laptops","1 Smartphone", "3 Taschenrechner"],
             correctAnswer: "15 Laptops"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Aus welchem Material werden heute die meisten Autobatterien hergestellt?",
            title: "Aus welchem Material werden heute die meisten Autobatterien hergestellt?",
            choicesOrder: "random",
            choices: ["Lithium", "Kobalt", "Nickel"],
            correctAnswer: "Lithium"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "Mit welcher Spannung arbeiten die Akkus?",
            title: "Mit welcher Spannung arbeiten die Akkus?",
            choicesOrder: "random",
            choices: ["400-800V", "800-1000V", "2000V"],
            correctAnswer: "400-800V"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "E-Autos werden mit der Zeit …?",
            title: "E-Autos werden mit der Zeit …?",
            choicesOrder: "random",
            choices: ["Umweltschädlicher", "Umweltfreundlicher", "Es verändert sich nichts"],
            correctAnswer: "Umweltfreundlicher"
          }
        ]
      },
      
    ],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
  };
  const survey = new Survey.Model(json);

export default EcarContent;