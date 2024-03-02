import React from "react";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }

  return <div>{stars}</div>;
};

export default StarRating;
