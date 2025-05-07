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
          width: { xs: "40ch", sm: "60ch", md: "60ch" },
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
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "white",
              borderRadius: "18px",
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
            "&.Mui-focused fieldset": {
              borderColor: "white",
            },
          },
          "& .MuiInputLabel-root": {
            color: "white",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
          "& .MuiInputBase-input": {
            color: "white",
          },
          "& .MuiFormHelperText-root": {
            color: "white",
          },
        }}
      />
    </Box>
  );
}
export default TextInputForm;
