import React from "react";

// RestaurantCard component
export const RestaurantCard = ({ restaurant }) => {
    // destructuring restaurant object
    const { name, costForTwo, cuisines, avgRating } = restaurant?.info;
    return (
        <div className="restaurant-card-component">
            <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="restaurant" />
            <p>{name}</p>
            <p>{costForTwo}</p>
            <p>{cuisines.slice(0, 2).join(", ")}</p>
            <p>{avgRating} Stars Rating</p>
        </div>
    );
};
