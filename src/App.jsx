import NavBar from './components/NavBar';
import FeatureCards from './sections/FeatureCards';
import Hero from './sections/Hero';
import LogoShowcase from './sections/LogoShowcase';
import ShowcaseSection from './sections/ShowcaseSection';

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoShowcase />
      <FeatureCards />
    </>
  );
};
export default App;
