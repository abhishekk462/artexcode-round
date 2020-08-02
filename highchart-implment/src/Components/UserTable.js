import React from "react"
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import * as moment from 'moment';


  
class UserTable extends React.Component{

    constructor(props){
        super(props)
        this.state = {
         columnDefs: [
             {headerName: "Extended cost", field: "extended_cost_$",sortable: true, filter: true},
             {headerName: "End date",      field: "end_date",
             valueFormatter: function (params) {
                return moment(params.value).format('yyyy-MM-dd');
            }, sortable: true, filter: true},
             {headerName: "Turbine Name" ,            field: "turbine_name",sortable: true},
             {headerName: "Labour Cost",              field: "labour_cost_$",sortable: true,filter: true},
             {headerName: "Windfarm name",            field: "windfarm_name",sortable: true},
             {headerName: "Duration mins",            field: "duration_mins",sortable: true},
             {headerName: "Sr type",                  field: "sr_type",sortable: true,filter:true},
             {headerName: "Service req description",  field: "service_req_description",sortable: true},
             {headerName: "Pk",                       field: "pk",sortable: true},
             {headerName: "Service Date",             field: "service_date",
            
             valueFormatter: function (params) {
                return moment(params.value).format('yyyy-MM-dd');
            },sortable: true},
             {headerName: "Start Date",     field: "start_date",
             valueFormatter: function (params) {
                return moment(params.value).format('yyyy-MM-dd');
            },sortable: true, filter: true},
           ],
            rowData :[]
          };
    }
    componentDidMount() {
         fetch('./maintainence_data.json')
        .then(result => result.json())
        .then(rowData => this.setState({rowData}))
        }
        
     render(){
         const {rowData} = this.state;
        return(
          <div style={{ height: '250px'}}  className="ag-theme-alpine" >
            <AgGridReact
              columnDefs={this.state.columnDefs}
              rowData={rowData}>
           </AgGridReact>
         </div>
        )            
    }
}     
export default UserTable;