import React from "react";
import { Search } from "./Search";
import { RestaurantContainer } from "./RestaurantContainer";

// Body Component
export const Body = () => {
    return (
        <div className="body-component">
            <Search />
            <RestaurantContainer />
        </div>
    );
};
