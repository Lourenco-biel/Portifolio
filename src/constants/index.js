import { useTranslation } from 'react-i18next';

export function useConstants() {
  const { t } = useTranslation('constants');

  const navLinks = t('navLinks', { returnObjects: true });
  const words = t('words', { returnObjects: true });
  const counterItems = t('counterItems', { returnObjects: true });
  const logoIconsList = t('logoIconsList', { returnObjects: true });
  const abilities = t('abilities', { returnObjects: true });
  const techStackImgs = t('techStackImgs', { returnObjects: true });
  const techStackIcons = t('techStackIcons', { returnObjects: true });
  const expCards = t('expCards', { returnObjects: true });
  const expLogos = t('expLogos', { returnObjects: true });
  const testimonials = t('testimonials', { returnObjects: true });
  const socialImgs = t('socialImgs', { returnObjects: true });

  return {
    navLinks,
    words,
    counterItems,
    logoIconsList,
    abilities,
    techStackImgs,
    techStackIcons,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
  };
}
