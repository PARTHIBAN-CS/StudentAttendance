import './App.css';
// import Switch from "react-switch";
import Routes from './router'

// import store from './router/store';
// import { BrowserRouter } from 'react-router-dom' 
// import store from './components/app/store';
import {BrowserRouter as HashRouter, Switch ,Route } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const initialUserState = {
  username:"",
  firstname:"",
  lastname:"",
  rollno:"",
  gender:"",
  phoneno:"",
  image:"",
}

const userReducer = (state=initialUserState,action: { type: string; state: { firstname: any; lastname: any; rollno: any; gender: any; phoneno: any; image: any; username: any }; })=>{


  // if(action.type==="SET_NAME"){
  //   return {...state,firstName:"karan",lastName:"c",rollNo:"19",gender:"Male",phoneNo:"8012261027"}
  // }
      
  
  if(action.type==="SET_LASTNAME"){

    
    return{state,firstname:action.state.firstname,lastname:action.state.lastname,rollno:action.state.rollno,gender:action.state.gender,phoneno:action.state.phoneno,image:action.state.image,username:action.state.username}
  }
  //   return {state, user: action.state}
  // }

  return state
}

const reducers = combineReducers({
  user:userReducer
})

const store = createStore(reducers)


store.subscribe(()=>{
  console.log(store.getState(),"$$$$");
})

function App() {
  return (
    <div>
      <HashRouter>
      <div className="App">
      <Provider store={store}>
        <Switch>
          {
            Routes.map((item, index) => {
              return <Route key={'route_' + index}
              path={item.path}
              component={item.component}
              exact={item.exact || false}
              />
            })
          }
        </Switch>
        </Provider>
      </div>
      </HashRouter>
    </div>
  );
}
export default App;
