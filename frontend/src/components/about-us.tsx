import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { profile } from "../types/User";

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
                }}
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
    profilepic: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    name: "Max Burdett",
    role: "Project Manager",
  },
  {
    profilepic: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    name: "Aidan Call",
    role: "Developer",
  },
  {
    profilepic: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    name: "Justin Jantzi",
    role: "Lead Developer",
  },

  {
    profilepic: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    name: "James McGrawth",
    role: "Communnication Lead",
  },
  {
    profilepic: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    name: "Rhamsez Thevenin",
    role: "Project Manager",
  },
];

export default AboutUs;
