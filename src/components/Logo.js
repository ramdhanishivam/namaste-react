import React from "react";

// Logo Component


export const Logo = () => {
    return (
        // apply css to apppear rounded
        <div className="logo-component">
            <img src="https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="logo" style={{ borderRadius: "50%" }} />
        </div>
    );
};
