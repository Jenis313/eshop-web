import React from 'react'; 
import {Header} from './Common/Header/Header.component';
import LoginComponent from './Auth/login/Login.component';
import RegisterComponent from './Auth/Register/Register.component';
import './global_styles.css';
function App(args){
console.log(args)
    return (
        <div className="main">
            <Header isLoggedIn="true" />
            <LoginComponent />
            {/* <RegisterComponent /> */}
        </div>
    )
}
export default App;