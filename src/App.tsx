import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import ContactSection from "./components/sections/ContactSection";
import HeroSection from "./components/sections/HeroSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";

function App() {
  return (
    <>
      <main>
        {/* <main className="p-4 md:p-7"> */}
        <Header />
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>

      <div>
        {` 
  Projects

  Contact me

  Design portfolio
  HTML CSS
  View project
  View code

  E-learning landing page
  HTML CSS
  View project
  View code

  Todo web app
  HTML CSS JavaScript
  View project
  View code

  Entertainment web app
  HTML CSS JavaScript
  View project
  View code

  Memory Game
  HTML CSS JavaScript
  View project
  View code

  Art gallery showcase
  HTML CSS JavaScript
  View project
  View code

  Contact

  I would love to hear about your project and how I could help. Please 
  fill in the form, and I’ll get back to you as soon as possible.

  Name
  Email
  Message

  Send message

  adamkeyes
`}
      </div>
    </>
  );
}

export default App;
