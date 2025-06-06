import {
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Divider,
  Link,
} from "@mui/material";
import useStyles from "../styles";
import ServicesCard from "./ServicesCard";
import SectionTitle from "./SectionTitle";
import ProjectCard from "./ProjectCard";
import TextInputForm from "../components/TextInputForm";
import ActionButton from "./ActionButton";
import SocialIcon from "./SocialIcon";
import DividerComponent from "../components/DividerComponent";
import { color, delay, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function MainContent() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const sectionAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
    },
  };

  const handleScrollToPortfolio = () => {
    const element = document.getElementById("PORTFOLIO");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const classes = useStyles();
  return (
    <div>
      <motion.div
        variants={sectionAnim}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Grid
          container
          className={classes.hero_section}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row", lg: "row" },
            paddingTop: { xs: "10px", sm: "20px", md: "50px" },
          }}
        >
          <Grid className={classes.hero_left} size={{ xs: "12", sm: "grow" }}>
            <Typography
              className={classes.gradient_text}
              variant="h2"
              fontSize={{ xs: "2rem", sm: "3rem", md: "3.75rem" }}
              lineHeight={{ xs: "3rem", sm: "4rem", md: "5rem" }}
            >
              {t("FULLSTACK WEB AND MOBILE APP DEVELOPER")}
            </Typography>

            <Typography
              variant="h3"
              className={classes.text}
              sx={{
                fontSize: { xs: "20px", sm: "28px" },
                paddingTop: { xs: "10px", sm: "20px", md: "30px" },
                lineHeight: { xs: "1.8rem", sm: "2.5rem", md: "2.5rem" },
              }}
            >
              {t("I am Idrissa Sylla - ")}{" "}
              <span
                className={`${classes.text} ${classes.gradient_text}`}
                style={{ display: "inline", fontSize: "inherit" }}
              >
                {t("web and mobile app developer")}
              </span>{" "}
              {t(
                "with a passion for creating beautiful and responsive websites and apps"
              )}
            </Typography>

            <ActionButton
              buttonText={t("VIEW MY WORK")}
              onClick={handleScrollToPortfolio}
            />
          </Grid>

          <Grid className={classes.image_grid} size={{ xs: "12", sm: "grow" }}>
            <img
              className={classes.image}
              src="./assets/idriss1.png"
              alt="Hero Image"
            />
          </Grid>
        </Grid>
      </motion.div>
      <DividerComponent />
      <section id="SERVICES">
        <motion.div
          variants={sectionAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box className={classes.services_section} sx={{ marginTop: "30px" }}>
            <SectionTitle title={t("MY SERVICES")} />
            <Grid
              container
              spacing={{ xs: 2, sm: 3, md: 5 }}
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <Grid size={{ xs: 2, md: 2 }} offset={{ xs: 0, md: 0 }}>
                <ServicesCard
                  title={t("👨🏻‍💻 Web Development")}
                  description={t(
                    "I develop full stack web applications with focus on functionality and beautiful user interfaces and UX"
                  )}
                />
              </Grid>
              <Grid size={{ xs: 4, md: 7 }} offset={{ md: "auto" }}>
                <ServicesCard
                  title={t("📲 Mobile App Development")}
                  description={t(
                    "I develop mobile applications with focus on functionality and beautiful user interfaces and UX"
                  )}
                />
              </Grid>
              <Grid size={{ xs: 6, md: 2 }} offset={{ xs: 0, md: 0 }}>
                <ServicesCard
                  title={t("☺ UX/UI Design")}
                  description={t(
                    "I design high fidelity user interfaces with focus on functionality and beautiful user interfaces and UX"
                  )}
                />
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </section>
      <DividerComponent />
      <section id="TECHNOLOGIES">
        <motion.div
          variants={sectionAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box className={classes.skills_section}>
            <SectionTitle
              className={classes.skills_title}
              title={t("SKILLS")}
            />
            <Grid
              className={classes.logos_container}
              container
              display="flex"
              flexDirection="row"
              alignContent="center"
            >
              <Grid className={classes.skills_desc}>
                <Typography
                  className={classes.subHeading}
                  variant="h4"
                  sx={{
                    fontSize: { xs: "24px", sm: "28px", md: "28px" },
                    color: "white",
                    marginLeft: { xs: "45px", sm: "0px", md: "220px" },
                  }}
                >
                  {t("The Skills, tools, and technologies I use:")}
                </Typography>
              </Grid>
              <Grid
                className={classes.logos_row}
                sx={{
                  marginLeft: { xs: "0px", sm: "0px", md: "200px" },
                  marginRight: { xs: "30px", sm: "0px", md: "350px" },
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
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
        </motion.div>
      </section>

      <DividerComponent />

      <section id="PORTFOLIO">
        <motion.div
          variants={sectionAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box className={classes.portfolio_section}>
            <SectionTitle title={t("PORTFOLIO")} />
            <Grid
              container
              gap={2}
              alignContent={"center"}
              alignItems={"center"}
              marginLeft={{ xs: "15px" }}
            >
              <Grid className={classes.portfolio_row}>
                <a
                  href="https://nimba-movies.netlify.app/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ProjectCard
                    url="./assets/movie_app.png"
                    title={t("Movie App")}
                    text={t(
                      "This app allows user to search and view their favorite movies. They have the ability to favorite a particular movie and unfavorite it also"
                    )}
                  />
                </a>
              </Grid>
              <Grid className={classes.portfolio_row}>
                <a
                  href="https://ritchie-todo-app.netlify.app/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ProjectCard
                    url="./assets/todo_app.png"
                    title={t("Todo App")}
                    text={t(
                      "This TODO App helps users in organizing their daily tasks. They have the ability to check and uncheck a task."
                    )}
                  />
                </a>
              </Grid>
              <Grid className={classes.portfolio_row}>
                <a
                  href="https://ritchie-photo-album.netlify.app/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <ProjectCard
                    url="./assets/photo_album_app.png"
                    title={t("Photo Album App")}
                    text={t(
                      "This photo album app displays my photos and allows users to view all my albums. I have captured crucial moments of my life which I think is worth sharing."
                    )}
                  />
                </a>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </section>

      <Box sx={{ marginTop: { xs: "0px", sm: "0px", md: "30px" } }}></Box>
      <DividerComponent />

      <section id="CONTACT">
        <motion.div
          variants={sectionAnim}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Box
            className={classes.contact_section}
            sx={{ marginLeft: { xs: "4px" } }}
          >
            <Grid container display="flex">
              <Grid
                width="550px"
                paddingRight={{ xs: "0px", sm: "0px", md: "30px" }}
              >
                <Box
                  sx={{ marginTop: { xs: "0px", sm: "0px", md: "15px" } }}
                ></Box>
                <SectionTitle title={t("DO YOU HAVE A PROJECT TO DISCUSS ?")} />
                <Typography
                  className={classes.get_in_touche}
                  variant="h4"
                  sx={{
                    fontSize: { xs: "24px", sm: "28px", md: "28px" },
                    color: "white",
                  }}
                >
                  {t("GET IN TOUCHE 💬")}
                </Typography>
                <Grid
                  display={"flex"}
                  flexDirection={{ xs: "column", sm: "row", md: "row" }}
                >
                  <div className={classes.mail_contact}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "20px", sm: "24px", md: "24px" },
                        color: "white",
                      }}
                    >
                      {t("CONTACT")}
                    </Typography>
                    <Typography
                      variant="h6"
                      fontSize={{ xs: "18px", sm: "28px", md: "18px" }}
                      color="white"
                      sx={{ marginTop: { xs: "0px", sm: "0px", md: "10px" } }}
                    >
                      <Link
                        href="mailto:idrisssylla88@gmail.com"
                        sx={{ color: "white", textDecoration: "none" }}
                        underline="hover"
                      >
                        {" "}
                        idrisssylla88@gmail.com
                      </Link>
                    </Typography>
                  </div>

                  <Box>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: { xs: "20px", sm: "24px", md: "24px" },
                        color: "white",
                        marginTop: { xs: "20px", sm: "0px", md: "0px" },
                        paddingBottom: { xs: "10px" },
                      }}
                    >
                      {t("SOCIAL MEDIA")}
                    </Typography>
                    <Grid display="flex">
                      <a
                        href="https://www.linkedin.com/in/sylla-idrissa-912a1215a"
                        target="_blank"
                      >
                        <SocialIcon
                          url="./assets/social_icons/linkedin-svgrepo-com.svg"
                          alt="linkedin logo"
                        />
                      </a>
                      <a
                        href="https://www.facebook.com/share/16W63dDFwg/?mibextid=wwXIfr"
                        target="_blank"
                      >
                        <SocialIcon
                          url="./assets/social_icons/facebook-176-svgrepo-com.svg"
                          alt="facebook logo"
                        />
                      </a>

                      <a
                        href="https://www.instagram.com/idriss_ritchie?igsh=MWQzYndnZjUwbG01aQ%3D%3D&utm_source=qr"
                        target="_blank"
                      >
                        <SocialIcon
                          url="./assets/social_icons/instagram-svgrepo-com.svg"
                          alt="insta logo"
                        />
                      </a>
                      <a
                        href="https://api.whatsapp.com/send?phone=+224664683646&text=Hello Idrissa Sylla"
                        target="_blank"
                      >
                        <SocialIcon
                          url="./assets/social_icons/whatsapp-svgrepo-com.svg"
                          alt="whatsapp logo"
                        />
                      </a>
                      <a href="https://t.me/idriss_ritchie" target="_blank">
                        <SocialIcon
                          url="./assets/social_icons/telegram-svgrepo-com.svg"
                          alt="telegram logo"
                        />
                      </a>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
              <Grid className={classes.formSection}>
                <Typography
                  className={classes.contact_form_text}
                  variant="h5"
                  sx={{
                    fontSize: { xs: "24px", sm: "24px", md: "24px" },
                    color: "white",
                    marginTop: { xs: "20px" },
                  }}
                >
                  {t("CONTACT FORM")}
                </Typography>
                <TextInputForm label={t("Name")} />
                <TextInputForm label="E-mail" />
                <TextInputForm label="Message" />
                <ActionButton buttonText={t("Send")} />
                <Box
                  sx={{ marginBottom: { xs: "10px", sm: "10px", md: "50px" } }}
                ></Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </section>

      <DividerComponent />
    </div>
  );
}

export default MainContent;
