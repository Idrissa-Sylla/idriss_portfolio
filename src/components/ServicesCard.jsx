import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

function ServicesCard(card) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
        gap: 2,
      }}
    >
      <Card
        sx={{
          minWidth: { xs: "340px", sm: "750px", md: "500px" },
          maxHeight: 180,
          backgroundColor: "#141525",
          border: "1px solid white",
          borderRadius: "20px",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.1)",
          "&:hover": {
            backgroundColor: "#1e1e2f",
            boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.2)",
          },
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h1"
              component="div"
              sx={{
                fontSize: { xs: "28px", sm: "30px", sm: "30px" },
                color: "white",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{
                fontSize: { xs: "16px", sm: "18px", md: "18px" },
                color: "white",
              }}
            >
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default ServicesCard;
