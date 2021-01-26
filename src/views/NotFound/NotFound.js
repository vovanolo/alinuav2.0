import { urls } from '../../routes';

const NotFound = () => {
  return (
    <div>
      <h1>404. Not Found</h1>
      <p>
        Go to <a href={urls.home}>Home</a>
      </p>
    </div>
  );
};

export default NotFound;
