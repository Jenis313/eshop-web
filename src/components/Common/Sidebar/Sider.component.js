import React from "react";
import { NavLink } from "react-router-dom";
import './Sider.component.css'
function Sider(props){
    return(
        <div className = "sidebar">
            <NavLink to = "/dashboard">Dashboard</NavLink>
            <NavLink to = "/add_product">Add Product</NavLink>
            <NavLink to = "/view_product">View product</NavLink>
            <NavLink to = "/search">Search Product</NavLink>
            <hr />
            <NavLink to = "/message">Messages</NavLink>
            <NavLink to = "/notifications">Notifications</NavLink>
        </div>
    )
}
export default Sider