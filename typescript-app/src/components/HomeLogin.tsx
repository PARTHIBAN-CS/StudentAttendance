// import axios from "axios";
// import * as React from "react";
// interface MyProps {}

// interface MyState {
//   username: string;
//   password: string;
// }
// var thiapp: any;

// class HomeLogin extends React.Component<MyProps, MyState> {
//   constructor(props: MyProps) {
//     super(props);
//     this.state = {
//       username: "",
//       password: "",
//     };
//   }
  

//   usernamehandler = (event: any) => {
//     this.setState({
//       username: event.target.value,
//     });
//   };
//   passwordhandler = (event: any) => {
//     this.setState({
//       password: event.target.value,
//     });
//   };

//   render() {
//       thiapp = this;
//       const handleSubmit = () =>{
//         const homelogin = {
//             username : this.state.username,
//             password : this.state.password,
//         }
//         axios.put("https://localhost:5001/api/HomeLogin/detail",homelogin)
//             .then(response => {
//                 if(response.data.length>0){
//                     this.props.history.push()
//                 }
//             })
//       }
//     return (
//       <div style={{ marginTop: "5%", marginLeft: "5%" }}>
//         <h1>Home Entrance</h1>
//         <h3>Login to visit the home</h3>

//         <div>
//           <div>
//             <div>User Name</div>
//             <input
//               type="text"
//               value={this.state.username}
//               onChange={this.usernamehandler}
//             />
//           </div>
//           <div>
//             <div>Password</div>
//             <input
//               type="text"
//               value={this.state.password}
//               onChange={this.passwordhandler}
//             />
//           </div>
//           <br />
//           <button
//             type="button"
//             className="buttonDelete"
//             onClick={() => handleSubmit()}
//           >
//             Login
//           </button>
//             <br />
//             <br />

//           <button
//             type="button"
//             className="buttonDelete"
//             onClick={() => handleSubmit()}
//           >
//             Create New User
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default HomeLogin;

export {}