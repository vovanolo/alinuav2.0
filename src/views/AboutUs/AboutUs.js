import { useTranslation } from 'react-i18next';

export const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('about-us.title')}</h1>
    </div>
  )
}