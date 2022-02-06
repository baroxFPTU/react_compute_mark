import React from 'react';
import PropTypes from 'prop-types';
import { NumberInput, TextInput } from '@mantine/core';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
}

function InputField(props) {
  const {field, type, label, placeholder, disabled} = props;
  const { name } = field;
  console.log(field, type);

  const InputComponent = (props) => {
    if (type === 'number') {
      return <input {...props}/>
    }

    if (type === 'text') {
      return <TextInput {...props}/>
    }
  }

  return (
    <>
      <TextInput
        name={name}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        {...field}
      />
    </>
  );
}

export default InputField;