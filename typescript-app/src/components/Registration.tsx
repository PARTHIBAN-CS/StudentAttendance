
// // import { Link } from 'react-router-dom';
// // import { connect } from 'react-redux'
// import * as React from "react";
// import axios from 'axios';
// interface Mystate {
//   firstname: string;
//   lastname: string;
//   rollno: number;
//   gender: string;
//   phoneno: number;
//   image: unknown;
//   firstname1: string;
//   lastname1: string;
//   rollno1: number;
//   gender1: string;
//   phoneno1: number;
//   filter: string;
//   file: string | Blob;
//   base64URL?: unknown;
// }
// type Student = {
//   firstname: string;
//   lastname: string;
//   rollno: number;
//   gender: string;
//   phoneno: number;
//   image: unknown;
// }
// var rollnoindex: any;
// var arrayindex: any;
// var thiapp: any;
// var base: unknown;
// // var array:Student[];
// var array: Array<Student> = [];
// class Registration extends React.Component<{}, Mystate> {
//   constructor(props: {}) {

//     super(props);
//     this.state = {
//       firstname: "",
//       lastname: "",
//       rollno: 0,
//       gender: "",
//       phoneno: 0,
//       image: "",
//       file: "",
//       base64URL: "",
//       firstname1: "",
//       lastname1: "",
//       rollno1: 0,
//       gender1: "",
//       phoneno1: 0,
//       filter: "",

//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//   }

//   firstnamehandler = (event: any) => {
//     this.setState({
//       firstname: event.target.value
//     })
//   }
//   rollnohandler = (event: any) => {
//     this.setState({
//       rollno: event.target.value
//     })
//   }

//   genderhandler = (event: any) => {
//     this.setState({
//       gender: event.target.value
//     })
//   }
//   phonenumberhandler = (event: any) => {
//     this.setState({
//       phoneno: event.target.value
//     })
//   }
//   lasthandler = (event: any) => {
//     this.setState({
//       lastname: event.target.value
//     })
//   }
//   onImageChange = (event: any) => {
//     if (event.target.files && event.target.files[0]) {
//       this.setState({
//         image: URL.createObjectURL(event.target.files[0])
//       });
//       this.handleFileInputChange(event)


//     }
//   }
//   getBase64 = (file: any) => {
//     return new Promise(resolve => {
//       let fileInfo;
//       let baseURL = "";
//       // Make new FileReader
//       let reader = new FileReader();

//       // Convert the file to base64 text
//       reader.readAsDataURL(file);

//       // on reader load somthing...
//       reader.onload = () => {
//         // Make a fileInfo Object
//         console.log("Called", reader);
//         let baseURL = reader.result;
//         console.log(baseURL);
//         resolve(baseURL);
//       };
//       console.log(fileInfo);
//     });
//   };
//   handleFileInputChange = (event: any) => {
//     // console.log(e.target.files[0]);
//     let { file } = this.state;

//     file = event.target.files[0];
//     console.log(file)
//     this.getBase64(file)
//       .then(result => {
//         base = ""+result+"";
//         console.log(result);
//         // file["base64"] = result;
//         // console.log("File Is", file);
//         this.setState({
//           base64URL: result,
//           file
//         });
//       })
//       .catch(err => {
//         console.log(err);
//       });


//     this.setState({
//       file: event.target.files[0],
//       image: URL.createObjectURL(event.target.files[0])
//     });

//   }
//   handleSubmit = (event: any) => {

//     alert("registered Successfully");
//     var firstname = this.state.firstname;
//     var lastname = this.state.lastname;
//     var rollno = this.state.rollno;
//     var gender = this.state.gender;
//     var phoneno = this.state.phoneno;
//     const student = {
//       firstname: this.state.firstname,
//       lastname: this.state.lastname,
//       //  rollno :this.state.rollno,
//       gender: this.state.gender,
//       phoneno: this.state.phoneno,
//     }
//     const image = {
//       image: base
//     }
//     //  var image = base;
//     axios.post("https://localhost:5001/api/students/Create", { "student": [student], "image": image })
//       .then((response: any) => {
//         console.log();
//         if (response.data.length > 0 && response.data[0].rollno > 0) {
//           array.push(response.data[0]);
//           //  this.setState({ item: response.data });
//         }

//       });


//     array.push({ "firstname": firstname, "rollno": rollno, "lastname": lastname, "gender": gender, "phoneno": phoneno, "image": image });

//     console.log(array)
//     this.setState({
//       firstname: "",
//       lastname: "",
//       rollno: 0,
//       gender: "",
//       phoneno: 0,
//       image: "",
//     })

//     event.preventDefault()

//   }

//   firsthandler1 = (event: any) => {
//     this.setState({
//       firstname1: event.target.value,
//     });
//   };
//   lasthandler1 = (event: any) => {
//     this.setState({
//       lastname1: event.target.value,
//     });
//   };
//   rollnohandler1 = (event: any) => {
//     this.setState({
//       rollno1: event.target.value,
//     });
//   };

