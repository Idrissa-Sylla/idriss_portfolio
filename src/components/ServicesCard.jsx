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
        }}
      >
        <CardActionArea
          sx={{
            height: "100%",
          }}
        >
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              sx={{ fontSize: { xs: "28px", sm: "38px" } }}
            >
              {card.title}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ fontSize: { xs: "18px", sm: "28px" } }}
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
