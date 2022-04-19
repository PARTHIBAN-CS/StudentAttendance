import Demo from "../components/Demo"
import Details from "../components/Details"
import Markdetail from "../components/Markdetail"
import Marklist from '../components/Marklist'
import RegistrationForm from "../components/RegistrationForm"
import ShowResults from "../components/ShowResults"
import LoginForm from "../components/LoginForm"
import NewUser from "../components/NewUser"
//import HomeLogin from "../components/HomeLogin"
import Home from "../components/Home"



export default [
    {
        path: '/',
        component: LoginForm,
        exact: true
    },
    {
        path: '/RegistrationForm',
        component: RegistrationForm,
    },
    {
        path: '/Details',
        component: Details
    },
    {
        path: '/Marklist',
        component: Marklist
    },
    {
        path: '/Markdetail',
        component : Markdetail
    },
    {
        path: '/ShowResults',
        component : ShowResults
    },
    {
        path: '/Demo',
        component : Demo
    },
    {
        path : '/NewUser',
        component : NewUser
    },
    // {
    //     path : '/HomeLogin',
    //     component : HomeLogin
    // },
    {
        path : '/Home',
        component : Home
    }
    
]