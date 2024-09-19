import "./App.css";
import AboutProject from "./components/about-project";
import AboutUs from "./components/about-us";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { userInfo } from "./types/User";
import { Container } from "@mui/material";
import background from "./assets/background.png";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const userInfo: userInfo = {
    loggedIn: false,
    profile: null,
  };

  return (
    <div className="App">
      <Navbar {...userInfo} />
      <div
        className="background"
        style={{ opacity: "8%", height: "auto", position: "absolute" }}
      >
        <img src={background} style={{ width: "100%", overflow: "hidden" }} />
      </div>
      <Container
        sx={{
          fontFamily: "monospace",
          overflowX: "hidden",
          zIndex: 5,
          minHeight: "100vh",
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutProject />
                  <AboutUs />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
