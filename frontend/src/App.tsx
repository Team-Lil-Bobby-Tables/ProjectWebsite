import "./App.css";
import AboutProject from "./components/about-project";
import AboutUs from "./components/about-us";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { userInfo } from "./types/User";
import { Container } from "@mui/material";
import background from "./assets/background.png";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Artifacts from "./components/artifacts";
import Timetrack from "./components/timetrack";

function App() {
  const userInfo: userInfo = {
    loggedIn: false,
    profile: null,
  };

  return (
    <div className="App">
      <BrowserRouter>
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
          <Routes>
            <Route
              path="/"
              index
              element={
                <>
                  <AboutProject />
                  <AboutUs />
                </>
              }
            />
            <Route path="/timetracking" element={<Timetrack />} />
            <Route path="/artifacts" element={<Artifacts />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
