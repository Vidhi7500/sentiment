import React, { useState, useEffect } from "react";
import ReviewList from "./components/ReviewList";
import ReviewHighlighter from "./components/ReviewHighlighter"; 
import Tooltip from "./components/Tooltip";

const App = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/reviewsData.json");
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Review Sentiment Analysis</h1>
      <ReviewList reviews={reviews} />
      <Tooltip sentimentTopic="Spa" />
    </div>
  );
};

export default App;
