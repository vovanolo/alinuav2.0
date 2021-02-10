import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import Combobox from '../../components/Combobox';
import NewsCard from '../../components/NewsCard';
import Container from '../../components/Container';


import { LocalizedLink as Link } from '../../i18next/components';

const Home = () => {
  const [options, setOptions] = useState<string[]>([]);
  const [optionsLoading, setOptionsLoading] = useState<boolean>(false);
  const [option, setOption] = useState<string>('');

  const { t } = useTranslation();

  useEffect(() => {
    setOptionsLoading(true);

    setTimeout(() => {
      setOptions(['Lviv', 'Kharkiv', 'Kyiv']);
      setOptionsLoading(false);
    }, 3000);
  }, []);

  const handleChangeOption = (value: string) => {
    setOption(value);
  };

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <Link to="/12321421314">Test</Link>
      <Combobox
        options={options}
        loading={optionsLoading}
        value={option}
        onChange={handleChangeOption}
      />
      <Container>
        <NewsCard/>
      </Container>
    </div>
  );
};

export default Home;
