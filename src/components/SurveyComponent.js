import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';
import Chart from "react-apexcharts";

    
class Survey extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        //var chartdata = buildChartData(this.props.historicalDataWorld);
        //buildChart(chartdata, this.myRef.current, 'cases');
        //buildPieChart(this.props.worldData,this.pieChartRef.current );
    }

  

    render(){
        return(
            <section class="page-section" id="survey">
                <div class="container">
                    <div class="text-center">
                            <h2 class="section-heading text-uppercase">Umfrage</h2>
                            <h3 class="section-subheading text-muted">Wie ist dein Ökologischer Fußabdruck?</h3>
                    </div>
                    <iframe width="640px" height= "4550px" 
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=98OpYNCNPEOwKptWcy6FPmS6SgBnQE5DrG0hWE4t-O9UQUk2TE43TllDWlQ4STYzNktLVU1RVVM2Ty4u&embed=true" 
                    > 
                    </iframe>
                </div>
            </section>
        );
    }
}

var stat1data = {
    series: [44, 55, 35, 43],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Einfamielinhaus', 'Reihenhaus', 'Wohnblock', 'Hochhaus'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

var stat2data = {
    series: [44, 55, 35, 43, 77, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Elektroheizung', 'Kohleheizung', 'Ölheizung', 'Gasheizung', 'Wärmepumpe', 'Holzheizung'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

var stat3data = {
    series: [44, 55, 35],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Alles wird getrennt', 'Nur Papier / Glas', 'keine Mülltrennung'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };


export default Survey;