import React from "react";

function SocialIcon(props) {
  return (
    <div>
      <img
        src={props.url}
        alt={props.alt}
        style={{
          width: "24px",
          marginRight: "20px",
          stroke: "white",
        }}
      />
    </div>
  );
}
export default SocialIcon;
