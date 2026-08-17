import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import TitleHeader from '../components/TitleHeader';
import ContactExperience from '../components/Models/contact/ContactExperience';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const lastSubmissionRef = useRef(0);
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

    const formData = new FormData(formRef.current);
    const submittedAt = Date.now();

    // Bots frequently fill hidden fields. Silently ignore those submissions.
    if (formData.get('website')) return;

    // Avoid accidental double submissions and basic automated flooding.
    if (loading || submittedAt - lastSubmissionRef.current < 10_000) return;

    lastSubmissionRef.current = submittedAt;
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
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <input
                  type="text"
                  name="website"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px]"
                />
                <div>
                  <label htmlFor="name">{t('forData.nameLabel')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t('forData.namePlaceholder')}
                    minLength="2"
                    maxLength="100"
                    autoComplete="name"
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
                    maxLength="254"
                    autoComplete="email"
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
                    minLength="10"
                    maxLength="2000"
                    required
                  />
                </div>

                <button type="submit" disabled={loading}>
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
