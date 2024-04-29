import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";

// RestaurantContainer component

export const RestaurantContainer = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
        fetchSwiggyData();
    }, []);

    const fetchSwiggyData = async () => {
        try {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.30080&lng=73.20430&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const data = await response.json();
            setRestaurantData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredData(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } catch (error) {
            console.error("Error fetching data from Swiggy API", error);
        }
    };

    // Shimmer effect - Conditional Rendering
    if (restaurantData.length === 0) {
        return (
            ShimmerCard()
        );
    }

    return (
        <>
            <div className="search-component">
                <input type="text" placeholder="Search for restaurants" value={searchText} 
                onChange={(event) => {
                    setSearchText(event.target.value);
                }}/>
                <button onClick={()=>{
                    const filteredData = restaurantData.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredData(filteredData);
                }}>Search</button>
            </div>
            <button onClick={() => {
                const filteredData = restaurantData.filter((restaurant) => restaurant.info.avgRating >= 4.3);
                setFilteredData(filteredData);
            }}>Top Rated Restaurants</button>
            <div className="restaurant-container-component">
                {filteredData.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
                ))}
            </div>
        </>
    );
};

function ShimmerCard() {
    return <>
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
    </>;
}

