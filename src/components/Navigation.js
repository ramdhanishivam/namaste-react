import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Navigation Component


export const Navigation = () => {
    const [loginButton, setloginButton] = useState("Login");
    // Every time the state changes, the component re-renders.

    return (
        <div className="navigation-component">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <button 
                    onClick={ () => {
                    loginButton === "Login" ? setloginButton("Logout") : setloginButton("Login")}}>{loginButton}</button></li>
                <li>Register</li>
            </ul>
        </div>
    );
};
