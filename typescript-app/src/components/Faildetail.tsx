// import * as React from 'react';
// import { Link, RouteComponentProps } from 'react-router-dom';
// import axios from 'axios';

// import _ from 'lodash';

// export interface IState {
   
//     datarecords: any[];
//     datacolumns: any[];
// }

// class Faildetail extends React.Component<RouteComponentProps<any>, IState> {
//     constructor(props: RouteComponentProps) {
//         super(props);
//         this.state = { 
//              datarecords: [], 
//              datacolumns: [],    
//         }
//     }
    
//     public componentWillMount(): void {
//         axios.get("https://localhost:5001/api/Marklists/count" )
//         .then((response) => {
//          console.log(response.data)
//          this.setState({datarecords: response.data});
//          this.extractColumnNames();
//         })
//     }

//     private extractColumnNames() 
//     { 
//         const firstrecord = _.keys(this.state.datarecords[0]);
//         this.setState({datacolumns: firstrecord,});
//     }

//     private displayRecords(key: number) {
//     	const datacolumns= this.state.datacolumns;
   
//     	return datacolumns.map((each_col) => 
//     		this.displayRecordName(each_col,key)
//     	) 
//     }

//     private displayRecordName(colname:string, key:number){
//     	const record = this.state.datarecords[key];
//     	return <th>{record[colname]}</th> 
//     }

//     private Capitalize(str: string){
//         const str_t = str.toUpperCase();
//         const str_tt = str_t.replace("_", " ");
//         return str_tt;
//     }

//     public render() {
//         const datarecords = this.state.datarecords;
//         console.log(datarecords)
//         const each_datarecord_keys = this.state.datacolumns;
//         console.log(each_datarecord_keys)
//         return (
//             <div>
//                 <Link to="/Markdetail">  <button  >
//             Marklist
//             </button></Link>
//                 {datarecords.length === 0 && (
//                     <div >
//                         <h2>No datarecords found at the moment</h2>
//                     </div>
//                 )}
//                 <div >
//                     <div >
//                         <table >
//                             <thead>
//                              <tr>
//                              {each_datarecord_keys && each_datarecord_keys.map(each_datarecord_key => 
//                             <th>{this.Capitalize(each_datarecord_key)}</th>
//                                 )}
                               
//                                 </tr>
//                             </thead>                            
//                             <tbody> 
//                             {datarecords && datarecords.map((each_datarecord, recordindex) =>
//                                  if (colname== "result") {

//                                     return<td> <a  onClick={() => this.handleDeleteClick(key)}> {record[colname]}</a></td>;
                        
//                                   }
                        
//                                   return <td> {record[colname]}</td>;
                        
//                                 }
//                                 )}
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Faildetail;
export {}