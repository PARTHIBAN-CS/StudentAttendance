import * as React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Pagination from '@material-ui/lab/Pagination';

import { TextField } from '@material-ui/core';

interface Mystate {
    firstname: string;
    lastname: string;
    rollno: number;
    mark1: number;
    mark2: number;
    mark3 : number;
    totalmarks : number;
    readOnly: boolean;
    filter: string;
    item: unknown;
    index: unknown;
    id : number;
  
  }
  interface Myprops {
    // firstname : string;
    // lastname : string;
    history : unknown;
    username : string;
  }
  type Student ={
    firstname : string;
    lastname : string;
    rollno : number;
    gender : string;
    phoneno : number;
    image : string;
  }
  type Mark = {
    firstname: string;
    lastname: string;
    rollno: number;
    mark1: number;
    mark2: number;
    mark3 : number;
    totalmarks : number;
    id:number;
  }

var marklist : Array<Mark> = [];
var array : Array<Student> = [];
var arrayindex = -1;
var thiapp : any, id : number =1, totalpage : number;
var totalmarks : number;

// const marklist = {
//   mark1 : "",
//   mark2 : "",
//   rollno :"",
//   mark3 : "",
//   totalmarks:"", 

//  };
class Marklist extends React.Component<Myprops, Mystate> {
  constructor(Myprops: Myprops) {
    super(Myprops);
      this.state = {
      firstname: "",
      lastname:"",
      rollno: 0,
      mark1: 0,
      readOnly :false,
      mark2: 0,
      mark3: 0,
      totalmarks: 0,
        //marklist: [],
        //dataSearch1:[],
      filter: "",
      id: 0,
      item:[],
      index:"",
    //   offset: 0,
    //   perPage: 3,
    //   currentPage: 0
    }
  }

//   handleClick(event : any) {
//     this.setState({
//       currentPage: Number(event.target.id)
//     });
//   }

markhandler = (index : any,item:any,event :any ,cindex:any) => {
    var mark = event.target.value;
    
    var arrayindex = index;
    //var m = event.currentTarget.getAttribute("tag");
    //var cindex = event.currentTarget.getAttribute("mark");

    var temparr = thiapp.state.marklist;
    if (cindex == 1 && mark <= 100)
      temparr[arrayindex].mark1 = parseInt(mark);
    else if (cindex == 2 && mark <= 100)

      temparr[arrayindex].mark2 = parseInt(mark);
    else if (mark <= 100)
      temparr[arrayindex].mark3 = parseInt(mark);

    totalmarks = parseInt(temparr[arrayindex].mark1 + temparr[arrayindex].mark2 + temparr[arrayindex].mark3);
    //console.log(totalmarks);
    temparr[arrayindex].totalmarks = totalmarks;
    
    this.setState({

      // mark1 :"",
      // mark2:"",
      // mark3:"",
      // totalmarks:"",

    });

  }

  handleInput(event : any) {
    // console.log(e.target.value);
    console.log(event.target.textContent)
    const id =event.target.textContent;
    axios.post("https://localhost:5001/api/Marklists/" + id)
      .then((response) => {
        marklist = response.data.result;
        thiapp.setState({ marklist: marklist });
      })
  }

  
  prevoius(){
    --id;
    console.log(id);
     axios.post("https://localhost:5001/api/Marklists/"+id)
       .then((response) => {
       marklist = response.data.result;
       thiapp.setState({marklist:marklist});
       })
  }
  next() {
    ++id;
    console.log(id);
     axios.post("https://localhost:5001/api/Marklists/"+id)
       .then((response) => {
       marklist = response.data.result;
       thiapp.setState({marklist:marklist});
       })
  }


  selectChanged(index : any,item:any,event :any) {
    alert("yes")
    const firstnameIndex = event.target.selectedIndex;
    var a = index
    console.log(a)
    const lastname = array[firstnameIndex - 1].lastname;
    const rollno = array[firstnameIndex - 1].rollno;
    const firstname = array[firstnameIndex - 1].firstname;
    const id = "";
    const mark1 = "";
    const mark2 = "";
    const mark3 = "";
    const totalmarks = "";
    var temparr = thiapp.state.marklist;
    temparr[a].firstname = firstname;
    temparr[a].lastname = lastname;
    temparr[a].rollno = rollno;
    temparr[a].id = id;
    temparr[a].mark1 = mark1;
    temparr[a].mark2 = mark2;
    temparr[a].mark3 = mark3;
    temparr[a].totalmarks = totalmarks;
    thiapp.setState({
      //  marklist: temparr,
      // mark1: "",
      // mark2: "",
      // mark3: "",
      // totalmarks: "",
    }

    )

  }



