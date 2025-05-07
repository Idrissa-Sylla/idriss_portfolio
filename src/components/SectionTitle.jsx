import { Typography } from "@mui/material";
import useStyles from "../styles";

function SectionTitle(text) {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={(classes.services_text, classes.gradient_text)}
        variant="h4"
        sx={{ marginBottom: "30px", color: "white" }}
      >
        {text.title}
      </Typography>
    </div>
  );
}
export default SectionTitle;
