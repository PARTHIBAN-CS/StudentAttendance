import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import axios from 'axios';

import _ from 'lodash';

export interface IState {
   
    datarecords: any[];
    datacolumns: any[];
    datarecords1: any[], 
    datacolumns1: any[], 
}

class Markdetail extends React.Component<RouteComponentProps<any>, IState> {
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
        axios.get("https://localhost:5001/api/Marklists/Markdetail" )
        .then((response) => {
         console.log(response.data)
         this.setState({datarecords: response.data});
         this.extractColumnNames();
        })
    }

    private Count()
    {
        axios.get("https://localhost:5001/api/Marklists/count" )
        .then((response) => {
         console.log(response.data)
         this.setState({datarecords: response.data});
         this.extractColumnNames();
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
    	return <th>{record[colname]}</th> 
    }

    private displayRecordName1(colname:string, key:number){
    	const record1 = this.state.datarecords1[key];
    	return <th>{record1[colname]}</th> 
    }

    private Capitalize(str: string){
        const str_t = str.toUpperCase();
        const str_tt = str_t.replace("_", " ");
        return str_tt;
    }
    private Capitalize1(str: string){
        const str_t = str.toUpperCase();
        const str_tt = str_t.replace("_", " ");
        return str_tt;
    }

    public render() {
        const datarecords = this.state.datarecords;
        const datarecords1 = this.state.datarecords1;

        console.log(datarecords)
        console.log(datarecords1)

        const each_datarecord_keys = this.state.datacolumns;
        const each_datarecord_keys1 = this.state.datacolumns1;

        console.log(each_datarecord_keys)
        console.log(each_datarecord_keys1)

        return (
            <div>
                <Link to="/Faildetail">  <button  >
            count
            </button></Link>
            <Link to="/RegistrationForm">  <button  >
            Form
            </button></Link>
            <Link to="/Marklist">  <button  >
            Marklist
            </button></Link>
                {datarecords.length === 0 && (
                    <div >
                        <h2>No datarecords found at the moment</h2>
                    </div>
                )}
                <div >
                    {/* <div >
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
                                <tr key={each_datarecord.id}>
                                {this.displayRecords(recordindex)}
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> */}
            <button
                    type="button"
                    onClick={() => this.Count()}
                  >
                      Display count
                  </button>

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
                {datarecords1 && datarecords1.map((each_datarecord1, recordindex) =>
                    <tr key={each_datarecord1.id}>
                    {this.displayRecords1(recordindex)}
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
        </div>
        </div>

        )
    }
}

export default Markdetail;