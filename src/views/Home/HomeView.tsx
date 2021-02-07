import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Combobox from '../../components/Combobox';
import { LocalizedLink as Link } from '../../i18next/components';

const Home = () => {
  const [option, setOption] = useState<string>('');
  const { t } = useTranslation();

  const handleChangeOption = (value: string) => {
    setOption(value);
  };

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <Link to="/12321421314">Test</Link>
      <Combobox
        options={['Lviv', 'Kharkiv', 'Kyiv']}
        value={option}
        onChange={handleChangeOption}
      />
    </div>
  );
};

export default Home;
