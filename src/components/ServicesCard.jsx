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
      <Card sx={{ minWidth: 500, maxHeight: 150 }}>
        <CardActionArea
          sx={{
            height: "100%",
          }}
        >
          <CardContent>
            <Typography variant="h4" component="div">
              {card.title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default ServicesCard;
