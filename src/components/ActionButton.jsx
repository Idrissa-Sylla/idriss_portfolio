import { Button } from "@mui/material";
import useStyles from "../styles";

function ActionButton(props) {
  const classes = useStyles();
  return (
    <div>
      <Button
        onClick={props.onClick}
        className={classes.action_button}
        variant="outlined"
        sx={{
          borderRadius: "10px",
          fontSize: { xs: "0.80rem", sm: "1rem", md: "1rem" },
          padding: { xs: "8px 30px", sm: "10px 40px", md: "7px 30px" },
          marginTop: "10px",
          color: "white",
          borderColor: "white",
        }}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}

export default ActionButton;
