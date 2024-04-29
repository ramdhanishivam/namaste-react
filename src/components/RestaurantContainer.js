import React from "react";
import { restaurantDataFromSwiggy } from "./utils/restaurantDataFromSwiggy";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";

// RestaurantContainer component
export const RestaurantContainer = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    useEffect(() => {
        console.log("RestaurantContainer component mounted");
        fetchSwiggyData();
    }, []);

    const fetchSwiggyData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            setRestaurantData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching data from Swiggy API", error);
        }
    };
    
    // Shimmer effect
    if (restaurantData.length === 0) {
        return (
            <>
                <div className="shimmer-container">
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                    <div className="shimmer-wrapper"></div>
                </div>
            </>
        );
    }

    return (
        <>
        <button onClick={() => {
            console.log("Top Rated Restaurants clicked");
            const filteredData = restaurantData.filter((restaurant) => restaurant.info.avgRating >= 4.3);
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
