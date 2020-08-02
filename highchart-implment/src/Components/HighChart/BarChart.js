import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './Highchart.css';

class BarChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rowData: []
    }
  }
  componentDidMount() {
    fetch('./maintainence_data.json')
      .then(result => result.json())
      .then(rowData => this.setState({ rowData }))
  }

  render() {
    const { rowData } = this.state
    const config = {
      chart: {
        type: "column"
      },
      tooltip: {
        crosshairs: [true, true],
        shared: true,
        useHTML: true,
        formatter: function () {
          var seriesData = rowData,
            costSum = 0;
            seriesData.forEach(function (cost) {
            costSum = cost.extended_cost_$ + cost.labour_cost_$;
          })
           return '<br/>Total labour cost $' + costSum;
        }
      },
      xAxis: {
        categories: rowData.map(costdata => {
          return costdata.sr_type
        })
      },
      yAxis: {
        tickInterval: 1000
      },
      series: [{
        name: "Extended_cost",
        data: rowData.map(costdata => {
          return costdata.extended_cost_$
        })

      }, {
        name: 'Labour Cost',
        data: rowData.map(costdata => {
          return costdata.labour_cost_$
        })
      }]
    };

    return (
      <ReactHighcharts config= { config } />
    );
  }
}
export default BarChart;

