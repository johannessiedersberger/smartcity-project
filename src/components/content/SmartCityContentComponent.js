import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';

class SmartCityContent extends Component {
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
            <div class="container"/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/VRRPy-yEKRM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <div/>
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
                        <li class="nav-item"><a class="nav-link js-scroll-trigger" href="/">Home</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <header class="mastheadCity" id="page-top">
            <div class="container" >
                <div class="mastheadCity-subheading">Die Smart City</div>
                <div class="mastheadCity-heading text-uppercase">Die Stadt der Zukunft</div>
            </div>
        </header>
    </div>
    );
}

export default SmartCityContent;