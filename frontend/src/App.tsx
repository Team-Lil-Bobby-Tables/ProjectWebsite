import "./App.css";
import AboutProject from "./components/about-project";
import AboutUs from "./components/about-us";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { userInfo } from "./types/User";

function App() {
  const userInfo: userInfo = {
    loggedIn: false,
    profile: null,
  };

  return (
    <div className="App">
      <Navbar {...userInfo} />
      <AboutProject />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
