import React from 'react';
import './App.css';
import Main from './components/MainComponent';
import SmartCityContent from './components/content/SmartCityContentComponent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { Provider } from 'react-redux';
import {Helmet } from 'react-helmet';

function App() {
  return (
   
        <BrowserRouter>
          <div>
              <Switch>
                <Route path="/" component={Main} exact/>
                <Route path="/smartcity" component={SmartCityContent}/>
              </Switch>
          </div> 

          <div className="App">
            <Helmet>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
              <meta name="description" content="" />
              <meta name="author" content="" />
              <title>Agency - Start Bootstrap Theme</title>
              <link rel="icon" type="image/x-icon" href="https://startbootstrap.github.io/startbootstrap-agency/assets/img/favicon.ico" />
             
              <script src="https://use.fontawesome.com/releases/v5.15.1/js/all.js" crossorigin="anonymous"></script>
              
              <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
              <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" type="text/css" />
              <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" type="text/css" />
              
              <link href="src\styles\styles.css" rel="stylesheet" />
              <link href="src\styles\mystyles.css" rel="stylesheet" />
              
              

              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
            
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
              
              <script src="https://startbootstrap.github.io/startbootstrap-agency/assets/mail/jqBootstrapValidation.js"></script>
              <script src="https://startbootstrap.github.io/startbootstrap-agency/assets/mail/contact_me.js"></script>
              
              <script src="https://startbootstrap.github.io/startbootstrap-agency/js/scripts.js"></script>
            </Helmet>
           
          </div>
        </BrowserRouter>
      
     
  );
}

export default App;
