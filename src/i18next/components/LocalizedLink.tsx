import { Link, LinkProps } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface IProps extends LinkProps {
  to: string;
}

const LocalizedLink: React.FC<IProps> = ({ to, children, ...props }) => {
  const { i18n } = useTranslation();

  const getLocalizedLink = (url: string) => {
    return `/${i18n.language}${url}`;
  };

  return (
    <Link to={getLocalizedLink(to)} {...props}>
      {children}
    </Link>
  );
};

export default LocalizedLink;
