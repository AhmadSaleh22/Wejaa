import react from "react";
import NavbarHome from "./Components/Navbar/NavbarHome";
import Hero from "./Components/Hero/Hero";
import SocialService from "./Components/SocialService/SocialService";
import SoftSection from './Components/SoftwareService/SoftSection';
import ClientSec from "./Components/Clients/ClientSec";
import PackageCard from "./Components/Package/PackageCard/PackageCard";
import PackageSection from "./Components/Package/PackageSection";
import HeroProduct from "./Components/Hero/HeroProduct";
function App() {
  return (
    <div>
      <NavbarHome/>
      <Hero />
      <SocialService/>
      <SoftSection />
      <ClientSec />
      <PackageSection/>
      <HeroProduct/>
    </div>
  );
}

export default App;
