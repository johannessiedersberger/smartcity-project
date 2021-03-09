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
            isLoading: true, 
            surveyData: suveyDataJSON,
        }
    }

    componentDidMount(){
        this.loadSurveyData();
    }

    loadSurveyData(){
        // fetch("http://umweltprojektbe-env.eba-xvnpe4sr.eu-central-1.elasticbeanstalk.com/api/getUmfrage")
        // .then((response) => {
        //     return response.json();
        // }).then((data) => {
        //     this.setState({ surveyData: data, isLoading: false });
        //     console.log(this.state);
        // });
    }

    render(){
        // if (this.state.isLoading) {
        //     return <p>Loading ...</p>;
        // }
      

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

const suveyDataJSON = [{"id":1,"frage":"Wie wohnst du?","antwort_1":"In einem freistehenden Haus","antwort_2":"In einem Reihen- oder Mehrfamilienhaus","antwort_3":"In einem Wohnblock (> 4 Wohnungen)","antwort_4":"In einem großen Hochhaus","antwort_5":null,"antwort_6":null},{"id":2,"frage":"Welche Heizenergie wird bei dir im Haushalt genutzt?","antwort_1":"Elektroheizung","antwort_2":"Kohleofen","antwort_3":"Ölheizung","antwort_4":"Gasheizung","antwort_5":"Wärmepumpe","antwort_6":"Holzheizung"},{"id":3,"frage":"Wie wird bei dir der Müll getrennt?","antwort_1":"Es wird der komplette Müll getrennt.","antwort_2":"Nur Glas und Papier.","antwort_3":"Nur Glas.","antwort_4":"Keine Mülltrennung","antwort_5":null,"antwort_6":null},{"id":4,"frage":"Wie viele Stunden verbringst du täglich vor dem Bildschirm?","antwort_1":"12 - 18 Stunden","antwort_2":"6 - 12 Stunden","antwort_3":"3 - 6 Stunden","antwort_4":"1 - 3 Stunden","antwort_5":"0 - 1 Stunden","antwort_6":null},{"id":5,"frage":"Wie oft wäscht du deine Klamotten?","antwort_1":"täglich","antwort_2":"mehrmals wöchentlich","antwort_3":"einmal wöchentlich","antwort_4":"1 - 3 mal monatlich","antwort_5":"< 1 mal monatlich","antwort_6":null},{"id":6,"frage":"Wie viele Quadratmeter brauchst du zum Leben?","antwort_1":"1 - 20 m² Wohnfläche","antwort_2":"20 - 40 m² Wohnfläche","antwort_3":"40 - 60 m² Wohnfläche","antwort_4":">60 m² Wohnfläche","antwort_5":null,"antwort_6":null},{"id":7,"frage":"Wird in deimen Haushalt grüner Strom (=Ökostrom) benutzt?","antwort_1":"Ja","antwort_2":"Nein","antwort_3":null,"antwort_4":null,"antwort_5":null,"antwort_6":null},{"id":8,"frage":"Wird darauf geachtet das Licht bei Nichtbenutzung auszuschalten?","antwort_1":"immer","antwort_2":"manchmal","antwort_3":"nie","antwort_4":null,"antwort_5":null,"antwort_6":null},{"id":9,"frage":"Auf wie viel Grad wird bei dir im Zimmer geheizt?","antwort_1":"< 18°C","antwort_2":"18 - 20°C","antwort_3":"20 - 22°C","antwort_4":">22°C","antwort_5":null,"antwort_6":null},{"id":10,"frage":"Wie lang duscht du in der Woche?","antwort_1":"> 1 Stunde","antwort_2":"30 min. bis 1 Stunde","antwort_3":"15 bis 30 min.","antwort_4":"< 15 min","antwort_5":null,"antwort_6":null},{"id":11,"frage":"Wie viele Kilometer fährst du wöchentlich mit dem Auto?","antwort_1":"> 250 km","antwort_2":"50 - 250 km","antwort_3":"10 - 50 km","antwort_4":"< 10 km","antwort_5":"ich fahre nie mit dem Auto","antwort_6":null},{"id":12,"frage":"In wie fern werden Fahrgemeinschaften gebildet?","antwort_1":"ich fahre immer alleine","antwort_2":"ich fahre mit einer anderen Person zusammen","antwort_3":"das Auto ist voll","antwort_4":null,"antwort_5":null,"antwort_6":null},{"id":13,"frage":"Wie viele Kilometer fährst du wöchentlich mit dem Motorrad / Motorroller?","antwort_1":"> 50 km","antwort_2":"25 - 50 km","antwort_3":"10 - 25 km","antwort_4":"< 10 km","antwort_5":"ich fahre nie mit dem Motorrad / Motorroller","antwort_6":null},{"id":14,"frage":"Wie lange nutzt du wöchentlich die öffentlichen Verkehrsmittel?","antwort_1":"> 10 Stunden","antwort_2":"4 - 10 Stunden","antwort_3":"1 - 4 Stunden","antwort_4":"< 1 Stunde","antwort_5":"nie","antwort_6":null},{"id":15,"frage":"Wie viele Stunden bist du im letzen Jahr geflogen?","antwort_1":"> 20 Stunden","antwort_2":"10 - 20 Stunden","antwort_3":"3 - 10 Stunden","antwort_4":"1 - 3 Stunden","antwort_5":"< 1 Stunde / gar nicht","antwort_6":null},{"id":16,"frage":"Wie oft fährst du jährlich in den Urlaub (>3 Übernachtungen)?","antwort_1":"> 10 mal","antwort_2":"5 - 10 mal","antwort_3":"3 - 5 mal","antwort_4":"1 - 3 mal","antwort_5":"gar nicht","antwort_6":null},{"id":17,"frage":"Wo verbringst du während des Urlaubs die Nacht?","antwort_1":"in Hotels","antwort_2":"in anderen Unterkünften (z.B. Jugendherbergen / Campingplatz)","antwort_3":"Bei Freunden / Verwandten","antwort_4":null,"antwort_5":null,"antwort_6":null}];