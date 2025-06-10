import { useGSAP } from '@gsap/react';
import TechIcons from '../components/Models/TechLogos/TechIcons';
import TitleHeader from '../components/TitleHeader';
import { techStackIcons } from '../constants';
import gsap from 'gsap';

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.inut',
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      },
    );
  });

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="2-fll h-full md:px-10 px-5">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🛠️ The Skills I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl>rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <TechIcons model={icon} />
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
