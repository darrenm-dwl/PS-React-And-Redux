import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    const  activeStyle = {color: "#F15B2A"};
    
    return(
        <nav>
            <NavLink to="/" activeStyle={activeStyle} exact>Hime</NavLink>{" | "}
            <NavLink to="/about" activeStyle={activeStyle} >About</NavLink>{" | "}
            <NavLink to="/courses" activeStyle={activeStyle} >Cources</NavLink>
        </nav>
    )
}

export default Header;