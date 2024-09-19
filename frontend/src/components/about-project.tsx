import { Container } from "@mui/material";
import educe from "../assets/educe_screenshot.png";
/**
 * About the project component for the main page
 * @returns About project component
 */
const AboutProject = () => {
  return (
    <>
      <h1>Our Project - Educe</h1>
      <Container
        className="slide-left"
        sx={{
          animationDuration: "0.5s",
          display: "flex",
          flexDirection: "column",
          gap: "50px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <a href="https://educe.club" target="_blank">
          <img src={educe} width={"600"} />
        </a>
        <div>
          <p>
            Educe is an application for growing knowledge through connecting
            ideas. These ideas are represented by thought boxes on the app which
            are able to be tagged into groups and connected vertically and
            horizontally. This application has already been in development for a
            couple of years by previous senior project teams.
          </p>
          <p>
            Our goal is to continue to develop the educe app and to implement
            new, innovative, and practical features. We plan to improve the
            UI/UX of the app to meet modern standards, fix existing bugs within
            the codebase, and implement basic AI features to make the app feel
            more modern and easier to use.
          </p>
          <p>
            Since this project has already been in development for a couple of
            years we are going to continue to follow the same processes and
            utilize the same tools as the past teams. We will be utilizing the
            agile methodology along with weekly scrum meetings and two week
            sprints. We will continue to use the existing jira setup for project
            management and tracking as we continue to develop the app on the
            existing stack.
          </p>
        </div>
      </Container>
    </>
  );
};

export default AboutProject;
