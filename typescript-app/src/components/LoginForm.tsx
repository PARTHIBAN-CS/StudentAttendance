import axios from "axios";
import * as React from "react";
import { connect } from "react-redux";

interface Myprops {
  history: any;
}
interface Mystate {
  mail: string;
  password: string;
 
}
var thiapp: any;

class LoginForm extends React.Component<Myprops, Mystate> {
  constructor(Myprops: Myprops | Readonly<Myprops>) {
    super(Myprops);
    this.state = {
      mail: "",
      password: "",
    };
  }
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

  newUser = ()=>{
    this.props.history.push("/NewUser");
  }
  

  render() {
    thiapp = this;
    const handleSubmit =() => {
      //event.preventDefault();
      console.log("The form was submitted with the following data:");
      console.log(this.state.mail);
      const login = {
          mail: this.state.mail,
          password: this.state.password
      }
      console.log(login)
      axios.put("https://localhost:5001/api/Login/detail/", login)
          .then(response => {
              console.log(response); 
              if(response.data.length>0){
                alert("1")
                this.props.history.push('/Marklist');
                thiapp.props.setLastname(response);

            }
            else {
                alert("please enter the correct Email and password")
            }
  
              this.setState({
                  mail :"",
                  password :""
               });
        })
  
    }

    return (
      <div>
        <div>
          <button type="button" id="registerbutton" onClick={this.newUser}>Create a new User</button>
        </div>
        <div>
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
        <button
          type="button"
          id="login"
          className="buttonDelete"
          onClick={()=>handleSubmit()}
        >
          Login
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state : any) => {
  return {
    username: state.user.username,
  };
};

const mapDispatchToProps = (dispatch : any) => {
  return {
    setLastname(response : any) {
      const user = {
        username: response.data[0].username,
      };
      console.log(user);

      dispatch({ type: "SET_LASTNAME", state: user });

      thiapp.props.history.push("/Marklist");
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
