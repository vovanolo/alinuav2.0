import PropTypes from 'prop-types';

import styles from './Button.module.css';

import Spinner from '../Spinner';

const Button = ({ children, loading, ...otherProps }) => {
  return (
    <button {...otherProps} className={styles.button}>
      {loading ? <Spinner /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  loading: false,
};

export default Button;
