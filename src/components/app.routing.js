import { BrowserRouter, Route} from "react-router-dom";
import LoginComponent from "./Auth/login/Login.component";
import RegisterComponent from "./Auth/Register/Register.component";
import {Header} from './Common/Header/Header.component';

const Home = (props) => {
    console.log('Props in home --> ', props)
    return(
        <div>
            <p>Home page</p>
            <p>Welcome {props.location.name}</p>
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

function AppRouting(props){
    return (
        <BrowserRouter>
            <Header isLoggedIn ={true} />
            <Route exact path = "/" component = {LoginComponent}></Route>
            <Route exact path = "/register" component = {RegisterComponent}></Route>
            <Route exact path = "/about" component = {About}></Route>
            <Route exact path = "/home" component = {Home}></Route>
            <Route exact path = "/contact" component = {Contact}></Route>
            <Route exact path = "/setting/:name" component = {Setting}></Route>
        </BrowserRouter>
    )
} 
export default AppRouting;