import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { profile } from "../types/User";

import justin from "../assets/justin.jfif";
import max from "../assets/max.jfif";
import aidan from "../assets/aidan.jfif";
import rhamsez from "../assets/rhamsez.jfif";
import james from "../assets/james.jfif";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

/**
 * About the team component for the main page
 * @returns About Us component
 */
const AboutUs = () => {
  return (
    <Container maxWidth="xl" sx={{ paddingBottom: "50px", overflow: "hidden" }}>
      <div>
        <h1>The Team</h1>
        <Grid container spacing={2}>
          {itemData.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} lg={2.4} key={item.name}>
              <Item
                className="slide-up"
                sx={{
                  opacity: 0,
                  transitionDuration: "1s",
                  animationDelay: `${i * 0.1}s`,
                  animationFillMode: "forwards",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                onClick={() => window.open(item.linkedin, "_blank")}
              >
                <img
                  srcSet={`${item.profilepic}?w=212&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.profilepic}?w=248&fit=crop&auto=format`}
                  alt={item.name}
                  loading="lazy"
                  style={{ width: "100%", height: "auto" }}
                />
                <h4>{item.name}</h4>
                <h5>{item.role}</h5>
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

const itemData: profile[] = [
  {
    profilepic: max,
    name: "Max Burdett",
    role: "Project Manager",
    linkedin: "https://www.linkedin.com/in/max-burdett",
  },
  {
    profilepic: aidan,
    name: "Aidan Call",
    role: "Developer",
    linkedin: "https://www.linkedin.com/in/aidan-call",
  },
  {
    profilepic: justin,
    name: "Justin Jantzi",
    role: "Lead Developer",
    linkedin: "https://www.linkedin.com/in/justinjantzi",
  },

  {
    profilepic: james,
    name: "James McGrawth",
    role: "Communnication Lead",
    linkedin: "https://www.linkedin.com/in/james-mcgrath-9401081ba",
  },
  {
    profilepic: rhamsez,
    name: "Rhamsez Thevenin",
    role: "Project Manager",
    linkedin: "https://www.linkedin.com/in/rhamzthev",
  },
];

export default AboutUs;