  // searchTxt1(event : any) {
  //   this.setState({ filter1: event.target.value   });
  //     var rollno = event.target.value ;
  //    var st=0;
  //    var obj; 
  //    console.log(Number(rollno))
  //    if(Number(rollno) >0)
  //    {
  //     obj={"rollno":rollno,"firstname":""};
  //    }
  //    else
  //   {
  //    obj={"rollno":0,"firstname":rollno};
  //   }
  //      console.log(obj);
  //     axios.put("https://localhost:5001/api/Marklists/Search",obj)
  //       .then(res => {
  //         const marklist=res.data
  //         console.log(res.data)
  //         thiapp.setState({marklist:marklist});
  //       })
  //    }

  searchTxt1(event:any) {
    this.setState({ filter: event.target.value });
    var rollno = event.target.value;
    //  var st=0;
    var obj;

    console.log(Number(rollno))
    if (Number(rollno) > 0) {
      obj = { "rollno": rollno, "firstname": "" };
    }
    else {
      obj = { "rollno": 0, "firstname": rollno };
    }

    console.log(obj);
    // axios.put("https://192.168.131.170:5001/api/Marklists/Search", obj)
    axios.put("https://localhost:5001/api/Marklists/Search", obj)
      .then(res => {
        const marklist = res.data
        console.log(res.data)
        thiapp.setState({ marklist: marklist });

      })
  }

  addRow = function () {
    // axios.get("https://localhost:5001/api/Marklists/id")
    // .then((response) => {
     // marklist = response.data;
      console.log(marklist)
      const arr = marklist;
      if (arr.length == 0) {
        alert("yes")
        arr.push({id:0,firstname: "", lastname: "", rollno: 0, mark1: 0, mark2: 0, mark3: 0, totalmarks: 0 });
       
  
      }
  
  else if ((arr.length > 0) && (arr[arr.length - 1].totalmarks > 0)) {
 alert("no")
  
        arr.push({id:0, firstname: "", lastname: "", rollno: 0, mark1: 0, mark2: 0, mark3: 0, totalmarks: 0 });
       
      }
      thiapp.setState({
        marklist:arr ,
       mark1: 0,
       mark2: 0,
       mark3: 0,
       totalmarks: 0,
       lastname: 0,
       rollno: 0,
       firstname: 0,
       id:0
     })
   

  }
  getOptions() {
      alert(1);
    axios.get("https://localhost:5001/api/Students/rollno")
      .then((response) => {
        array = response.data;
        console.log(array)
      })
  }

  marklisttable(){
    console.log(id);
    axios.post("https://localhost:5001/api/Marklists/" + id)
      .then((response) => {
        console.log(response);
        marklist = response.data.result;
        totalpage= response.data.totalpage;
        thiapp.setState({ marklist: marklist ,totalpage : totalpage});
      })
  }
//   handlePageClick = (e) => {
//     const selectedPage = e.selected;
//     const offset = selectedPage * this.state.perPage;

//     this.setState({
//         currentPage: selectedPage,
//         offset: offset
//     }, () => {
//         this.marklisttable()
//     });

// };

  componentWillMount() {
    // console.log(this.marklisttable());
    // console.log(this.getOptions());
    this.getOptions()
    this.marklisttable()
  }

