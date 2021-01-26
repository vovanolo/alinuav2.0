import { urls } from '../../routes';
import { LocalizedLink as Link } from '../../i18next/components';

const NotFound = () => {
  return (
    <div>
      <h1>404. Not Found</h1>
      <p>
        Go to <Link to={urls.home}>Home</Link>
      </p>
    </div>
  );
};

export default NotFound;
