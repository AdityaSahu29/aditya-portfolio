import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DreamGoal from "./components/DreamGoal";
import Games from "./components/Games";
import Achievement from "./components/Achievement";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Stats from "./components/Stats";
import Simulations from "./components/Simulations";
import PublishedApps from "./components/PublishedApps";
import SoftwareProjects from "./components/SoftwareProjects";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <DreamGoal />
      <Games />
      <Simulations />
      <PublishedApps />
      <SoftwareProjects />
      <Achievement />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;