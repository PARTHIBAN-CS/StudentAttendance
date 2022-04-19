import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//import '../../src/App.css';
import "./style.css";

interface Mystate {
  firstname: string;
  lastname: string;
  rollno: number;
  // mail: string;
  // password : string;
  gender: string;
  phoneno: number;
  image: string;
  item: unknown;
  file: string | Blob;
  base64URL?: unknown;
  history: any;
}
interface Myprops {
  history: unknown;
  image: string;
  rollno: number;
  firstname: string;
  lastname: string;
  phoneno: string;
  gender: string;
  file: string | Blob;
  base64URL?: unknown;
}

type Student = {
  firstname: string;
  lastname: string;
  rollno: number;
  gender: string;
  phoneno: number;
  image: string;
};
var base: unknown;
var array: Array<Student> = [];
var array1: Array<Student> = [];

class RegistrationForm extends React.Component<Myprops, Mystate> {
  constructor(Myprops: Myprops | Readonly<Myprops>) {
    super(Myprops);
    this.state = {
      firstname: "",
      lastname: "",
      rollno: 0,
      // mail: "",
      // password:"",
      gender: "",
      phoneno: 0,
      image: "",
      file: "",
      base64URL: "",
      item: "",
      history: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  firsthandler = (event: any) => {
    this.setState({
      firstname: event.target.value,
    });
  };
  lasthandler = (event: any) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  rollnohandler = (event: any) => {
    this.setState({
      rollno: event.target.value,
    });
  };

  genderhandler = (event: any) => {
    this.setState({
      gender: event.target.value,
    });
  };
  phonenumberhandler = (event: any) => {
    this.setState({
      phoneno: event.target.value,
    });
  };
  // mailhandler = (event : any) => {
  //   this.setState({
  //     mail: event.target.value,
  //   });
  // };
  // passwordhandler = (event : any) => {
  //   this.setState({
  //     password: event.target.value,
  //   });
  // };

  onImageChange = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
      this.handleFileInputChange(event);
    }
  };
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
    // console.log(e.target.files[0]);
    let { file } = this.state;

    file = event.target.files[0];

    this.getBase64(file)
      .then((result) => {
        base = result;
        //  console.log(result);
        // file["base64"] = result;
        // console.log("File Is", file);
        this.setState({
          base64URL: result,
          file,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      file: event.target.files[0],
      image: URL.createObjectURL(event.target.files[0]),
    });
  };

  //   onDetail = () => {
  //     this.props.history.push("/Details");
  //   };

  handleSubmit = (event: any) => {
    if (this.props.rollno > 0) {
      const student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        rollno: this.state.rollno,
        gender: this.state.gender,
        phoneno: this.state.phoneno,
        // password : this.state.password,
        // mail : this.state.mail,
      };
      console.log(student);

      var rollno = this.state.rollno;

      console.log(rollno);
      const image = {
        rollno: this.state.rollno,
        image: base,
      };
      console.log(image);
      axios
        .put("https://localhost:5001/api/students/Edit/" + rollno, {
          student: [student],
          image: image,
        })
        // axios.put("https://192.168.131.170:5001/api/students/Edit/"+rollno ,student)
        .then((res) => {
          this.setState({
            firstname: "",
            lastname: "",
            rollno: 0,
            gender: "",
            phoneno: 0,
            image: "",
          });
        });
    } else {
      alert("registered Successfully");
      const student = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        // rollno : this.state.rollno,
        gender: this.state.gender,
        phoneno: this.state.phoneno,
      };
      const image = {
        image: base,
      };
      console.log(image);

      //  if (status === 0){
      // alert("1")
      //  axios.post("https://192.168.131.170:5001/api/students/Create", student)
      axios
        .post("https://localhost:5001/api/students/Create", {
          student: [student],
          image: image,
        })
        .then((response) => {
          console.log();
          if (response.data.length > 0 && response.data[0].rollno > 0) {
            array.push(response.data[0]);
            this.setState({
              firstname: "",
              lastname: "",
              rollno: 0,
              gender: "",
              phoneno: 0,
              image: "",
            });
          }
        });
    }
    event.preventDefault();
  };
  componentWillMount() {
    alert("1");
    if (this.props.rollno > 0) {
      const rollno = this.props.rollno;
      axios
        .get("https://localhost:5001/api/students/" + rollno)
        .then((response) => {
          array = response.data;
          console.log(array);

          this.setState({
            firstname: response.data.firstname,
            lastname: response.data.lastname,
            rollno: response.data.rollno,
            gender: response.data.gender,
            phoneno: response.data.phoneno,
          });
        });
      //const rollno1=this.props.rollNo
      console.log(rollno);

      axios
        .get("https://localhost:5001/api/students/image/" + rollno)
        .then((response) => {
          // console.log(response);
          array1 = response.data;
          // console.log(array1);
          this.setState({
            image: response.data[0].image,
          });
        });
    }
  }
  render() {
    return (
      <div>
        <div>
          <form style={{ marginLeft: "5%" }}>
            <div>
              <label>first name</label>
              <input
                type="text"
                id="firstname"
                value={this.state.firstname}
                onChange={this.firsthandler}
              />
            </div>
            <br />
            <div>
              <label>Lastname</label>
              <input
                type="text"
                id="lastname"
                value={this.state.lastname}
                onChange={this.lasthandler}
              />
            </div>
            <br />
            <div>
              <label>Roll no</label>
              <input
                type="number"
                value={this.state.rollno}
                onChange={this.rollnohandler}
              />
            </div>
            <br />
            {/* <div >
    
                <label >Email</label>
                <input type='text'value={this.state.mail} onChange={this.mailhandler} />
              </div><br />
              <div >
                <label >Password</label>
                <input type='password' value={this.state.password} onChange={this.passwordhandler} />
                
              </div> */}
            <br />
            <div>
              {" "}
              <label>Gender :</label>
              <select
                id="gender"
                onChange={this.genderhandler}
                defaultValue="Select Gender"
              >
                <option>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <br />
              <br />
            </div>
            <br />
            <input id="file" type="file" onChange={this.onImageChange} />
            <br />
            <br />
            <div>
              <label>Phone no</label>
              <input
                type="number"
                id="phoneno"
                value={this.state.phoneno}
                onChange={this.phonenumberhandler}
              />
            </div>
            <br />
            <input
              type="submit"
              id="submit"
              value="Submit"
              onClick={this.handleSubmit}
            />{" "}
            <br />
            <br />
          </form>
          {/* <button onClick={() => this.onDetail()}>Registration Form</button> */}
          <Link to="/Details">
            {" "}
            <button>View Table</button>
          </Link>
          {/* <button onClick={(e) => this.props.setName(e)}>set Name</button> */}
          username:{this.props.firstname}
          <br />
          lastname:{this.props.lastname}
          <br />
          rollno:{this.props.rollno}
          <br />
          gender:{this.props.gender}
          <br />
          phoneno:{this.props.phoneno}
          <br />
          image:{this.props.image}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    firstname: state.user.firstname,
    lastname: state.user.lastname,
    rollno: state.user.rollno,
    gender: state.user.gender,
    phoneno: state.user.phoneno,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setName() {
      console.log("setting name ,...", "$$$$");

      dispatch({ type: "SET_LASTNAME" });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
