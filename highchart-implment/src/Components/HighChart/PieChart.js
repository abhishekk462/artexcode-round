import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts';
import './Highchart.css';

 class PieChart extends Component {
  constructor(props){
    super(props)
    this.state = {
      rowData: []
    }
  }

  componentDidMount() {
    fetch('./maintainence_data.json')
   .then(result => result.json())
   .then(rowData => this.setState({rowData}))
   }

  render() {
      const {rowData} = this.state   
    const config = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Chart Title'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage}</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                }
            }
        },
        series: [{
            name:"Extended Cost",
            data: rowData.map(ts => {
            return ts.extended_cost_$
              })    
        },{
         name:"Labour Cost",
         data: rowData.map(ts => {
         return ts.extended_cost_$
          })    
        }
      ]
    };
 
    return (
       <ReactHighcharts config={config}/>
    );
  }
}

export default PieChart;
