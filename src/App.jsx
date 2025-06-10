import NavBar from './components/NavBar';
import ExperienceSection from './sections/ExperienceSection';
import FeatureCards from './sections/FeatureCards';
import Hero from './sections/Hero';
import LogoShowcase from './sections/LogoShowcase';
import ShowcaseSection from './sections/ShowcaseSection';
import TechStack from './sections/TechStack';
import Testimonials from './sections/Testimonials';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
    </>
  );
};
export default App;
