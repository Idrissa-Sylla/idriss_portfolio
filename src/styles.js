import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  image: {
    height: "100%",
    width: "100%",
  },
  text: {
    paddingTop: "30px",
    paddingBottom: "10px",
    color: "white",
  },
  hero_left: {
    alignContent: "center",
  },

  services_section: {
    marginTop: "70px",
    marginBottom: "30px",
  },
  services_text: {},

  logos: {
    width: "50px",
    marginLeft: "25px",
  },
  logos_container: {
    alignItems: "center",
  },
  logos_row: {
    paddingBottom: "20px",
  },
  skills_desc: {
    paddingBottom: "20px",
    paddingRightL: "20px",
  },
  skills_section: {
    marginTop: "30px",
  },
  portfolio_section: {
    marginTop: "30px",
  },
  portfolio_row: {
    paddingRight: "20px",
  },

  social_icon: {
    marginRight: "20px",
    color: "red",
  },
  mail_contact: {
    marginRight: "60px",
  },
  divider: {
    marginTop: "40px",
    marginBottom: "40px",
  },
  get_in_touche: {
    paddingBottom: "20px",
  },
  contact_form_text: {
    paddingBottom: "20px",
  },

  gradient_text: {
    // background: "linear-gradient(to right, #EE82EE, #87CEEB)",
    background: "linear-gradient(to right, #A020F0, #4169E1)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
}));
export default useStyles;
