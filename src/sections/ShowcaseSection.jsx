import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const { t } = useTranslation('showcaseSection');
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    const projects = [
      sectionRef.current,
      rydeRef.current,
      libraryRef.current,
      ycDirectoryRef.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
          },
        },
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <a
          href="https://github.com/Lourenco-biel"
          className="text-white-50 md:text-xl cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('gitHub')}
        </a>
        <div className="showcaselayout">
          <div className="first-project-wrapper" ref={rydeRef}>
            <div className="image-wrapper">
              <img
                src="/images/projectDashboard.png"
                alt="Ryder App Interfacec"
              />
            </div>
            <div className="text-content">
              <h2>{t('firstProject.title')}</h2>
              <p className="text-white-50 md:text-xl">
                {t('firstProject.sub')}
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className=" roundend-2">
                <img
                  src="/images/projectHamburguer.png"
                  alt="Libary Management Platform"
                />
              </div>
              <h2>{t('secondProject.title')}</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/projectNike.png" alt="nike web" />
              </div>
              <h2>{t('thirdProject.title')}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
