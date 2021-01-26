import PropTypes from 'prop-types';

import styles from './Button.module.css';

import Spinner from '../Spinner';

const Button = ({
  children,
  loading,
  onClick,
  type,
  variant,
  fullWidth,
  fullHeight,
}) => {
  const btnClasses = [styles[variant]];
  if (fullHeight) {
    btnClasses.push(styles.fullHeight);
  }

  if (fullWidth) {
    btnClasses.push(styles.fullWidth);
  }

  return (
    <button
      className={btnClasses.join(' ')}
      onClick={loading ? null : onClick}
      type={type}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
  fullWidth: PropTypes.bool,
  fullHeight: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  loading: false,
  variant: 'secondary',
  fullWidth: false,
  fullHeight: false,
};

export default Button;
