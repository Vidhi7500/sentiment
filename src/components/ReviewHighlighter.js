import React, { useState } from "react";
import "../styles/ReviewHighlighter.css"; 

const ReviewHighlighter = ({ review }) => {
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
      <div className="review-content">
        {review.analytics.map((sentence, index) => (
          <span
            key={index}
            className={`sentence ${sentence.sentiment.toLowerCase()}`}
            onMouseEnter={(e) => handleMouseEnter(sentence.Topic, e)}
          >
            {sentence.sentences.join(" ")}
          </span>
        ))}
        {review.content && !Array.isArray(review.content) && (
          <span className="sentence neutral">{review.content}</span>
        )}
      </div>
      {tooltipContent && (
        <div
          className="tooltip"
          style={{ top: tooltipPosition.top, left: tooltipPosition.left }}
        >
          <p>{tooltipContent}</p>
        </div>
      )}
    </div>
  );
};

export default ReviewHighlighter;
