// functional component
import React from "react";
import './Header.component.css';
import { NavLink, withRouter } from "react-router-dom";

function logout(history){
    localStorage.clear();
    history.push('/')
}

const HeaderComponent = (props) => {
    console.log('Props in header --> ', props)
    // incomeing arguments are props
    let content;
     if(props.isLoggedIn){
         content = <ul className = "nav_list">
                        <li className = "nav_item"><NavLink activeClassName = "selected"  to = '/dashboard'>Dashboard</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected"  to = '/home'>Home</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/about'>About</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/contact'>Contact</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/setting'>Setting</NavLink></li>
                        <button onClick = {() => logout(props.history)} className = "nav_item btn btn-success">Logout <i className="fas fa-sign-out-alt"></i></button>
                    </ul>
     }else{
         content = <ul className = "nav_list">
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/home'>Home</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/' exact>Login</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/register'>Register</NavLink></li>
                    </ul>
     }
    return (
        <div className = 'nav_bar'>
            {content}
        </div>
    )
}
export const Header = withRouter(HeaderComponent )