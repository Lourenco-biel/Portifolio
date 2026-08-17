import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import TitleHeader from '../components/TitleHeader';
import GlowCard from '../components/GlowCard';
import { useConstants } from '../constants';
import { useTranslation } from 'react-i18next';

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
  const { t } = useTranslation('experienceSection');
  const { expCards } = useConstants();

  useGSAP(() => {
    // Loop through each timeline card and animate them in
    // as the user scrolls to each card
    gsap.utils.toArray('.timeline-card').forEach((card) => {
      // Animate the card coming in from the left
      // and fade in
      gsap.from(card, {
        // Move the card in from the left
        xPercent: -100,
        // Make the card invisible at the start
        opacity: 0,
        // Set the origin of the animation to the left side of the card
        transformOrigin: 'left left',
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: 'power2.inOut',
        // Trigger the animation when the card is 80% of the way down the screen
        scrollTrigger: {
          // The card is the trigger element
          trigger: card,
          // Trigger the animation when the card is 80% down the screen
          start: 'top 80%',
        },
      });
    });

    // Animate the timeline height as the user scrolls
    gsap.to('.timeline', {
      scaleY: 0,
      transformOrigin: 'bottom bottom',
      ease: 'none',
      scrollTrigger: {
        trigger: '.timeline',
        start: 'top center',
        end: '70% center',
        scrub: true,
      },
    });


    // Loop through each expText element and animate them in
    // as the user scrolls to each text element
    gsap.utils.toArray('.expText').forEach((text) => {
      // Animate the text opacity from 0 to 1
      // and move it from the left to its final position
      // over 1 second with a power2 ease-in-out curve
      gsap.from(text, {
        // Set the opacity of the text to 0
        opacity: 0,
        // Move the text from the left to its final position
        // (xPercent: 0 means the text is at its final position)
        xPercent: 0,
        // Animate over 1 second
        duration: 1,
        // Use a power2 ease-in-out curve
        ease: 'power2.inOut',
        // Trigger the animation when the text is 60% down the screen
        scrollTrigger: {
          // The text is the trigger element
          trigger: text,
          // Trigger the animation when the text is 60% down the screen
          start: 'top 60%',
        },
      });
    }, '<'); // position parameter - insert at the start of the animation
  }, []);

  return (
    <section
      id="experience"
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title={t('titleHeader.title')}
          sub={t('titleHeader.sub')}
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {expCards.map((card, idx) => (
              <div
                key={card.title + card.date + idx}
                className="exp-card-wrapper"
              >
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div className="w-full max-w-60 h-24 flex items-center justify-start">
                      <img
                        src={card.imgPath}
                        alt={`Logo da experiência: ${card.title}`}
                        className="block w-auto h-auto max-w-full max-h-full object-contain object-left"
                      />
                    </div>
                  </GlowCard>
                </div>
                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                      <div className="gradient-line w-1 h-full" />
                    </div>
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                      <div className="timeline-logo p-2">
                        <img
                          src={card.logoPath}
                          alt={`Logo da experiência: ${card.title}`}
                          className="block size-full aspect-square rounded-full object-contain"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-3xl">{card.title}</h1>
                        <p className="my-5 text-white-50">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-[#839CB5] italic">{t('context')}</p>
                        <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50 mb-3">
                          <li className="text-lg">{card.context}</li>
                        </ul>
                        <p className="text-[#839CB5] italic">
                          {t('achievement')}
                        </p>
                        <div className="mt-5 flex flex-col gap-8">
                          {card.achievements.map((item, index) => (
                            <div key={index}>
                              {typeof item === 'string' ? (
                                <ul className="list-disc ms-5 flex flex-col gap-5 text-white-50">
                                  <li className="text-lg">{item}</li>
                                </ul>
                              ) : (
                                <>
                                  <p className="text-white font-semibold mb-4 text-xl">
                                    {item.title}
                                  </p>
                                  <ul className="list-disc ms-5 flex flex-col gap-5 text-white-50">
                                    {item.points.map((point, pIndex) => (
                                      <li key={pIndex} className="text-lg">
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                </>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
