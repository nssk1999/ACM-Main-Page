import React from "react";
import Logo from "../../assets/mvsr-acm.png";
import "./RightSection.css";


const RightSection = () => {
    return (
        <div className="rightSection">
            <img src={Logo} className="logo" alt="MVSR ACM Logo"/>
            <h2>MVSR ACM Student Chapter</h2>
            <hr/>
            <q>We see a world where computing helps solve tomorrow's problems</q>
        </div>
    );
}

export default RightSection
