import * as React from "react";
import axios from "axios";

import { connect } from "react-redux";
// import  { useState } from 'react'
interface Mystate {
  firstname: string;
  lastname: string;
  rollno: number;
  gender: string;
  phoneno: number;
  image: string;
  item: unknown;
  index: unknown;
  file: string | Blob;
  base64URL?: unknown;
  firstname1: string;
  lastname1: string;
  rollno1: number;
  gender1: string;
  phoneno1: number;
  filter: string;
  filter1: string;
  readOnly: boolean;
  response: any;
  image1: string;
}
interface Myprops {
  history: any;
  image: string;
  username : string;

}
type Student = {
  firstname: string;
  lastname: string;
  rollno: number;
  gender: string;
  phoneno: number;
  image: string;
};
var base: string;
var array: Array<Student> = [];
//var array = [];
var status = 0;
var arrayindex = -1;
var thiapp: any;
var rollnoindex: any;

var state;
class Details extends React.Component<Myprops, Mystate> {
  constructor(Myprops: Myprops) {
    super(Myprops);

    this.state = {
      firstname: "",
      lastname: "",
      rollno: 0,
      gender: "",
      phoneno: 0,
      filter: "",
      //marklist: [],
      readOnly: false,
      filter1: "",
      firstname1: "",
      lastname1: "",
      rollno1: 0,
      gender1: "",
      phoneno1: 0,
      image: "",
      file: "",
      base64URL: "",
      item: "",
      index: "",
      response: "",
      image1: ""
    };
    //console.log(this.state.readOnly);
    this.searchTxt = this.searchTxt.bind(this);
    //  this.setLastname = this.setLastname.bind(this)
  }
  firsthandler = (event: any) => {
    this.setState({
      firstname1: event.target.value,
    });
  };
  lasthandler = (event: any) => {
    this.setState({
      lastname1: event.target.value,
    });
  };
  rollnohandler = (event: any) => {
    this.setState({
      rollno1: event.target.value,
    });
  };

