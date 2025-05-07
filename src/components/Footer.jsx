import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <Typography
        sx={{
          fontFamily: "Poppins",
          padding: { xs: "18px", sm: "20px", md: "20px" },
          fontSize: { xs: "16px", sm: "18px", md: "18px" },
          color: "white",
        }}
      >
        © {new Date().getFullYear()} - All rights reserved, UX/UI Design,
        Fullstack web dev, Mobile App dev, Graphic Design, Community Manager -
        Idrissa Sylla
      </Typography>
    </div>
  );
}

export default Footer;
