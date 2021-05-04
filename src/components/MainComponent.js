import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import Topics from './TopicsComponent';
import Mobility from './MobilityComponent';
import SmartCity from './SmartCityComponent';
import Stats from './StatsComponent';
import Footer from './FooterComponent';
import '../styles/styles.css';
import '../styles/mystyles.css';
import ClimateSurvey from './ClimateSurveyComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            surveyData: suveyDataJSON,
            points: surveyDataPoints
        }
    }

    render() {


        return (
            <div className="column">
                <Header />
                <Topics />
                <Mobility />
                <SmartCity />
                <Stats />
                <ClimateSurvey surveyData={this.state.surveyData} points={this.state.points} />
                <Footer />
            </div>
        )
    }
}

export default Main;

const suveyDataJSON = [
    { "id": 1, "frage": "Wie wohnst du?", "antwort_1": "In einem freistehenden Haus", "antwort_2": "In einem Reihen- oder Mehrfamilienhaus", "antwort_3": "In einem Wohnblock (> 4 Wohnungen)", "antwort_4": "In einem großen Hochhaus", "antwort_5": null, "antwort_6": null },
    { "id": 2, "frage": "Welche Heizenergie wird bei dir im Haushalt genutzt?", "antwort_1": "Elektroheizung", "antwort_2": "Kohleofen", "antwort_3": "Ölheizung", "antwort_4": "Gasheizung", "antwort_5": "Wärmepumpe", "antwort_6": "Holzheizung" },
    { "id": 3, "frage": "Wie wird bei dir der Müll getrennt?", "antwort_1": "Es wird der komplette Müll getrennt.", "antwort_2": "Nur Glas und Papier.", "antwort_3": "Nur Glas.", "antwort_4": "Keine Mülltrennung", "antwort_5": null, "antwort_6": null },
    { "id": 4, "frage": "Wie viele Stunden verbringst du täglich vor dem Bildschirm?", "antwort_1": "12 - 18 Stunden", "antwort_2": "6 - 12 Stunden", "antwort_3": "3 - 6 Stunden", "antwort_4": "1 - 3 Stunden", "antwort_5": "0 - 1 Stunden", "antwort_6": null },
    { "id": 5, "frage": "Wie oft wäscht du deine Klamotten?", "antwort_1": "täglich", "antwort_2": "mehrmals wöchentlich", "antwort_3": "einmal wöchentlich", "antwort_4": "1 - 3 mal monatlich", "antwort_5": "< 1 mal monatlich", "antwort_6": null },
    { "id": 6, "frage": "Wie viele Quadratmeter brauchst du zum Leben?", "antwort_1": "1 - 20 m² Wohnfläche", "antwort_2": "20 - 40 m² Wohnfläche", "antwort_3": "40 - 60 m² Wohnfläche", "antwort_4": ">60 m² Wohnfläche", "antwort_5": null, "antwort_6": null },
    { "id": 7, "frage": "Wird in deimen Haushalt grüner Strom (=Ökostrom) benutzt?", "antwort_1": "ja", "antwort_2": "nein", "antwort_3": null, "antwort_4": null, "antwort_5": null, "antwort_6": null },
    { "id": 8, "frage": "Wird darauf geachtet das Licht bei Nichtbenutzung auszuschalten?", "antwort_1": "immer", "antwort_2": "manchmal", "antwort_3": "nie", "antwort_4": null, "antwort_5": null, "antwort_6": null },
    { "id": 9, "frage": "Auf wie viel Grad wird bei dir im Zimmer geheizt?", "antwort_1": "< 18°C", "antwort_2": "18 - 20°C", "antwort_3": "20 - 22°C", "antwort_4": ">22°C", "antwort_5": null, "antwort_6": null },
    { "id": 10, "frage": "Wie lang duscht du in der Woche?", "antwort_1": "> 1 Stunde", "antwort_2": "30 min. bis 1 Stunde", "antwort_3": "15 bis 30 min.", "antwort_4": "< 15 min", "antwort_5": null, "antwort_6": null },
    { "id": 11, "frage": "Wie viele Kilometer fährst du wöchentlich mit dem Auto?", "antwort_1": "> 250 km", "antwort_2": "50 - 250 km", "antwort_3": "10 - 50 km", "antwort_4": "< 10 km", "antwort_5": "ich fahre nie mit dem Auto", "antwort_6": null },
    { "id": 12, "frage": "In wie fern werden Fahrgemeinschaften gebildet?", "antwort_1": "ich fahre immer alleine", "antwort_2": "ich fahre mit einer anderen Person zusammen", "antwort_3": "das Auto ist voll", "antwort_4": null, "antwort_5": null, "antwort_6": null },
    { "id": 13, "frage": "Wie viele Kilometer fährst du wöchentlich mit dem Motorrad / Motorroller?", "antwort_1": "> 50 km", "antwort_2": "25 - 50 km", "antwort_3": "10 - 25 km", "antwort_4": "< 10 km", "antwort_5": "ich fahre nie mit dem Motorrad / Motorroller", "antwort_6": null },
    { "id": 14, "frage": "Wie lange nutzt du wöchentlich die öffentlichen Verkehrsmittel?", "antwort_1": "> 10 Stunden", "antwort_2": "4 - 10 Stunden", "antwort_3": "1 - 4 Stunden", "antwort_4": "< 1 Stunde", "antwort_5": "nie", "antwort_6": null },
    { "id": 15, "frage": "Wie viele Stunden bist du im letzen Jahr geflogen?", "antwort_1": "> 20 Stunden", "antwort_2": "10 - 20 Stunden", "antwort_3": "3 - 10 Stunden", "antwort_4": "1 - 3 Stunden", "antwort_5": "< 1 Stunde / gar nicht", "antwort_6": null },
    { "id": 16, "frage": "Wie oft fährst du jährlich in den Urlaub (>3 Übernachtungen)?", "antwort_1": "> 10 mal", "antwort_2": "5 - 10 mal", "antwort_3": "3 - 5 mal", "antwort_4": "1 - 3 mal", "antwort_5": "gar nicht", "antwort_6": null },
    { "id": 17, "frage": "Wo verbringst du während des Urlaubs die Nacht?", "antwort_1": "in Hotels", "antwort_2": "in anderen Unterkünften (z.B. Jugendherbergen / Campingplatz)", "antwort_3": "Bei Freunden / Verwandten", "antwort_4": null, "antwort_5": null, "antwort_6": null }];

