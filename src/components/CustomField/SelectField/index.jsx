import { Select } from '@mantine/core';
import PropTypes from 'prop-types';
import React from 'react';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  data: PropTypes.array
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  data: []
}

function SelectField(props) {
  const { field, form, label, placeholder, size, required, className, data, searchable } = props;
  const { name } = field;
  const { errors, touched } = form;

  const errorMessage = (errors[name] && touched[name]) ? errors[name] : null;

  const handleChangeOption = (selectedOption) => {
    const selectedValue = selectedOption.value || selectedOption;
    const target = {
      target: {
        name: name,
        value: selectedValue
      }
    }

    field.onChange(target);
  }

  return (
    <Select
      name={name}
      label={label}
      placeholder={placeholder}
      size={size}
      required={required}
      className={className}
      searchable={searchable}
      error={errorMessage}

      {...field}
      onChange={handleChangeOption}
      data={data}
    />
  );
}

export default SelectField;