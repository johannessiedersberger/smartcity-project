import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";
import CarStat from "../../assets/img/statistik_autonomes_fahren.png";
import CarCity from "../../assets/img/image_city.png";
import Energiewende from "../../assets/img/energiewende.png";
import Motor from "../../assets/img/emotor.png";
import Batterie from "../../assets/img/e_batterie.png";
import Footer from '../FooterComponent';
import { HashLink } from 'react-router-hash-link';
Survey.StylesManager.applyTheme("default");

class EcarContent extends Component {
   
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
      <div>
        <section class="page-section" id="definition" style={{
            color: "black",
            backgroundColor: "whitesmoke", 
            
            padding: "20px"
        }}>
        <div class="container">
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Antriebsarten</h3>
            </div>
            <div class="row ">
              <div className="row">
                <div className="col-md-3">
                <HashLink smooth class="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-space " to="/battery-car/">Batterie</HashLink>
                </div>
                <div className="col-md-3">
                <HashLink smooth class="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-space " to="/hybrid/">Hybrid</HashLink>
                </div>
                <div className="col-md-3">
                <HashLink smooth class="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-space " to="/fuel-cell/">Fuelcell</HashLink>
                </div>
                <div className="col-md-3">
                <HashLink smooth class="btn btn-primary btn-xl text-uppercase js-scroll-trigger btn-space " to="/plug-in-hybrid/">Plug-In Hybrid</HashLink>
                </div>
              </div>
            </div>
            <div class="text-center m-5">
                <h3 class="section-heading text-uppercase">Autonomes Fahren</h3>
            </div>
            <div class="row text-justify">
                <p>Die erste, seit ca. 2010 erprobte und 2015 kurz vor der Serieneinführung stehende Anwendung des fahrerlos autonomen Fahrens ist das vollständig autonome Einparken.
                    Das Frauenhofer-Institut IAO prognostizierte im November 2015, dass das autonome Fahren „bereits vor 2025 technische Reife erlangen“ 
                    Der Anteil von Neufahrzeugen, werden in der unteren Grafik dargestellt
                </p>
                <img src={CarStat} alt=""/>
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
                <img src={CarCity} alt=""/>
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
                <img src={Energiewende} alt=""/>
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
                <img src={Motor} alt=""/>
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
                <img src={Batterie} alt=""/>
            </div>
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
                <a href="https://de.wikipedia.org/wiki/Autonomes_Fahren">Autonomes Fahren – Wikipedia</a>  <br/> 
                <a href="https://www.adac.de/rund-ums-fahrzeug/ausstattung-technik-zubehoer/autonomes-fahren/technik-vernetzung/aktuelle-technik/">Autonomes Fahren: Der aktuelle Stand der Technik | ADAC  </a><br/> 
                <a href="https://www.oliver-krischer.eu/wp-content/uploads/2020/08/English_Studie.pdf ">oliver-krischer.eu</a>  <br/> 
                <a href="https://cdn.motor1.com/images/mgl/EZ7zB/s3/zf-prasentiert-zweigang-getriebe-fur-elektroautos.jpg">motor1.com</a>  <br/> 
                <a href="https://media3.s-nbcnews.com/j/ap/film%20cars%20green%20fuel--969948655_v2.fit-760w.jpg">nbcnews.com</a> <br/> 
                <a href="https://de.m.wikipedia.org/wiki/Elektroauto ">Elektroauto Wikipedia</a> <br/> 
                <a href="https://www.n-tv.de/auto/Motoren-in-Elektroautos-sind-nicht-gleich-article21970051.html">n-tv.de</a>  <br/> 
                <a href="https://www.enomo.de/wp-content/uploads/elementor/thumbs/elektroauto_batterie-oeiqxdgyfib87mvz44pzv35ro0kyp7pxscumjy0rds.jpg">enomo.de</a> <br/>
                <a href="https://de.statista.com/statistik/daten/studie/443614/umfrage/prognose-zur-reichweite-von-elektroautos/">statista.com</a><br/>
                <a href="https://www.autobild.de/artikel/elektroauto-batterie-kosten-funktion-lebensdauer-16202315.html">autobild.de</a> <br/>
                <a href="https://www.glinicke.de/elektromobilitaet/batterie/#:~:text=Da%20die%20Autobatterie%20wieder%20aufgeladen,ein%20Akku%20%E2%80%93%20n%C3%A4mlich%20ein%20Bleiakku.&text=Der%20Akku%20ist%20das%20teuerste,bringt%2C%20umso%20kostspieliger%20ist%20er.">glinicke.de</a> <br/>
               

                </p>
                
            </div>
        </div>
    </section>
    <Footer/>
    </div>
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

var pages =  [
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
  
];

const json = {
    title: "E-Auto Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 120,
    pages: pages,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    completedHtml: GetCompletedHTML()
  };
  const survey = new Survey.Model(json);

  function GetCompletedHTML(){
    var string = "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4> </br> <h4>Correct Anwsers</h4> </br>";
    
    for(var i=1; i<pages.length; i++){
      string = string.concat("<strong>" + pages[i].questions[0].name + "</strong> </br>");
      string = string.concat(pages[i].questions[0].correctAnswer + "</br></br>");
    }

    return string;
     
  }

export default EcarContent;