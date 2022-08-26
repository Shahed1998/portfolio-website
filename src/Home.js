import { useRef } from 'react';
import About from './assets/components/About';
import Navbar from './assets/components/Navbar';
import Skill from './assets/components/Skill';
import Project from './assets/components/Project';
import Contact from './assets/components/Contact';
import Index from './assets/components/Index';
import Footer from './assets/components/Footer';

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const references = {
    home,
    about,
    skill,
    project,
    contact,
  };
  const scrollToSection = (sectionRef) => {
    window.scrollTo({
      top: sectionRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {/* <Navbar /> */}
      <Navbar refer={references} scrollFunc={scrollToSection} />
      <Index view={home} />
      <About view={about} />
      <Skill view={skill} />
      <Project view={project} />
      <Contact view={contact} />
      <Footer />
    </>
  );
};

export default Home;