  render() {
    thiapp = this;
    //const marklist = thiapp.state.marklist;

    let filter = this.state.filter;
    var dataSearch1 = marklist.filter((item :any)=> {
      return Object.keys(item).some(key =>
        item["firstname"].toLowerCase().includes(filter.toLowerCase())) ||

        item["rollno"]
          .toString()
          .toLowerCase()
          .includes(filter.toLowerCase())

    });
   
    const handleSaveClickml = (index:any, item:any,event:any) => {
      alert("save")
        var temparr1 = thiapp.state.marklist;
        //var arrayindex = index;
   //var a = event.currentTarget.getAttribute("tag");
    const marklist ={
        rollno:temparr1[index].rollno,
        mark1:temparr1[index].mark1,
        mark2:temparr1[index].mark2,
        mark3:temparr1[index].mark3,
        totalmarks:temparr1[index].totalmarks,
      }
      console.log(marklist)

      axios.post("https://localhost:5001/api/Marklists/Create", marklist)

      .then(response => {
        temparr1[index].id=response.data;
        console.log(temparr1[index].id)
      })
      thiapp.setState({ marklist: temparr1 });
    
    }
 
    const handleDeleteClickml = (index:any, item:any,event:any ) => {
        // var temparr1 = marklist;
        console.log(item)
        console.log(index)
        var temparr1 = thiapp.state.marklist;
        console.log(temparr1)
        const id =temparr1[index].id;
        // var m = event.currentTarget.getAttribute("tag");
        // const id = temparr1[0].id
        console.log(id);
        // axios.delete("https://192.168.131.170:5001/api/marklists/Delete/" + id)
        axios.delete("https://localhost:5001/api/marklists/Delete/" + id)
          .then(res => {
            console.log(res.data)
            if (res.data == 1) {
              temparr1.splice(index, 1);
              thiapp.setState({ temparr1: marklist });
            }
          })
        marklist.splice(index, 1);
        thiapp.setState({ marklist: marklist });
    }

    const _click = (index: any,item : any,event: any) => {
      this.setState(prevState => ({ readOnly: !prevState.readOnly }))
      var temparr1 = thiapp.state.marklist;
      // console.log(temparr1)
      //var a = event.currentTarget.getAttribute("tag");
      const marklist = {

        rollno: temparr1[index].rollno,
        mark1: temparr1[index].mark1,
        mark2: temparr1[index].mark2,
        mark3: temparr1[index].mark3,
        totalmarks: temparr1[index].totalmarks,
      }
      const id = temparr1[index].id
      axios.put("https://localhost:5001/api/Marklists/Edit/" + id, marklist)
        .then(res => {
          this.setState({ item: res.data });
        })
    }
   
   
    return (
      <div>
        <div style={{marginTop:'5%'}}>
          <div>
          User:{this.props.username}
          </div> 
          <br />
        <Link to="/RegistrationForm">  <button  >
            Form
            </button></Link>
            <Link to="/Details">  <button  >
          Details
            </button></Link>
            <Link to="/ShowResults">  <button  >
            Result
            </button></Link>

          <label>search :</label><input type="text" id="search" value={filter} onChange={this.searchTxt1.bind(this)} />

        </div>

        <button type="button" id="add" className='buttonAdd' onClick={this.addRow} >
          Add
        </button>
        <Link to="/Details">
          {" "}
          <button className="left">Details</button>
        </Link>
        <div>

          <table >
            <thead>
              <tr>
                <th>Rollno</th>
                {/* <th> id </th> */}
                <th>firstname</th>
                <th>LastName</th>
                <th>Marks 1</th>
                <th>Marks 2</th>
                <th>Marks 3</th>
                <th> Total Marks</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
            

              {
                dataSearch1.map((item :any , index:any ) => {
                    console.log(array)
                  return (
                    <tr key={index} >
                      <td>   <select id="selectroll"  onChange={(event)=>this.selectChanged(index,item,event)} value={item.rollno} >

                        <option>Select rollno</option>

                        {array.map((option) => (

                          <option >

                            {option.rollno }

                          </option>

                        ))}

                      </select></td>
                      {/* <td><input type="text" value={item.idValue} /></td> */}
                      <td ><input type="text" value={item.firstname} /></td>
                      <td><input type="text" value={item.lastname} /></td>

                      <td ><input   type="number" id="mark1"  readOnly={this.state.readOnly} value={item.mark1} onChange={(event)=>this.markhandler(index,item,event,1)} /></td>
                      <td ><input  type="number" id="mark2"  value={item.mark2} readOnly={this.state.readOnly} onChange={(event)=>this.markhandler(index,item,event,2)} /></td>
                      <td ><input   type="number" id="mark3"  value={item.mark3} readOnly={this.state.readOnly} onChange={(event)=>this.markhandler(index,item,event,3)} /></td>
                      <td><input  type="number" value={item.totalmarks}/></td>
                      <td> <button  className='buttonDelete' id="save" onClick={(event) =>handleSaveClickml(index,item,event)}>
                        Save </button><button  className='buttonEdit' onClick={(event) =>_click(index,item,event)}>
                          {this.state.readOnly ? 'Edit' : 'Update'}
                        </button>
                        <button  className='buttonDelete' onClick={(event) => handleDeleteClickml(index,item,event)}>
                          Delete</button></td>

                    </tr>
                  )
                })
              }


            </tbody>
            {/* <div>
        <ul>
          {renderTodos}
        </ul>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div> */
      }

          </table>

          {/* <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/> */}

          <button   onClick={this.prevoius}>prevoius</button>
          <Pagination className="center" count={totalpage} variant="outlined" shape="rounded" onClick={event => this.handleInput(event)} />
          <button  onClick={this.next} >next</button>
        </div>

      </div>
    )
  }

}


const mapStateToProps = (state : any) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    setName() {
      console.log("setting name ,...", "$$$$");

      dispatch({ type: "SET_LASTNAME" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Marklist);
 //export{}