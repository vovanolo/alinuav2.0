import styles from './Button.module.css';

import Spinner from '../Spinner';

interface IProps {
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  variant?: 'primary' | 'secondary' | 'transparent';
  fullWidth?: boolean;
  fullHeight?: boolean;
}

const buildBtnClasses = (
  variant: string,
  fullHeight: boolean | undefined,
  fullWidth: boolean | undefined
): string[] => {
  const btnClasses = [styles[variant]];

  if (fullHeight) {
    btnClasses.push(styles.fullHeight);
  }

  if (fullWidth) {
    btnClasses.push(styles.fullWidth);
  }
  return btnClasses;
};

const Button: React.FC<IProps> = ({
  children,
  loading = false,
  type = 'button',
  variant = 'secondary',
  fullWidth = false,
  fullHeight = false,
  onClick,
}) => {
  const btnClasses = buildBtnClasses(variant, fullHeight, fullWidth);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick!(e);
  };

  return (
    <button
      className={btnClasses.join(' ')}
      onClick={handleClick}
      type={type}
      disabled={loading}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};

export default Button;
