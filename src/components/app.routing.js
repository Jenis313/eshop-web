import { BrowserRouter, Route, Switch} from "react-router-dom";
import LoginComponent from "./Auth/login/Login.component";
import RegisterComponent from "./Auth/Register/Register.component";
import {Header} from './Common/Header/Header.component';
import PageNotFound from "./Common/NotFound/PageNotFound.component";

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
// Now instead of putting all the components inside app.component.js we are putting inside BrowserRouter so that they can be rendered based on the path

// Header is also inside BroserRouter because it has some elements inside like Link and NavLink so to use those elements which we are getting from React-router-dom we need to put Header inside BrowserRouter even though there is no route for Header component itself.


function AppRouting(props){
    return (
        <BrowserRouter>
            <Header isLoggedIn ={true} />
            <Switch>
                <Route exact path = "/" component = {LoginComponent}></Route>
                <Route exact path = "/register" component = {RegisterComponent}></Route>
                <Route exact path = "/about" component = {About}></Route>
                <Route exact path = "/home" component = {Home}></Route>
                <Route exact path = "/contact" component = {Contact}></Route>
                <Route exact path = "/setting/:name" component = {Setting}></Route>
                <Route component = {PageNotFound}></Route>
            </Switch>
        </BrowserRouter>
    )
} 
export default AppRouting;