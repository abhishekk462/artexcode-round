import React from "react";
import HighchartsReact from "highcharts-react-official";

const Chart =() =>{
    return (
      <div>
        <HighchartsReact
          highcharts={this.props.highcharts}
          constructorType={"chart"}
          options={this.props.options}
          ref={"wrappedChart"}
        />
      </div>
    );
  }
 }
export default Chart;
