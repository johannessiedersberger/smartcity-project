import React, { Component } from 'react';
import Header from './HeaderComponent';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';

import {Paper} from '@material-ui/core';
import Chart from "react-apexcharts";

    
class Stats extends Component {
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
            <section class="page-section" id="stats">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Konsum Statistiken</h2>
                    <h3 class="section-subheading text-muted">Wie umweltfreundlich ist die Gesellschaft aktuell?</h3>
                </div>

                <div class="row text-center">
                    <div class="col-md-6">
                        <h2>Wohnsituation</h2>
                        <div id="chart">
                            <Chart options={stat1data.options} series={stat1data.series} type="pie" width={380} />
                        </div>
                    </div>
                    <div class="col-md-6">
                        <h2>Heizungsanlagen</h2>
                        <div id="chart">
                            <Chart options={stat2data.options} series={stat2data.series} type="pie" width={380} />
                        </div>
                    </div>
                    
                </div>
                <div class="row text-center">
                        <div class="col-12">
                            <h2>Mülltrennung</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat3data.options} series={stat3data.series} type="pie" width={380} />
                            </div>
                        </div>
                </div>
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


export default Stats;