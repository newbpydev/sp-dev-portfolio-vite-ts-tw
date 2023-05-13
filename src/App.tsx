import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {
  return (
    <main>
      <Header />

      <section className="overflow-x-clip">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}

export default App;
