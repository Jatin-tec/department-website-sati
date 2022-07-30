import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown"
import "./style.css"


export default function Homepage() {
        return <div>
                <Header />
                <nav>
                        <Link to="/Attendence">
                                <h3>Attendence</h3>
                        </Link>
                        <Link to="/Evalute">
                                <h3> Evalute</h3>
                        </Link>
                        <Link to="/Signup">
                                <h3> Signup</h3>
                        </Link>
                        <Link to="/login">
                                <h3>  Login</h3>
                        </Link>
                        <Link to="/Viva">
                                <h3>  Viva</h3>
                        </Link>
                        
                </nav>
                
               <SpeedDialTooltipOpen/>
                
        </div>
}