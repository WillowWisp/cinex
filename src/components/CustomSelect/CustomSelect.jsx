import React, { useState } from 'react';

import classes from './CustomSelect.module.scss';

function CustomSelect(props) {
  // Props:
  // selectWidth: string
  // selectHeight: string
  // placeholder: string

  // const [selectedOption, setSelectedOption] = useState(null);
  const [options, setOptions] = useState([
    {
      label: 'Cinex NYC',
      value: 'abcsdsdasdasd',
      isClosed: true,
    },
    {
      label: 'Hai',
      value: 'Hai',
      isClosed: true,
    },
    {
      label: 'Ba',
      value: 'Ba',
      isClosed: true,
    },
  ]);
  const [inputFieldValue, setInputFieldValue] = useState('');
  const [inputFieldPlaceholder, setInputFieldPlaceholder] = useState(props.placeholder);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const DEFAULT_SELECT_WIDTH = '300px';
  const DEFAULT_SELECT_HEIGHT = '55px';

  const onInputFieldFocus = () => {
    setInputFieldPlaceholder('Type to filter');
    setIsDropdownOpen(true);

    // const newOptions = options.map(option => {
    //   return {
    //     ...option,
    //     isClosed: false,
    //   }
    // });
    // setOptions(newOptions);
    toggleAllOptions(true);
  }

  const onInputFieldBlur = () => {
    setInputFieldPlaceholder(props.placeholder);
    setIsDropdownOpen(false);
  }

  const onInputFieldInput = (event) => {
    setIsDropdownOpen(true);

    setInputFieldValue(event.target.value);

    let inputValue = event.target.value.toLowerCase();
    // let valueSubstring;

    const labelArr = options.map(option => option.label);

    if (inputValue.length > 0) {
      for (let j = 0; j < labelArr.length; j++) {
        if (!(inputValue.substring(0, inputValue.length) === labelArr[j].substring(0, inputValue.length).toLowerCase())) {
          options[j].isClosed = true;
        } else {
          options[j].isClosed = false;
        }
      }
    } else {
      for (let i = 0; i < options.length; i++) {
        options[i].isClosed = false;
      }
    }
    
    setOptions(options);
  }

  const toggleAllOptions = (isOpen) => {
    const newOptions = options.map((option) => {
      return {
        ...option,
        isClosed: !isOpen,
      }
    });
    setOptions(newOptions);
  }

  const onDropdownItemClick = (option) => {
    setInputFieldValue(option.label);
    toggleAllOptions(false);
  }

  return (
    <form
      className={classes['select-element']}
      onSubmit={(event) => {event.preventDefault()}}
      style={{
        width: props.selectWidth ? props.selectWidth : DEFAULT_SELECT_WIDTH,
        height: props.selectHeight ? props.selectHeight : DEFAULT_SELECT_HEIGHT,
      }}
    >
      <input
        className={classes['chosen-value']}
        type="text"
        value={inputFieldValue}
        placeholder={inputFieldPlaceholder}
        onChange={(event) => onInputFieldInput(event)}
        onFocus={() => onInputFieldFocus()}
        onBlur={() => onInputFieldBlur()}
        style={{
          height: props.selectHeight ? props.selectHeight : DEFAULT_SELECT_HEIGHT,
        }}
      />
      <ul
        className={`${classes['value-list']} ${isDropdownOpen ? `${classes['open']}` : ''}`}
        style={{
          paddingInlineStart: 0,
          marginTop: props.selectHeight ? props.selectHeight : DEFAULT_SELECT_HEIGHT,
        }}
      >
        {options.map(option => {
          return (
            <li
              key={option.value}
              className={`${option.isClosed ? `${classes['closed']}` : ''}`}
              onClick={() => onDropdownItemClick(option)}
              style={{height: props.selectHeight ? props.selectHeight : DEFAULT_SELECT_HEIGHT}}
            >{option.label}</li>
          );
        })}
      </ul>
    </form>
  );
}

export default CustomSelect;