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
  const { techStackIcons, profileInfo } = useConstants();
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <article className="card-border rounded-2xl p-6 lg:row-span-2">
            <h3 className="text-2xl font-semibold mb-5">{profileInfo.technicalTitle}</h3>
            <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
              {profileInfo.technical.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="card-border rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-3">{profileInfo.languagesTitle}</h3>
            <p className="text-white-50">{profileInfo.languages}</p>
          </article>
          <article className="card-border rounded-2xl p-6">
            <h3 className="text-2xl font-semibold mb-5">{profileInfo.educationTitle}</h3>
            <ul className="list-disc ms-5 flex flex-col gap-3 text-white-50">
              {profileInfo.education.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
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
