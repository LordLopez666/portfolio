import React from "react";
import myImg from "../images/portfolio-photo.jpg"


export default function About() {
    return (
        <div className="about--section" id="about">
            <div className="about--left">
                <h2 className="white--text about--titles">About me</h2>
                <p className="white--text">Hi! My name is Erick and I strive to make simple, 
            yet profesional websites. My interest in web developement 
                started in 2015 while attending Utah valley University. 
                </p>
                
                <p className="white--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum. </p>
                <p className="white--text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur.</p>
                
            </div>
            <div className="fun--facts--box">
                <div className="photo--container">
                    <img src={myImg}/>
                </div>
                <h2 className="white--text">Fun facts</h2>
                <div className="fun--facts">
                <ul className="white--text">
                    <li>I like to play chess.</li>
                    <li>I can do a kickflip.</li>
                    <li>Sometimes I mess </li>
                    <li>Sometimes I dream </li>
                </ul>
                </div>
            </div>
        </div>
    )
}
