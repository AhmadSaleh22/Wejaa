import react from "react";
import NavbarHome from "./Components/Navbar/NavbarHome";
import Hero from "./Components/Hero/Hero";
import SocialService from "./Components/SocialService/SocialService";
function App() {
  return (
    <div>
      <NavbarHome/>
      <Hero />
      <SocialService/>
    </div>
  );
}

export default App;
