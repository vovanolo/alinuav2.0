import { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './Combobox.module.css';

import Button from '../Button';

const Combobox = ({ options, placeholder, value, onChange, loading }) => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const handleOptionChange = (e) => {
    onChange(e.target.value);
    showOptions();
  };

  const selectOption = (option) => {
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

  const filteredOptions = options.filter((option) => {
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

        {optionsVisible && (
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

      <Button
        type="button"
        onClick={value ? clearSelectedOption : toggleOptions}
        loading={loading}
      >
        {value ? 'X' : optionsVisible ? 'Hide' : 'Show'}
      </Button>
    </div>
  );
};

Combobox.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
};

Combobox.defaultProps = {
  options: [],
  placeholder: 'Select an option',
  loading: false,
};

export default Combobox;
