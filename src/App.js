import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Icons from "./components/Icons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Icons />
      <Footer />
    </div>
  );
}

export default App;
