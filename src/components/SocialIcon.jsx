import React from "react";

function SocialIcon(props) {
  return (
    <div>
      <img
        src={props.url}
        alt={props.alt}
        style={{ width: "25px", marginRight: "20px" }}
      />
    </div>
  );
}
export default SocialIcon;
