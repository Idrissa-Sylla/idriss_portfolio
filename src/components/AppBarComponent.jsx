import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import useStyles from "../styles";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

const pages = ["SERVICES", "TECHNOLOGIES", "PORTFOLIO", "CONTACT"];
const languageOptions = [
  { code: "en", name: "ENGLISH" },
  { code: "fr", name: "FRANÇAIS" },
];

function AppBarComponent() {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElLang, setAnchorElLang] = React.useState(null); // State for language menu

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenLangMenu = (event) => {
    setAnchorElLang(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseLangMenu = () => {
    setAnchorElLang(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    handleCloseLangMenu();
  };

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    handleCloseNavMenu();
  };

  return (
    <AppBar
      className={classes.appBar}
      position="relative"
      sx={{
        backgroundColor: "#141525",
        borderRadius: { xs: "10px", md: "20px" },
        padding: { xs: "0px", md: "5px" },
        md: { borderRadius: "20px", padding: "10px" },
        border: "1px solid white",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              paddingRight: "100px",
            }}
          >
            IDRISSA SYLLA
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleScrollToSection(page)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {t(page)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Idrissa Sylla
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                className={classes.navButton}
                key={page}
                onClick={() => handleScrollToSection(page)}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  ":hover": { color: "#141525", backgroundColor: "white" },
                }}
              >
                {t(page)}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={t("Language")}>
              <IconButton
                onClick={handleOpenLangMenu}
                sx={{ p: 0, color: "white" }}
              >
                <LanguageIcon />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElLang}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElLang)}
              onClose={handleCloseLangMenu}
            >
              {languageOptions.map((lang) => (
                <MenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {t(lang.name)}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBarComponent;
