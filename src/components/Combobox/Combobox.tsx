import { useState } from 'react';

import styles from './Combobox.module.css';

import Button from '../Button';

interface IProps {
  placeholder?: string;
  loading?: boolean;
  value: string;
  options: string[];
  onChange: (option: string) => void;
}

const Combobox: React.FC<IProps> = ({
  placeholder = 'Select an option',
  loading = false,
  value,
  options,
  onChange,
}) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    showOptions();
  };

  const selectOption = (option: string) => {
    onChange(option);
    hideOptions();
  };

  const clearSelectedOption = () => {
    onChange('');
    showOptions();
  };

  const showOptions = () => {
    setOptionsVisible(true);
  };

  const hideOptions = () => {
    setOptionsVisible(false);
  };

  const toggleOptions = () => {
    setOptionsVisible((visible) => !visible);
  };

  const filteredOptions = options.filter((option: string) => {
    return option.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div className={styles.combobox}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={handleOptionChange}
          className={optionsVisible ? styles.inputWithList : styles.input}
        />

        {optionsVisible && !loading && (
          <ul className={styles.list}>
            {filteredOptions.map((option) => (
              <li key={option} className={styles.listItem}>
                <button
                  type="button"
                  onClick={() => selectOption(option)}
                  className={styles.listItemBtn}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={styles.btnContainer}>
        <Button
          type="button"
          onClick={value ? clearSelectedOption : toggleOptions}
          loading={loading}
          fullHeight
        >
          {value ? 'X' : optionsVisible ? 'Hide' : 'Show'}
        </Button>
      </div>
    </div>
  );
};

Combobox.defaultProps = {
  options: [],
  placeholder: 'Select an option',
  loading: false,
};

export default Combobox;
