import React from "react";
import ReactDOM from "react-dom/client";
import "./css/App.css";
import { Header } from "./Header";
import { Body } from "./Body";
import { Footer } from "./Footer";


export const styleHeader = {
    backgroundColor: "lightblue",
};


const App = () => {
    return (
        <div className="app-component">
            <Header />
            <Body />
            <Footer />
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);