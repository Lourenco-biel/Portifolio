import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useConstants } from '../constants/index.js';
import Dropdown from './Dropdown.jsx';

const NavBar = () => {
  const { t } = useTranslation('navBar');
  const { navLinks } = useConstants();

  const [scrolled, setScrolled] = useState(false);
  const { i18n } = useTranslation();
  const optionsDropdown = [
    { label: 'En', onClick: () => changeLanguage('en') },
    { label: 'Pt', onClick: () => changeLanguage('pt') },
  ];
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <div className="flex gap-4">
          <Dropdown
            options={optionsDropdown}
            className="px-1 py-1 border border-gray-300 rounded bg-white text-gray-700 flex items-center cursor-pointer gap-1"
            buttonContent={
              <img
                src="/images/world.png"
                className="icon w-7 object-cover roudend-full"
                alt="lang"
              />
            }
          />
          <a className="logo" href="#hero">
            Gabriel | Ibiapino
          </a>
        </div>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"></span>
                </a>
              </li>
            ))}
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
