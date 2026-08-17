import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/Models/contact/ContactExperience';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );

      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title={t('titleHeader.title')}
          sub={t('titleHeader.sub')}
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="card-border rounded-xl p-6 mb-6">
              <h3 className="text-xl font-semibold mb-3">{t('directContact')}</h3>
              <div className="flex flex-col gap-2 text-white-50">
                <a className="hover:text-white transition-colors" href={`mailto:${t('email')}`}>
                  {t('email')}
                </a>
                <a className="hover:text-white transition-colors" href="tel:+5511962781543">
                  {t('phone')}
                </a>
              </div>
            </div>
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">{t('forData.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('forData.namePlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">{t('forData.emailLabel')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t('forData.emailPlaceholder')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">{t('forData.messageLabel')}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t('forData.messagePlaceholder')}
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading
                        ? `${t('forData.button.sending')}`
                        : `${t('forData.button.done')}`}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
