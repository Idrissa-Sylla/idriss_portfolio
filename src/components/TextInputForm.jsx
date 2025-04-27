import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import useStyles from "../styles";

function TextInputForm(input) {
  const classes = useStyles();
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 1,
          width: { xs: "40ch", sm: "60ch", md: "70ch" },
          borderRadius: "20px",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={classes.inputField}
        id="outlined-basic"
        label={input.label}
        variant="outlined"
      />
    </Box>
  );
}
export default TextInputForm;
