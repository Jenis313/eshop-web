import { BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import LoginComponent from "./Auth/login/Login.component";
import RegisterComponent from "./Auth/Register/Register.component";
import {Header} from './Common/Header/Header.component';
import PageNotFound from "./Common/NotFound/PageNotFound.component";
import Sider from "./Common/Sidebar/Sider.component";
import { Dahsboard } from "./Users/Dashboard.component";

const Home = (props) => {
    console.log('Props in home --> ', props)
    function handleBtn(){
        console.log(props)
        props.history.push('/')
    }
    return(
        <div className = 'container'>
            <p>Home page</p>
            <p>Welcome {props.location.name}</p>
            <button onClick = {handleBtn}>LoginPage</button>
        </div>
    )
}
const About = (props) => {
    return(
        <p>About page</p>
    )
}
const Contact = (props) => {
    return(
        <p>Contact page</p>
    )
}
const Setting = (props) => {
    console.log('props in setting -> ', props)
    return(
        <p>Settings page</p>
    )
}

// Protected route--> It is a concept in routing which tells which route is accessiable by whom.

const ProtectedRoute = ({component : Component, ...rest}) => {
    return (
        <Route {...rest} render = {(routeProps) => {
            return localStorage.getItem('token') 
                    ? <Component {...routeProps}></Component>
                    : <Redirect to = '/'></Redirect>
        }}></Route>
    )
}

// Now instead of putting all the components inside app.component.js we are putting inside BrowserRouter so that they can be rendered based on the path

// Header is also inside BroserRouter because it has some elements inside like Link and NavLink so to use those elements which we are getting from React-router-dom we need to put Header inside BrowserRouter even though there is no route for Header component itself.


function AppRouting(props){
    return (
        <BrowserRouter>
            <Header isLoggedIn ={localStorage.getItem('token')}></Header>
            <Sider></Sider>
            <Switch>
                <Route exact path = "/" component = {LoginComponent}></Route>
                <Route exact path = "/register" component = {RegisterComponent}></Route>
                <Route exact path = "/about" component = {About}></Route>
                <Route exact path = "/home" component = {Home}></Route>
                <Route exact path = "/contact" component = {Contact}></Route>
                <ProtectedRoute exact path = "/dashboard" component = {Dahsboard}></ProtectedRoute>
                <Route component = {PageNotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
} 
export default AppRouting;