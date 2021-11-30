import react from "react";
import NavbarHome from "./Components/Navbar/NavbarHome";
import Hero from "./Components/Hero/Hero";
import SocialService from "./Components/SocialService/SocialService";
import SoftSection from './Components/SoftwareService/SoftSection';
function App() {
  return (
    <div>
      <NavbarHome/>
      <Hero />
      <SocialService/>
      <SoftSection />
    </div>
  );
}

export default App;
