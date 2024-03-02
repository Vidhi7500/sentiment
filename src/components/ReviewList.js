import React, { useState } from "react";
import StarRating from "./StarRating"; 
import "../styles/ReviewList.css";
import Tooltip from "./Tooltip";
import ReviewHighlighter from "./ReviewHighlighter"; 

const ReviewList = ({ reviews }) => {
  const [tooltipPosition, setTooltipPosition] = useState({}); 
  const [tooltipContent, setTooltipContent] = useState(""); 

  const handleMouseEnter = (content, event) => {
    setTooltipPosition({
      top: event.clientY,
      left: event.clientX,
    });
    setTooltipContent(content);
  };

  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div>
      <h1>Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={review.source.icon}
                alt={review.source.name}
                style={{ width: "20px", height: "20px", marginRight: "10px" }} 
              />
              <h2>{review.reviewer_name}</h2>
              <br />
              <p> wrote a review at {review.source.name}</p>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <StarRating rating={review.rating_review_score} />
              <p style={{ marginLeft: "10px" }}>Date: {review.date}</p>
            </div>
            <ReviewHighlighter review={review} />
          </li>
        ))}
      </ul>
      {tooltipContent && (
        <Tooltip sentimentTopic={tooltipContent} style={tooltipPosition} />
      )}
    </div>
  );
};

export default ReviewList;
