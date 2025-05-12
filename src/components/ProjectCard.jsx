import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { useTranslation } from "react-i18next";

function ProjectCard(card) {
  const { t, i18n } = useTranslation();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={card.url}
          alt={card.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {card.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {t("Checkout")}
        </Button>
      </CardActions>
    </Card>
  );
}
export default ProjectCard;
