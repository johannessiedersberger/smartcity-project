import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import * as Survey from 'survey-react';
import 'bootstrap/dist/css/bootstrap.css';
import 'survey-react/survey.css';


    
class ClimateSurvey extends Component {
    constructor(props){
        super(props);
        this.state = {
          surveyJSON : json, 
          questionsLoaded : null, 
          numQuestions : 0,
          userScore : 0, 
          averageScore : null
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

      this.setState({questionsLoaded : true});      
    }

    getModel(){
      var model = new Survey.Model(this.state.surveyJSON);

      model.onComplete.add( async (sender) => this.evaluateSurvey(sender));
      return model;
    }

    async evaluateSurvey(sender){
      var surveyAnswers = sender.data;
      var surveyQuestions = this.props.surveyData;

      for(var i=0; i < surveyQuestions.length; i++){

        var indexAnswer = String('question'+(i+2));
        var answer = surveyAnswers[indexAnswer];
        var question = surveyQuestions[i]['frage'];
        console.log(question + answer);

          // const requestOptions = {
          //   method: 'POST',
          //   headers: { 'Content-Type': 'application/json' },
          //   body: JSON.stringify([{ frage: question, antwort: answer  }])
          // };
          // await fetch('http://umweltprojektbe-env.eba-xvnpe4sr.eu-central-1.elasticbeanstalk.com/api/evaluateUmfrage', requestOptions)
          //     .then(response => response.json())
          //     .then(data => this.calculateFinalScore(data['userScore'])); 
          // }

          if(answer===undefined){
            continue;
          }

          var points = this.props.points[i]["antworten"].find(x => x.hasOwnProperty(answer))[answer];
          console.log(points);
          this.calculateFinalScore(points);
      } 
          

          this.setState({averageScore: "YOUR CLIMATE FOODPRINT IS: " + this.state.userScore })
          console.log("YOUR CLIMATE FOODPRINT IS:"  + this.state.userScore);
        
    }

    calculateFinalScore(score){
      if(score !== undefined){
        this.setState({
          numQuestions: this.state.numQuestions += 1,
          userScore: this.state.userScore += score
        });

        console.log("score " + this.state.userScore / this.state.numQuestions); 
      }
    }

    render(){
        if(this.state.questionsLoaded == null){
          return <p>Loading ...</p>
        }

        var scoreColor;

        if(this.state.userScore <= 200){
          scoreColor = "green"
        }
        else if(this.state.userScore <= 400){
          scoreColor = "yellow"
        }
        else{
          scoreColor = "red"
        }

        if(this.state.averageScore !== null){
          return ( 
          <div>
            <p style={{margin: 200, color: scoreColor, fontSize: 70, fontStyle: "revert", textAlign: "center"}}>{this.state.averageScore}</p> 
              <div>
                <p style={{color: "green", fontSize: 30, fontStyle: "revert", textAlign: "center"}}>{"Grüner Bereich: 0-200"}</p> 
                <p style={{color: "yellow", fontSize: 30, fontStyle: "revert", textAlign: "center"}}>{"Gelber Bereich: 200-400"}</p> 
                <p style={{color: "red", fontSize: 30, fontStyle: "revert", textAlign: "center"}}>{"Roter Bereich: 400-600+"}</p> 
              </div>       
          </div>)
        }

        return(
            <section class="page-section" id="stats">
                <div class="container">
                    <div class="text-center">
                        <h2 class="section-heading text-uppercase">Umfrage</h2>
                        <h3 class="section-subheading text-muted">Wie umweltfreundlich bist du wirklich?</h3>
                    </div>
                    <Survey.Survey
                        model={this.getModel()}
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
    maxTimeToFinishPage: 120,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
      { questions: [ { type: "html", html: "You are about to start quiz about your green foodprint. <br/>Please click on <b>'Start Quiz'</b> button when you are ready." } ] },
    ],
    completedHtml: `<h4>You are finished </h4>`
  };
  

export default ClimateSurvey;
