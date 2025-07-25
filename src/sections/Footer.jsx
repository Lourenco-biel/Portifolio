import { useTranslation } from 'react-i18next';
import { useConstants } from '../constants';

const Footer = () => {
  const { t } = useTranslation('footer');
  const { socialImgs } = useConstants();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>{t('terms')}</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a key={index} className="icon" href={socialImg.url}>
              <img src={socialImg.imgPath} alt="social icon" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Gabriel Ibiapino. {t('reserved')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
