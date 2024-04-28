import React from "react";
import { AboutUs } from "./AboutUs";
import { ContactUs } from "./ContactUs";
import { SocialMediaLinks } from "./SocialMediaLinks";

// Footer Component
export const Footer = () => {
    return (
        <div className="footer-component">
            <SocialMediaLinks />
            <ContactUs />
            <AboutUs />
        </div>
    );
};
