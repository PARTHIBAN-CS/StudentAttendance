import axios from "axios";
import * as React from "react";


interface Myprops {
  history: any;
}
interface Mystate {
  username: string;
  mail: string;
  password: string;
  //confirmpassword: string;
}

var thiapp: any;

class NewUser extends React.Component<Myprops, Mystate> {
  constructor(Myprops: Myprops | Readonly<Myprops>) {
    super(Myprops);
    this.state = {
      username: "",
      mail: "",
      password: "",
     
    };
  }

  usernamehandler = (event: any) => {
    this.setState({
      username: event.target.value,
    });
  };
  mailhandler = (event: any) => {
    this.setState({
      mail: event.target.value,
    });
  };
  passwordhandler = (event: any) => {
    this.setState({
      password: event.target.value,
    });
  };
//   confirmpasswordhandler = (event: any) => {
//     this.setState({
//       confirmpassword: event.target.value,
//     });
//   };

  render() {
    thiapp = this;
    const handleSubmit =() => {
      //event.preventDefault();
      const login = {
          username : this.state.username,
          mail: this.state.mail,
          password: this.state.password,
      }
      console.log(login)
      axios.post("https://localhost:5001/api/Login/Create", login)
          .then(response => {
              console.log(response); 
              if(response.data>0){
                alert("Email is already exist")
            }
            else {
                alert("successfully register")
                this.props.history.push('/');              

            }
            this.setState({
                username : "",
                mail :"",
                password :"",
             });
             
        })
  
    }
    return (
      <div>

        <div>
            <h1>Create New User</h1>
            <div>
          <label>User Name</label>
          <input
            type="text"
            id="username"
            value={this.state.username}
            onChange={this.usernamehandler}
          />
        </div>
          <label>Mail</label>
          <input
            type="text"
            id="mail"
            value={this.state.mail}
            onChange={this.mailhandler}
          />
        </div>
        <br />
        <div>
          <label>Password</label>
          <input
            type="Password"
            id="password"
            value={this.state.password}
            onChange={this.passwordhandler}
          />
        </div>
        <br />
        
        <br />
        <button
          type="button"
          id="register"
          className="buttonDelete"
          onClick={()=>handleSubmit()}
        >
          Register
        </button>
      </div>
    );
  }
}



export default NewUser;