//   genderhandler1 = (event: any) => {
//     this.setState({
//       gender1: event.target.value,
//     });
//   };
//   phonenumberhandler1 = (event: any) => {
//     this.setState({
//       phoneno1: event.target.value,
//     });
//   };
//   searchTxt(event: any) {
//     this.setState({ filter: event.target.value });
//   }
// //   getBase64 = (file : any) => {
// //     return new Promise((resolve) => {
// //       let fileInfo;
// //       let baseURL = "";
// //       // Make new FileReader
// //       let reader = new FileReader();

// //       // Convert the file to base64 text
// //       reader.readAsDataURL(file);

// //       // on reader load somthing...
// //       reader.onload = () => {
// //         // Make a fileInfo Object
// //         console.log("Called", reader);
// //         let baseURL = reader.result;
// //         console.log(baseURL);
// //         resolve(baseURL);
// //       };
// //       console.log(fileInfo);
// //     });
// //   };
// //   handleFileInputChange = (event: any) => {
// //     console.log(event.target.files[0]);
// //     let { file } = this.state;

// //     file = event.target.files[0];

// //     this.getBase64(file)
// //       .then((result) => {
// //         base = result;
// //         //  console.log(result);
// //         //file["base64"] = result;
// //         console.log("File Is", file);
// //         this.setState({
// //           base64URL: result,
// //           file,
// //         });
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });

//     // this.setState({

// //     this.setState({
// //       file: event.target.files[0],
// //       image: URL.createObjectURL(event.target.files[0]),
// //     });
// //     // });
// //   };
//   handleApiClick = () => {
//     // alert("1")
//     // axios.get("https://192.168.131.170:5001/api/students/rollno")
//     axios.get("https://localhost:5001/api/students/rollno").then((response) => {
//       console.log(response);
//       array = response.data;
//       console.log(array);
//       this.setState({
//        // response: array,
//       });
//     });
//   };
//   componentWillMount() {
//     this.handleApiClick();
//   }

//   render() {
//     thiapp = this;

//     let filter = this.state.filter;
//     var dataSearch = array.filter((item) => {
//       return (
//         Object.keys(item).some((key) =>
//           item["firstname"].toLowerCase().includes(filter.toLowerCase())
//         ) ||
//         item["rollno"].toString().toLowerCase().includes(filter.toLowerCase())
//       );
//     });

   
//     const handleDeleteClick = (index : any) => {
//       // event.preventDefault();
//       const rollno = array[index].rollno;
//       //  axios.delete("https://192.168.131.170:5001/api/students/Delete/"+rollno)
//       axios
//         .delete("https://localhost:5001/api/students/Delete/" + rollno)
//         .then((res) => {
//           if (res.data == 1) {
//             array.splice(index, 1);

//            // this.setState({ index: array });
//           }
//         });

//       // console.log(rollno);
//       // }

//       // console.log(res.data));
//     };

//     //    const history = useHistory();

//     const handleEditClick = (item : any, index : any) => {
//       // status=1;
//       // item ={item}.rollno;
//       const image1 = {
//         rollno : this.state.rollno,
//         image :base.toString(),
//       }
//       rollnoindex = array[index].rollno;
//       // console.log(item);
//       // // arrayindex= array[index];
//       // console.log(index);
//       console.log(rollnoindex);
//       arrayindex = index;
//       this.setState({
//         firstname1: item.firstname,
//         lastname1: item.lastname,
//         rollno1: item.rollno,
//         gender1: item.gender,
//         phoneno1: item.phoneno,
//         image1: item.image,
//       });
//       //thiapp.props.setLastname(item);
//     };

//     // const handleSaveClick = () => {
//     //   alert("1");
//     //   const student = {
//     //     firstname: this.state.firstname1,
//     //     lastname: this.state.lastname1,
//     //     rollno: this.state.rollno1,
//     //     gender: this.state.gender1,
//     //     phoneno: this.state.phoneno1,
//     //   };
//     //   console.log(student);
//     //   var firstName = this.state.firstname1;
//     //   var lastName = this.state.lastname1;
//     //   var rollno = this.state.rollno1;
//     //   var gender = this.state.gender1;
//     //   var phoneno = this.state.phoneno1;

//     //   console.log(rollno);
//     //   const image = {
//     //     rollno: this.state.rollno1,
//     //     image: base,
//     //   };
//     //   console.log(image);
//     //   axios
//     //     .put("https://localhost:5001/api/students/Edit/" + rollno, {
//     //       student: [student],
//     //       image: image,
//     //     })
//     //     // axios.put("https://192.168.131.170:5001/api/students/Edit/"+rollno ,student)
//     //     .then((response) => {
//     //       this.setState({ item: response.data });
//     //     });

