import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import SpeedDialTooltipOpen from "../../components/Dropdown/Dropdown"
import "./style.css"

export default function Homepage() {
        return <div>
                <Header />

               <SpeedDialTooltipOpen/>
                
        </div>
}