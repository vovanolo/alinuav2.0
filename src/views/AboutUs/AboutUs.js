import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about-us.title')}</h1>
    </div>
  );
};

export default AboutUs;
