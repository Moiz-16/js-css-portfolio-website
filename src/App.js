import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

import ParticlesComponent from './components/particles'


function App() {
  return (
    <div>
   
      <ParticlesComponent id="particles"/>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>  
      <Experience/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
