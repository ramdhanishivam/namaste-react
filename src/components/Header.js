import React from "react";
import { Navigation } from "./Navigation";
import { Logo } from "./Logo";

// Header Component
export const Header = () => {
    return (
        <div className="header-component">
            <Logo />
            <Navigation />
        </div>
    );
};
