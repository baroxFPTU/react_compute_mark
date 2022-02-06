import { Select } from '@mantine/core';
import { FastField, Field, Form, Formik } from 'formik';
import React from 'react';
import CustomGrid from '../../../../components/CustomGrid';
import NumberField from '../../../../components/CustomField/NumberField';
import SelectField from '../../../../components/CustomField/SelectField';
import { GRADUATED_ENCOURAGE_MARK_OPTIONS, GRADUATED_PIOR_MARK_OPTIONS, GRADUATED_TARGET_OPTIONS } from '../../../../constants/global';

function GraduatedCalcForm(props) {
  const initialValues = {
    target: 'thpt',
    math: '',
    literature: '',
    language: '',
    combination: '',
    encouraged: 0,
    pior: 0
  }

  return (
    <Formik initialValues={initialValues}>
      {
        formikValues => {
          const {values, errors, touched, handleChange} = formikValues;

          return (
            <Form>
              <FastField
                name="target"
                component={SelectField}

                label="Đối tượng xét tuyển"
                size="md"
                data={GRADUATED_TARGET_OPTIONS}
                />             
              <CustomGrid>
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
              </CustomGrid>
              <CustomGrid>
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
              </CustomGrid>
              <CustomGrid>
                <FastField
                  name="encouraged"
                  component={SelectField}

                  label="Điểm khuyến khích"
                  size="md"
                  data={GRADUATED_ENCOURAGE_MARK_OPTIONS}
                  />
                <FastField
                  name="pior"
                  component={SelectField}

                  label="Điểm ưu tiên"
                  size="md"
                  data={ GRADUATED_PIOR_MARK_OPTIONS}
                />
              </CustomGrid>
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default GraduatedCalcForm;