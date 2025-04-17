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
          fontSize: "1rem",
          padding: "10px 30px",
        }}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}

export default ActionButton;
