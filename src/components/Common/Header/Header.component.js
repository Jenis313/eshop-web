// functional component
import React from "react";
import './Header.component.css';
export const Header = (props) => {
    // incomeing arguments are props
    let content;
     if(props.isLoggedIn){
         content = <ul className = "nav_list">
                        <li className = "nav_item">Home</li>
                        <li className = "nav_item">about</li>
                        <li className = "nav_item">products</li>
                        <li className = "nav_item">services</li>
                        <li className = "nav_item">Logout</li>
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