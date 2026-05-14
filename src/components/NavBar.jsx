import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConstants } from '../constants/index.js';
const NavBar = () => {
  const { t } = useTranslation('navBar');
  const { navLinks } = useConstants();

  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () =>
      window.removeEventListener('scroll', handleScroll, { passive: true });
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <div className="flex items-center gap-4">
          <a className="logo" href="#hero">
            Gabriel | Ibiapino
          </a>
        </div>

        <nav className="desktop">
          <ul className="flex items-center space-x-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
            {/* Improved Language Switcher */}
            <li className="flex items-center ml-4">
              <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1 gap-1">
                <button
                  onClick={() => changeLanguage('pt')}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    i18n.language === 'pt'
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  PT
                </button>
                <button
                  onClick={() => changeLanguage('en')}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
                    i18n.language === 'en'
                      ? 'bg-white text-black'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>{t('button')}</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
