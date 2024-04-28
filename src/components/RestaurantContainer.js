import React from "react";
import { restaurantDataFromSwiggy } from "./utils/restaurantDataFromSwiggy";
import { RestaurantCard } from "./RestaurantCard";
import { useState } from "react";

// RestaurantContainer component
export const RestaurantContainer = () => {
    const [restaurantData, setRestaurantData] = useState(restaurantDataFromSwiggy);
    return (
        <>
        <button onClick={() => {
            console.log("Top Rated Restaurants clicked");
            const filteredData = restaurantData.filter((restaurant) => restaurant.info.avgRating > 4.5);
            setRestaurantData(filteredData);
        }} >Top Rated Restaurants</button>
        <div className="restaurant-container-component">
            {restaurantData.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
            ))}
        </div>
        </>
    );
};
