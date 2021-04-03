import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Chart from "react-apexcharts";

    
class Stats extends Component {
 

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
                    <div class="col-md-4">
                        <h2>Wohnsituation</h2>
                        <div id="chart">
                            <Chart options={stat1data.options} series={stat1data.series} type="pie" width={380} />
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h2>Heizungsanlagen</h2>
                        <div id="chart">
                            <Chart options={stat2data.options} series={stat2data.series} type="pie" width={380} />
                        </div>
                    </div>
                    <div class="col-md-4">
                            <h2>Mülltrennung</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat3data.options} series={stat3data.series} type="pie" width={380} />
                            </div>
                    </div>
                    
                </div>
                <div class="row text-center">
                        <div class="col-md-4">
                            <h2>Bildschirmzeit</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat4data.options} series={stat4data.series} type="pie" width={380} />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h2>Wohnfläche</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat5data.options} series={stat5data.series} type="pie" width={380} />
                            </div>
                        </div>
                        <div class="col-md-4">
                            <h2>Zimmerteperatur</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat6data.options} series={stat6data.series} type="pie" width={380} />
                            </div>
                        </div>
                </div>
                <div class="row text-center">
                  <div class="col-md-4">
                            <h2>Duschen pro Woche</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat7data.options} series={stat7data.series} type="pie" width={380} />
                            </div>
                  </div>
                  <div class="col-md-4">
                            <h2>Autofahren pro Woche</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat8data.options} series={stat8data.series} type="pie" width={380} />
                            </div>
                  </div>
                  <div class="col-md-4">
                            <h2>Fahrgemeinschaften</h2>
                            <div id="chart" class="d-inline-flex p-2">
                                <Chart options={stat9data.options} series={stat9data.series} type="pie" width={380} />
                            </div>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col-md-4">
                              <h2>Nutzung ÖPNV</h2>
                              <div id="chart" class="d-inline-flex p-2">
                                  <Chart options={stat10data.options} series={stat10data.series} type="pie" width={380} />
                              </div>
                  </div>
                  <div class="col-md-4">
                              <h2>Flugstunden letztes Jahr</h2>
                              <div id="chart" class="d-inline-flex p-2">
                                  <Chart options={stat11data.options} series={stat11data.series} type="pie" width={380} />
                              </div>
                  </div>
                  <div class="col-md-4">
                              <h2>Urlaube pro Jahr</h2>
                              <div id="chart" class="d-inline-flex p-2">
                                  <Chart options={stat12data.options} series={stat12data.series} type="pie" width={380} />
                              </div>
                  </div>
                </div>
            </div>
        </section>
        );
    }
}

var stat1data = {
    series: [94, 87, 87, 18],
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
    series: [92, 69, 63, 29, 23, 3],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Gaszeizung', 'Ölheizung', 'Elektroheizung', 'Wärmepumpe', 'Holzheizung', 'Kohleofen'],
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
    series: [236, 34, 12],
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

var stat4data = {
    series: [118, 98, 47, 17, 4],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['3-6h', '6-12h', '1-3h', '12-18h', '0-1h'],
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

var stat5data = {
    series: [126, 71, 62, 26],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['20-40 m2', '40-60 m2', '> 60 m2', '1-20 m2'],
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

var stat6data = {
    series: [128, 97, 37, 19],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['18-20 °C', '20-22 °C', '<18 °C', '> 22 °C'],
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

var stat7data = {
    series: [101, 85, 60, 41],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['30 min - 1 h', '15 - 30 min', '> 1 Stunde', '> 15 min'],
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

var stat8data = {
    series: [103, 79, 55, 26, 24],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Nie', '50-250 KM', '10 - 50 KM', '> 250 KM', '< 10 KM'],
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

var stat9data = {
  series: [130, 118, 24],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Mit 1 anderen Person', 'Allein', 'Auto ist voll'],
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

var stat10data = {
  series: [105, 74, 44, 40, 24],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Nie', '1-4 h', '4-10 h', '< 1h', '> 10h'],
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

var stat11data = {
  series: [144, 51, 41, 27, 23],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['Gar Nicht', '3-10 h', '1-3 h', '10-20 h', '> 20h'],
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

var stat12data = {
  series: [200, 38, 34, 8, 7],
  options: {
    chart: {
      width: 380,
      type: 'pie',
    },
    labels: ['1-3', '0', '3-5', '5-10', '+10'],
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