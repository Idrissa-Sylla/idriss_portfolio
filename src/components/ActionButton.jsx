import { Button } from "@mui/material";
import useStyles from "../styles";

function ActionButton(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.action_button}
        variant="outlined"
        sx={{
          borderRadius: "10px",
          fontSize: { xs: "0.75rem", sm: "1rem", md: "1.60rem" },
          padding: "10px 30px",
        }}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}

export default ActionButton;
