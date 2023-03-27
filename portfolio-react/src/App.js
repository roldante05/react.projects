import Projects from "./components/Projects";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
       <Navbar />
       <Hero/>
       <About/>
       <Projects/>
       <Footer/>
    </div>
  );
}

export default App;
