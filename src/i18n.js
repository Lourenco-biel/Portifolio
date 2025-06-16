import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import constantsEn from './translations/en/constants.json';
import constantsPt from './translations/pt/constants.json';
import contactEn from './translations/en/contact.json';
import contactPt from './translations/pt/contact.json';
import experienceSectionEn from './translations/en/experienceSection.json';
import experienceSectionPt from './translations/pt/experienceSection.json';
import footerEn from './translations/en/footer.json';
import footerPt from './translations/pt/footer.json';
import heroEn from './translations/en/hero.json';
import heroPt from './translations/pt/hero.json';
import navBarEn from './translations/en/navBar.json';
import navBarPt from './translations/pt/navBar.json';
import showcaseSectionEn from './translations/en/showcaseSection.json';
import showcaseSectionPt from './translations/pt/showcaseSection.json';
import techStackEn from './translations/en/techStack.json';
import techStackPt from './translations/pt/techStack.json';
import testimonialsEn from './translations/en/testimonials.json';
import testimonialsPt from './translations/pt/testimonials.json';

const resources = {
  en: {
    constants: constantsEn,
    contact: contactEn,
    experienceSection: experienceSectionEn,
    footer: footerEn,
    hero: heroEn,
    navBar: navBarEn,
    showcaseSection: showcaseSectionEn,
    techStack: techStackEn,
    testimonials: testimonialsEn,
  },
  pt: {
    constants: constantsPt,
    contact: contactPt,
    experienceSection: experienceSectionPt,
    footer: footerPt,
    hero: heroPt,
    navBar: navBarPt,
    showcaseSection: showcaseSectionPt,
    techStack: techStackPt,
    testimonials: testimonialsPt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt', // Idioma padrão
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
