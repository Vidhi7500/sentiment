import React from "react";

const Tooltip = ({ sentimentTopic }) => {
  return (
    <div style={tooltipStyle}>
      <p>Sentiment Topic: {sentimentTopic}</p>
    </div>
  );
};

const tooltipStyle = {
  position: "absolute",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
  padding: "5px 10px",
  borderRadius: "5px",
  zIndex: "999",
};

export default Tooltip;
