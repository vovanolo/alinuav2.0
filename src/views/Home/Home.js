import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Combobox from '../../components/Combobox';

const Home = () => {
  const [option, setOption] = useState('');
  const { t } = useTranslation();

  const handleChangeOption = (value) => {
    setOption(value);
  };

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <Combobox
        options={['Lviv', 'Kharkiv', 'Kyiv']}
        value={option}
        onChange={handleChangeOption}
        loading
      />
    </div>
  );
};

export default Home;