const surveyDataPoints = [

    {
        "frage": "Wie wohnst du?",
        "antworten":
            [{"In einem freistehenden Haus": 30 },
            { "In einem Reihen- oder Mehrfamilienhaus": 20 },
            { "In einem Wohnblock (> 4 Wohnungen)": 10 },
            { "In einem großen Hochhaus": 5 }]
    },
    {
        "frage": "Welche Heizenergie wird bei dir im Haushalt genutzt?",
        "antworten": [{ "Elektroheizung": 30 },
        { "Kohleofen": 25 },
        { "Ölheizung": 20 },
        { "Gasheizung": 15 },
        { "Wärmepumpe": 5 },
        { "Holzheizung": 5 }]
    },
    {
        "frage": "Wie wird bei dir der Müll getrennt?",
        "antworten": [{ "Es wird der komplette Müll getrennt.": 0 },
        { "Nur Glas und Papier.": 20 },
        { "Nur Glas.": 30 },
        { "Keine Mülltrennung": 40 }]
    },
    {
        "frage": "Wie viele Stunden verbringst du täglich vor dem Bildschirm?",
        "antworten": [{ "12 - 18 Stunden": 55 },
        { "6 - 12 Stunden": 40 },
        { "3 - 6 Stunden": 25 },
        { "1 - 3 Stunden": 10 },
        { "0 - 1 Stunden": 5 },]
    },
    {
        "frage": "Wie oft wäscht du deine Klamotten?",
        "antworten": [{ "täglich": 30 },
        { "mehrmals wöchentlich": 25 },
        { "einmal wöchentlich": 20 },
        { "1 - 3 mal monatlich": 15 },
        { "< 1 mal monatlich": 5 }]
    },
    {
        "frage": "Wie viele Quadratmeter brauchst du zum Leben?",
        "antworten": [{ "1 - 20 m² Wohnfläche": 10 },
        { "20 - 40 m² Wohnfläche": 20 },
        { "40 - 60 m² Wohnfläche": 30 },
        { ">60 m² Wohnfläche": 40 },]
    },
    {
        "frage": "Wird in deimen Haushalt grüner Strom (=Ökostrom) benutzt?",
        "antworten": [{ "ja": -15 },
        { "nein": 15 },]
    },
    {
        "frage": "Wird darauf geachtet das Licht bei Nichtbenutzung auszuschalten?",
        "antworten": [{ "immer": -10 },
        { "manchmal": 10 },
        { "nie": 20 },]
    },
    {
        "frage": "Auf wie viel Grad wird bei dir im Zimmer geheizt?",
        "antworten": [{ "< 18°C": 0 },
        { "18 - 20°C": 15 },
        { "20 - 22°C": 30 },
        { ">22°C": 40 },]
    },
    {
        "frage": "Wie lang duscht du in der Woche?",
        "antworten": [{ "> 1 Stunde": 30 },
        { "30 min. bis 1 Stunde": 25 },
        { "15 bis 30 min.": 20 },
        { "< 15 min": 15 },]
    },
    {
        "frage": "Wie viele Kilometer fährst du wöchentlich mit dem Auto?",
        "antworten": [{ "> 250 km": 60 },
        { "50 - 250 km": 40 },
        { "10 - 50 km": 20 },
        { "< 10 km": 10 },
        { "ich fahre nie mit dem Auto": 0 },]
    },
    {
        "frage": "In wie fern werden Fahrgemeinschaften gebildet?",
        "antworten": [{ "ich fahre immer alleine": 30 },
        { "ich fahre mit einer anderen Person zusammen": 15 },
        { "das Auto ist voll": 0 },]
    },
    {
        "frage": "Wie viele Kilometer fährst du wöchentlich mit dem Motorrad / Motorroller?",
        "antworten":[
            { "> 50 km": 30 },
            { "25 - 50 km": 15 },
            { "10 - 25 km": 10 },
            { "< 10 km": 5 },
            { "ich fahre nie mit dem Motorrad / Motorroller": 0 },]
    },
    {
        "frage": "Wie lange nutzt du wöchentlich die öffentlichen Verkehrsmittel?",
        "antworten": [{ "> 10 Stunden": 27.5 },
        { "4 - 10 Stunden": 17.5 },
        { "1 - 4 Stunden": 10 },
        { "< 1 Stunde": 5 },
        { "nie": 0 },]
    },
    {
        "frage": "Wie viele Stunden bist du im letzen Jahr geflogen?",
        "antworten": [{ "> 20 Stunden": 65 },
        { "10 - 20 Stunden": 50 },
        { "3 - 10 Stunden": 35 },
        { "1 - 3 Stunden": 20 },
        { "< 1 Stunde / gar nicht": 0 },]
    },
    {
        "frage": "Wie oft fährst du jährlich in den Urlaub (>3 Übernachtungen)?",
        "antworten": [{ "> 10 mal": 40 },
        { "5 - 10 mal": 30 },
        { "3 - 5 mal": 20 },
        { "1 - 3 mal": 10 },
        { "gar nicht": 0 },]
    },
    {
        "frage": "Wo verbringst du während des Urlaubs die Nacht?",
        "antworten": [
            { "in Hotels": 30 },
            { "in anderen Unterkünften (z.B. Jugendherbergen / Campingplatz)": 15 },
            { "Bei Freunden / Verwandten": 0 },]
    }






]

