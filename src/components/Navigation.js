import React from "react";
import { useState } from "react";

// Navigation Component


export const Navigation = () => {
    const [loginButton, setloginButton] = useState("Login");
    // Every time the state changes, the component re-renders.



    return (
        <div className="navigation-component">
            {/* Unorderd List */}
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>
                    <button 
                    onClick={ () => {
                    loginButton === "Login" ? setloginButton("Logout") : setloginButton("Login")}}>{loginButton}</button></li>
                <li>Register</li>
            </ul>
        </div>
    );
};
