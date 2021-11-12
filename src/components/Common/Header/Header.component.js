// functional component
import React from "react";
import './Header.component.css';
import { NavLink } from "react-router-dom";
export const Header = (props) => {
    console.log('Props in header --> ', props)
    // incomeing arguments are props
    let content;
     if(props.isLoggedIn){
         content = <ul className = "nav_list">
                        <li className = "nav_item"><NavLink activeClassName = "selected"  to = '/home'>Home</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/about'>About</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/contact'>Contact</NavLink></li>
                        <li className = "nav_item"><NavLink activeClassName = "selected" to = '/setting'>Setting</NavLink></li>
                        <button className = "nav_item btn btn-success">Logout</button>
                    </ul>
     }else{
         content = <ul className = "nav_list">
                        <li className = "nav_item">Home</li>
                        <li className = "nav_item">Register</li>
                        <li className = "nav_item">Login</li>
                    </ul>
     }
    return (
        <div className = 'nav_bar'>
            {content}
        </div>
    )
}