  genderhandler = (event: any) => {
    this.setState({
      gender1: event.target.value,
    });
  };
  phonenumberhandler = (event: any) => {
    this.setState({
      phoneno1: event.target.value,
    });
  };
  searchTxt(event: any) {
    this.setState({ filter: event.target.value });
  }
  getBase64 = (file: any) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        console.log("Called", reader);
        let baseURL = reader.result;
        console.log(baseURL);
        resolve(baseURL);
      };
      console.log(fileInfo);
    });
  };
  handleFileInputChange = (event: any) => {
    console.log(event.target.files[0]);
    let { file } = this.state;

    file = event.target.files[0];

    this.getBase64(file)
      .then((result) => {
        base = "" + result + "";
        //  console.log(result);
        //file["base64"] = result;
        console.log("File Is", file);
        this.setState({
          base64URL: result,
          file,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // this.setState({

    this.setState({
      file: event.target.files[0],
      image: URL.createObjectURL(event.target.files[0]),
    });
    // });
  };
  handleApiClick = () => {
    // alert("1")
    // axios.get("https://192.168.131.170:5001/api/students/rollno")
    axios.get("https://localhost:5001/api/students/rollno").then((response) => {
      console.log(response);
      array = response.data;
      console.log(array);
      this.setState({
        response: array,
      });
    });
  };
  componentWillMount() {
    this.handleApiClick();
  }

  render() {
    thiapp = this;

    let filter = this.state.filter;
    var dataSearch = array.filter((item) => {
      return (
        Object.keys(item).some((key) =>
          item["firstname"].toLowerCase().includes(filter.toLowerCase())
        ) ||
        item["rollno"].toString().toLowerCase().includes(filter.toLowerCase())
      );
    });

    const handleDeleteClick = (index: any) => {
      // event.preventDefault();
      const rollno = array[index].rollno;
      //  axios.delete("https://192.168.131.170:5001/api/students/Delete/"+rollno)
      axios
        .delete("https://localhost:5001/api/students/Delete/" + rollno)
        .then((res) => {
          if (res.data == 1) {
            array.splice(index, 1);

            this.setState({ index: array });
          }
        });

      // console.log(rollno);
      // }

      // console.log(res.data));
    };

    //    const history = useHistory();

    const handleEditClick = (item: any, index: any) => {
      // status=1;
      // item ={item}.rollno;
      rollnoindex = array[index].rollno;
      // console.log(item);
      // // arrayindex= array[index];
      // console.log(index);
      console.log(rollnoindex);
      arrayindex = index;
      this.setState({
        firstname1: item.firstname,
        lastname1: item.lastname,
        rollno1: item.rollno,
        gender1: item.gender,
        phoneno1: item.phoneno,
        image1: item.image,
      });
      thiapp.props.setLastname(item);
    };

    const handleSaveClick = () => {
      alert("1");
      const student = {
        firstname: this.state.firstname1,
        lastname: this.state.lastname1,
        rollno: this.state.rollno1,
        gender: this.state.gender1,
        phoneno: this.state.phoneno1,
      };
      console.log(student);
      var firstname = this.state.firstname1;
      var lastname = this.state.lastname1;
      var rollno = this.state.rollno1;
      var gender = this.state.gender1;
      var phoneno = this.state.phoneno1;
      var image = base;
      console.log(rollno);
      const image1 = {
        rollno: this.state.rollno1,
        image1: base,
      };
      console.log(image1);
      axios
        .put("https://localhost:5001/api/students/Edit/" + rollno, {
          "student": [student],
          "image": image1,
        })
        // axios.put("https://192.168.131.170:5001/api/students/Edit/"+rollno ,student)
        .then((res) => {
          this.setState({ item: res.data });
        });

      array.splice(arrayindex, 1, {
        "firstname": firstname,
        "lastname": lastname,
        "rollno": rollno,
        "gender": gender,
        "phoneno": phoneno,
         "image": image,
      });
      arrayindex = -1;
      this.setState({
        firstname1: "",
        lastname1: "",
        rollno1: 0,
        gender1: "",
        phoneno1: 0,
        image1: ""
      });
    };
    const click = () => {
      this.props.history.push("/RegistrationForm");
    };
    const click1 = () => {
      this.props.history.push("/Marklist");
    };

    return (
      <div>
        <div>
        User:{this.props.username}

        </div><br />
        <button  onClick={() => click()}>form</button>
        <button onClick={() => click1()}>Marklist</button>
        <label>search :</label>
        <input type="text" id="search" value={filter} onChange={this.searchTxt} />{" "}
        <div>
          {/* <button type="button"  onClick={() => handleApiClick()} >
                  API
                </button> */}
        </div>
        {dataSearch.length > 0 ? (
          <div> search for {filter} </div>
        ) : (
          <div> Not found {filter} </div>
        )}
        <div>
          <table>
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>rollno</th>
                <th>Gender</th>
                <th>phoneno</th>
                <th>photo</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    value={this.state.firstname1}
                    onChange={this.firsthandler}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.lastname1}
                    onChange={this.lasthandler}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.rollno1}
                    onChange={this.rollnohandler}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.gender1}
                    onChange={this.genderhandler}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.phoneno1}
                    onChange={this.phonenumberhandler}
                  />
                </td>
                <td>
                  
                  <input
                    type="file"
                    onChange={this.handleFileInputChange}
                  />
                  <img style={{height:'100px',width:'100px'}} src={this.state.image} />
                </td>

                <td>
                  {" "}
                  <button
                    type="button"
                    className="buttonDelete"
                    //onClick={() => handleSaveClick()}
                  >
                    Save
                  </button>
                </td>
              </tr>
              {dataSearch.length > 0
                ? dataSearch.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.firstname} </td>
                        <td>{item.lastname} </td>
                        <td>{item.rollno}</td>
                        <td>{item.gender}</td>
                        <td>{item.phoneno}</td>
                        <td>
                          <img src={item.image} />{" "}
                        </td>
                        <td>
                          <button
                            type="button"
                            className="buttonEdit"
                            onClick={() => handleEditClick(item, index)}
                          >
                            Edit
                          </button>

                          <button
                            type="button"
                            className="buttonDelete"
                            onClick={() => handleDeleteClick(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : array.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.rollno}</td>
                        <td>{item.gender}</td>
                        <td>{item.phoneno}</td>
                        <td style={{height:'100px',width:'100px'}}>
                          <img style={{height:'100px',width:'100px'}} src={item.image} />
                        </td>
                        <td>
                          {" "}
                          <button
                            type="button"
                            id="edit"
                            className="buttonEdit"
                            onClick={() => handleEditClick(item, index)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            id="delete"
                            className="buttonDelete"
                            onClick={() => handleDeleteClick(index)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>

          <br />
          <br />
          <br />
          {/* <button onClick={()=>this.props.setLastname()}>Set LastName</button> */}

          {/* first name:{this.props.firstName}<br/>
last name:{this.props.lastName}<br/>
rollNo:{this.props.rollNo}<br/>
gender:{this.props.gender}<br/>
phoneNo:{this.props.phoneNo}<br/>

<br /> */}

          {/* last name: {this.props.lastName} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state : any) => {
  return {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    rollno: state.user.rollno,
    gender: state.user.gender,
    phoneno: state.user.phoneno,
    image: state.user.image,
    username : state.user.username,
  };
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    setLastname(item :any) {
      const user = {
        firstname: item.firstname,
        lastname: item.lastname,
        rollno: item.rollno,
        gender: item.gender,
        phoneno: item.phoneno,
        image: item.image,
        username : item.username,
      };
      console.log(user);

      dispatch({ type: "SET_LASTNAME", state: user });

      thiapp.props.history.push("/RegistrationForm");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);

//export {}
