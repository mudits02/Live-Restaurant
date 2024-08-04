import React from "react";

const Shimmer = () => {
    const shimmerCards = Array(6).fill(0);  // Create an array with 6 shimmer cards

    return (
        <div className="shimmer">
            {shimmerCards.map((_, index) => (
                <div key={index} className="shimmer-card"></div>
            ))}
        </div>
    );
};

export default Shimmer;
