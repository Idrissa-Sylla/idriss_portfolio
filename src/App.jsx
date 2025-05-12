import React, { Suspense } from "react";
import "./i18n";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarComponent from "./components/AppBarComponent";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import useStyles from "./styles";
import { Box } from "@mui/material";

function App() {
  const classes = useStyles();
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#141525" }}>
        <Box
          className={classes.app}
          sx={{
            marginLeft: { xs: "10px", sm: "10px", md: "60px" },
            marginRight: { xs: "10px", sm: "10px", md: "60px" },
          }}
        >
          <Box
            sx={{
              height: { xs: "5px", sm: "20px", md: "20px" },
            }}
          ></Box>
          <AppBarComponent />
          <MainContent />
          <Footer />
        </Box>
      </Box>
    </Suspense>
  );
}

export default App;
