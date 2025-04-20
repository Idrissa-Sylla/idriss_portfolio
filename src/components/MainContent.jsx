import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Divider,
} from "@mui/material";
import useStyles from "../styles";
import ServicesCard from "./ServicesCard";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import TextInputForm from "../components/TextInputForm";
import ActionButton from "./ActionButton";
import SocialIcon from "./SocialIcon";
import DividerComponent from "../components/DividerComponent";

function MainContent() {
  const classes = useStyles();
  return (
    <div>
      <Grid
        container
        className={classes.hero_section}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
        }}
      >
        <Grid className={classes.hero_left} size={{ xs: "12", sm: "grow" }}>
          <Typography variant="h2" className={classes.title}>
            FULLSTACK WEB DEVELOPER AND MOBILE APPS
          </Typography>
          <Typography variant="h6" className={classes.text}>
            I am Idrissa Sylla - web and mobile app developer with a passion for
            creating beautiful and responsive websites and apps
          </Typography>

          <ActionButton buttonText="VIEW MY WORK" />
        </Grid>

        <Grid className={classes.image_grid} size={{ xs: "12", sm: "grow" }}>
          <img
            className={classes.image}
            src="./assets/idriss1.png"
            alt="Hero Image"
          />
        </Grid>
      </Grid>

      <DividerComponent />

      <Box className={classes.services_section} sx={{ marginTop: "30px" }}>
        <SectionTitle title="MY SERVICES" />
        <Grid
          container
          spacing={3}
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
        >
          <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
            <ServicesCard
              title="👨🏻‍💻 Web Development"
              description="I develop full stack web applications with focus on functionality and beautiful user interfaces and UX"
            />
          </Grid>
          <Grid size={{ xs: 4, md: 6 }} offset={{ md: "auto" }}>
            <ServicesCard
              title="📲 Mobile App Development"
              description="I develop mobile applications with focus on functionality and beautiful user interfaces and UX"
            />
          </Grid>
          <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 3, md: 0 }}>
            <ServicesCard
              title="☺ UX/UI Design"
              description="I design high fidelity user interfaces with focus on functionality and beautiful user interfaces and UX"
            />
          </Grid>
        </Grid>
      </Box>
      <DividerComponent />
      <Box className={classes.skills_section}>
        <SectionTitle className={classes.skills_title} title="SKILLS" />
        <Grid
          className={classes.logos_container}
          container
          display="flex"
          flexDirection="column"
          alignContent="center"
        >
          <Grid className={classes.skills_desc}>
            <Typography variant="h4">
              The Skills, tools, and technologies I use:
            </Typography>
          </Grid>
          <Grid className={classes.logos_row}>
            <img
              className={classes.logos}
              src="./assets/html-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/css-3-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/js-official-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/tailwind-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/npm-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/figma-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/react-svgrepo-com.svg"
              alt="html logo"
            />
          </Grid>
          <Grid className={classes.logos_row}>
            <img
              className={classes.logos}
              src="./assets/git-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/github-color-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/ejs-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/expressJs.jpeg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/firebase-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/flutter-svgrepo-com.svg"
              alt="html logo"
            />
          </Grid>
          <Grid className={classes.logos_row}>
            <img
              className={classes.logos}
              src="./assets/jquery-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/node-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/oracle-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/postgresql-svgrepo-com.svg"
              alt="html logo"
            />
            <img
              className={classes.logos}
              src="./assets/rest-api-svgrepo-com (1).svg"
              alt="html logo"
            />
          </Grid>
        </Grid>
      </Box>
      <DividerComponent />

      <Box className={classes.portfolio_section}>
        <SectionTitle title="PORTFOLIO" />
        <Grid container>
          <Grid className={classes.portfolio_row}>
            <ProjectCard
              url="./assets/movie_app.png"
              title="Movie App"
              text="This app allows user to search and view their favorite movies. They have the ability to favorite a particular movie and unfavorite it also"
            />
          </Grid>
          <Grid className={classes.portfolio_row}>
            <ProjectCard
              url="./assets/todo_app.png"
              title="Todo App"
              text="This TODO App helps users in organizing their daily tasks. They have the ability to check and uncheck a task."
            />
          </Grid>
          <Grid className={classes.portfolio_row}>
            <ProjectCard
              url="./assets/photo_album_app.png"
              title="Photo Album App"
              text="This photo album app displays my photos and allows users to view all my albums. I have captured crucial moments of my life which I think is worth sharing."
            />
          </Grid>
        </Grid>
      </Box>
      <DividerComponent />
      <Box className={classes.contact_section}>
        <Grid container display="flex" flexDirection="row">
          <Grid width="600px" paddingRight="50px">
            <SectionTitle title="DO YOU HAVE A PROJECT TO DISCUSS ?" />
            <Typography className={classes.get_in_touche} variant="h4">
              GET IN TOUCHE 💬
            </Typography>
            <Grid display="flex">
              <div className={classes.mail_contact}>
                <Typography variant="h5">CONTACT</Typography>
                <Typography variant="h6">idrisssylla88@gmail.com</Typography>
              </div>

              <div>
                <Typography variant="h5">SOCIAL MEDIA</Typography>
                <Grid display="flex">
                  <SocialIcon
                    url="./assets/social_icons/linkedin-svgrepo-com.svg"
                    alt="linkedin logo"
                  />
                  <SocialIcon
                    url="./assets/social_icons/facebook-176-svgrepo-com.svg"
                    alt="linkedin logo"
                  />
                  <SocialIcon
                    url="./assets/social_icons/instagram-167-svgrepo-com.svg"
                    alt="linkedin logo"
                  />
                  <SocialIcon
                    url="./assets/social_icons/whatsapp-svgrepo-com.svg"
                    alt="linkedin logo"
                  />
                  <SocialIcon
                    url="./assets/social_icons/telegram-svgrepo-com.svg"
                    alt="linkedin logo"
                  />
                </Grid>
              </div>
            </Grid>
          </Grid>
          <Grid className={classes.formSection}>
            <Typography className={classes.contact_form_text} variant="h5">
              CONTACT FORM
            </Typography>
            <TextInputForm label="Name" />
            <TextInputForm label="E-mail" />
            <TextInputForm label="Message" />
            <ActionButton buttonText="Send" />
          </Grid>
        </Grid>
      </Box>
      <DividerComponent />
    </div>
  );
}

export default MainContent;
