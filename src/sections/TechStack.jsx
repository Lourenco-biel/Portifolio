import { useGSAP } from '@gsap/react';
import TechIcons from '../components/Models/TechLogos/TechIcons';
import TitleHeader from '../components/TitleHeader';
import gsap from 'gsap';
import { useConstants } from '../constants';
import { useTranslation } from 'react-i18next';
import { Canvas } from '@react-three/fiber';
import { View, Preload } from '@react-three/drei';
import { Suspense, useRef } from 'react';

const TechStack = () => {
  const { t } = useTranslation('techStack');
  const { techStackIcons } = useConstants();
  const containerRef = useRef();

  useGSAP(() => {
    gsap.fromTo(
      '.tech-card',
      { opacity: 0, y: 50 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '#skills',
          start: 'top center',
        },
      },
    );
  });

  return (
    <div id="skills" ref={containerRef} className="flex-center section-padding relative">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t('titleHeader.title')}
          sub={t('titleHeader.sub')}
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Suspense fallback={<div className="text-white-50">Loading...</div>}>
                    <TechIcons model={icon} />
                  </Suspense>
                </div>
                <div className="padding-x w-full">
                  <p>{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Global Canvas for all Views */}
      <Canvas
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        eventSource={containerRef}
      >
        <View.Port />
        <Preload all />
      </Canvas>
    </div>
  );
};

export default TechStack;