//     // //   array.splice(arrayindex, 1, {
//     // //     firstname: firstName,
//     // //     lastname: lastName,
//     // //     rollno: rollno,
//     // //     gender: gender,
//     // //     phoneno: phoneno,
//     // //   });
//     //   arrayindex = -1;
//     //   this.setState({
//     //     firstname1: "",
//     //     lastname1: "",
//     //     rollno1: 0,
//     //     gender1: "",
//     //     phoneno1: 0,
//     //   });
//     // };
  

//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}  >
//           <div >
//             <label >first name</label>
//             <input type='text' onChange={this.firstnamehandler} />
//           </div>
//           <div >

//             <label >Lastname</label>
//             <input type='text' onChange={this.lasthandler} />
//           </div>
//           <div >
//             <label >Roll no</label>
//             <input type='number' onChange={this.rollnohandler} />
//           </div>
//           <div>  <label>Gender :</label><select
//             onChange={this.genderhandler}
//             defaultValue="Select Gender" >
//             <option>Select Gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//           </select><br /><br /></div>
//           <input type="file" onChange={this.onImageChange} /><br /><br />

//           <div >
//             <label>Phone no</label>
//             <input type='number' onChange={this.phonenumberhandler} />
//           </div>
//           <input type="submit" value="Submit" /> < br /><br />
//         </form>



//         <div>
//         {/* <button onClick={() => click()}>form</button>
//         <button onClick={() => click1()}>Marklist</button> */}
//         <label>search :</label>
//         <input type="text" value={filter} onChange={this.searchTxt} />{" "}
//         <div>
//           {/* <button type="button"  onClick={() => handleApiClick()} >
//                   API
//                 </button> */}
//         </div>
//         {dataSearch.length > 0 ? (
//           <div> search for {filter} </div>
//         ) : (
//           <div> Not found {filter} </div>
//         )}
//         <div>
//             <table>
//               <thead>
//                 <tr>
//                   <th>FirstName</th>
//                   <th>LastName</th>
//                   <th>rollno</th>
//                   <th>Gender</th>
//                   <th>phoneno</th>
//                   <th>photo</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>
//                     <input
//                       type="text"
//                       value={this.state.firstname1}
//                       onChange={this.firsthandler1}
//                     />{" "}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={this.state.lastname1}
//                       onChange={this.lasthandler1}
//                     />{" "}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={this.state.rollno1}
//                       onChange={this.rollnohandler1}
//                     />{" "}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={this.state.gender1}
//                       onChange={this.genderhandler1}
//                     />{" "}
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       value={this.state.phoneno1}
//                       onChange={this.phonenumberhandler1}
//                     />{" "}
//                   </td>
//                   <td>
//                     {" "}
//                     <input
//                       type="file"
//                       onChange={this.handleFileInputChange}
//                     />{" "}
//                     <img src={this.state.image} />
//                   </td>

//                   <td>
//                     {" "}
//                     <button
//                       type="button"
//                       className="buttonDelete"
//                       // onClick={() => handleSaveClick()}
//                     >
//                       Save
//                     </button>
//                   </td>
//                 </tr>
//                 {dataSearch.length > 0
//                   ? dataSearch.map((item, index) => {
//                       return (
//                         <tr key={index}>
//                           <td>{item.firstname} </td>
//                           <td>{item.lastname} </td>
//                           <td>{item.rollno}</td>
//                           <td>{item.gender}</td>
//                           <td>{item.phoneno}</td>
//                           <td>
//                             <img src={item.image} />
//                           </td>
//                           <td>
//                             <button
//                               type="button"
//                               className="buttonEdit"
//                               onClick={() => handleEditClick(item, index)}
//                             >
//                               Edit
//                             </button>

//                             <button
//                               type="button"
//                               className="buttonDelete"
//                               onClick={() => handleDeleteClick(index)}
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })
//                   : array.map((item : any, index : any) => {
//                       return (
//                         <tr key={index}>
//                           <td>{item.firstname}</td>
//                           <td>{item.lastname}</td>
//                           <td>{item.rollno}</td>
//                           <td>{item.gender}</td>
//                           <td>{item.phoneno}</td>
//                           <td>
//                             <img src={item.image} />
//                           </td>
//                           <td>
//                             {" "}
//                             <button
//                               type="button"
//                               className="buttonEdit"
//                               onClick={() => handleEditClick(item, index)}
//                             >
//                               Edit
//                             </button>
//                             <button
//                               type="button"
//                               className="buttonDelete"
//                               onClick={() => handleDeleteClick(index)}
//                             >
//                               Delete
//                             </button>
//                           </td>
//                         </tr>
//                       );
//                     })}
//               </tbody>
//             </table>
          
//           <br />
//           <br />
//           <br />
          

//         </div>
//       </div>

//       </div>
//     );
//   }
// }

// export default Registration;
export {}