import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, FastField } from 'formik';
import InputField from '../../../../components/InputField';
import NumberField from '../../../../components/InputField/NumberField';
import { Group } from '@mantine/core';

GraduatedCalcForm.propTypes = {
  
};

function GraduatedCalcForm(props) {
  const initialValues = {
    math: '',
    literature: '',
    language: '',
    combination: ''
  }

  return (
    <Formik initialValues={initialValues}>
      {
        formikValues => {
          const {values, errors, touched, handleChange} = formikValues;
          console.log('all values: ',values);
          return (
            <Form>
              <Group>
              <FastField
                name="math"
                component={NumberField}

                label="Toán"
                size="md"
                required
              />
              <FastField
                name="literature"
                component={NumberField}

                label="Văn"
                size="md"
                required
              />
              </Group>
              <FastField
                name="language"
                component={NumberField}

                label="Ngoại ngữ"
                size="md"
                required
              />
              <FastField
                name="combination"
                component={NumberField}

                label="Tổ hợp"
                size="md"
                required
              />
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default GraduatedCalcForm;