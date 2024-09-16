import "./App.css";
import AboutProject from "./components/about-project";
import AboutUs from "./components/about-us";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutProject />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
