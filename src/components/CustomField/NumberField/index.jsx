import { NumberInput } from '@mantine/core';
import PropTypes from 'prop-types';
import React from 'react';

NumberField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

NumberField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
}

function NumberField(props) {
  const {
    form,
    field,
    label, 
    placeholder, 
    disabled, 
    size, 
    required,
    className,
    } = props;
  const { name } = field;
  const { errors, touched} = form;

  const errorMessage = (errors[name] && touched[name]) ? errors[name] : null;

  return (
    <NumberInput
      label={label}
      name={name}
      placeholder={placeholder}
      disabled={disabled}
      size={size}
      min={0}
      step={0.1}
      max={10}
      precision={2}
      required={required}
      className={className}
      error={errorMessage}
      hideControls
      {...field}
      onChange={(option, action) => {
        form.setFieldValue(name, option);
      }}
    />
  );
}

export default NumberField;