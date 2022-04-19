import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';
import {
    Chart, SeriesTemplate, CommonSeriesSettings, Title,
  } from 'devextreme-react/chart';
import _ from 'lodash';
import 'devextreme/dist/css/dx.light.css';
import Paper from '@mui/material/Paper';
// import {
//   ArgumentAxis,
//   ValueAxis,
//   BarSeries,
//   Chart,
//   LineSeries,
// } from '@devexpress/dx-react-chart-material-ui';
import { ValueScale } from '@devexpress/dx-react-chart';


export interface IState {
   
    datarecords: any[];
    datacolumns: any[];
    datarecords1: any[];
    datacolumns1: any[];    
}
interface IDataItem {
    result: string,
    count: number,
  }
  var dataSource : any[];

  var chartData: IDataItem[] = [];


class ShowResults extends React.Component<RouteComponentProps<any>, IState , IDataItem> {
    constructor(props: RouteComponentProps) {
        super(props);
        this.state = { 
             datarecords: [], 
             datacolumns: [],
             datarecords1: [], 
             datacolumns1: [],            
        }
    }
    
    public componentWillMount(): void {
        alert("1")
       
        axios.get("https://localhost:5001/api/Marklists/count")
        .then((response) => {
        console.log(response);
         this.setState({datarecords: response.data});
         this.extractColumnNames();
         chartData = response.data;
         //console.log(chartData);
        })  
    }

    public handleDeleteClick = (key :unknown) => {
         console.log(key)
      
        axios.get("https://localhost:5001/api/Marklists/find/"+key)
        .then((response) => {
         console.log(response)
         this.setState({datarecords1: response.data});
         this.extractColumnNames1();
            
        })
      }

    private extractColumnNames() 
    { 
        const firstrecord = _.keys(this.state.datarecords[0]);
        this.setState({datacolumns: firstrecord,});
    }
    private extractColumnNames1() 
    { 
        const firstrecord1 = _.keys(this.state.datarecords1[0]);
        this.setState({datacolumns1: firstrecord1,});
    }

    private displayRecords(key: number) {
    	const datacolumns= this.state.datacolumns;
   
    	return datacolumns.map((each_col) => 
    		this.displayRecordName(each_col,key)
    	) 
    }
    private displayRecords1(key: number) {
    	const datacolumns1= this.state.datacolumns1;
   
    	return datacolumns1.map((each_col) => 
    		this.displayRecordName1(each_col,key)
    	) 
    }

    private displayRecordName(colname:string, key:number){
    	const record = this.state.datarecords[key];
      
        if (colname== "result") {
            return<td> <a  onClick={() => this.handleDeleteClick(key)}> {record[colname]}</a></td>;
          }
          return <td> {record[colname]}</td>;
        }
    	// return  <td> <a> {record[colname]}</a></td>
    // }
    private displayRecordName1(colname1:string, key:number){
    	const record1 = this.state.datarecords1[key];
       
    	return<td>{record1[colname1]} </td>
    }

    private Capitalize(str: string){
        const str_t = str.toUpperCase();
        const str_tt = str_t.replace("_", " ");
        return str_tt;
    }
    private Capitalize1(str: string){
        const str_t1 = str.toUpperCase();
        const str_tt1 = str_t1.replace("_", " ");
        return str_tt1;
    }
    public render() {
        const datarecords = this.state.datarecords;

        const each_datarecord_keys = this.state.datacolumns;
      
        const datarecords1 = this.state.datarecords1;
       
        const each_datarecord_keys1 = this.state.datacolumns1;
        return (
            <> <Link to="/RegistrationForm" style={{marginLeft:'5%'}}>  <button  >
            Form
            </button></Link>
            <Link to="/Details">  <button  >
          Details
            </button></Link>
            <div>
                {datarecords.length === 0 && (
                    <div >
                        <h2>No datarecords found at the moment</h2>
                    </div>
                )}
                <div >
                    <div >
                        <table >
                            <thead>
                             <tr>
                             {each_datarecord_keys && each_datarecord_keys.map(each_datarecord_key => 
                            <th>{this.Capitalize(each_datarecord_key)}</th>
                                )}
                               
                                </tr>
                            </thead>                            
                            <tbody> 
                            {datarecords && datarecords.map((each_datarecord, recordindex) =>
                              <tr id="result" key={each_datarecord.id}>
                                {this.displayRecords(recordindex)} 
                                
                                </tr>
                                )}
                                
                            </tbody>
                        </table>
                       
                          
                    </div>
                </div>
            </div><br /><br /> <div>
                {datarecords1.length === 0 && (
                    <div >
                        <h2>No datarecords found at the moment</h2>
                    </div>
                )}
                <div >
                    <div >
                        <table >
                            <thead>
                             <tr>
                             {each_datarecord_keys1 && each_datarecord_keys1.map(each_datarecord_key1 => 
                            <th>{this.Capitalize1(each_datarecord_key1)}</th>
                                )}
                               
                                </tr>
                            </thead>                            
                            <tbody> 
                            {datarecords1 && datarecords1.map((each_datarecord1, recordindex1) =>
                              <tr key={each_datarecord1.id}>
                                {this.displayRecords1(recordindex1)} 
                               
                                </tr>
                                )}
                            </tbody>
                        </table>
                       
                    </div>
                </div>
                {/* <Paper style={{width:'1000px',marginLeft:'5%', marginBottom:'2%', backgroundColor:'seagreen'}}>
                    <Chart
                    data={chartData}
                    >
                    <ValueScale name="count" />
                    <ValueScale name="total" />

                    <ArgumentAxis />
                    <ValueAxis scaleName="count" showGrid={false} showLine={true} showTicks={true} />
                    <ValueAxis scaleName="total" position="right" showGrid={false} showLine={true} showTicks={true} />

                    <CommonSeriesSettings barWidth={.3} 
                        scaleName='count'
                        valueField="count"
                        argumentField="result"
                    />

                    <LineSeries
                        name="Total Transactions"
                        valueField="count"
                        argumentField="result"
                        scaleName="count"
                    />
                    </Chart>

                </Paper> */}
            <Paper style={{width:'1000px',marginLeft:'5%', marginBottom:'2%',backgroundColor:'#F7E2E2'}}>
            <Chart
                   
                    dataSource={chartData}>
                    <CommonSeriesSettings
                    barWidth={80}
                    argumentField="result"
                    valueField="count"
                    type="bar"
                    ignoreEmptyPoints={true}
                    />
                    <SeriesTemplate nameField="count" />
                    {/* <Title
                    text="Age Breakdown of Facebook Users in the U.S."
                    subtitle="as of January 2017"
                    /> */}
            </Chart>
                </Paper>

            </div>
            </>
        )
    }
}

export default ShowResults;




