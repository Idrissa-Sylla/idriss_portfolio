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
          fontSize: { xs: "0.80rem", sm: "1rem", md: "1.50rem" },
          padding: { xs: "8px 30px", sm: "10px 40px", md: "3px 50px" },
          marginLeft: "10px",
        }}
      >
        {props.buttonText}
      </Button>
    </div>
  );
}

export default ActionButton;
