import { Button, Center } from '@mantine/core';
import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import NumberField from '../../../../components/CustomField/NumberField';
import SelectField from '../../../../components/CustomField/SelectField';
import CustomGrid from '../../../../components/CustomGrid';
import { GRADUATED_ENCOURAGE_MARK_OPTIONS, GRADUATED_PRIOR_MARK_OPTIONS, GRADUATED_TARGET_OPTIONS } from '../../../../constants/global';
import * as Yup from 'yup';
import GraduatedMark from '../../../../services/Calculating/GraduatedMark';

function GraduatedCalcForm(props) {
  const [target, setTarget] = useState('thpt');
  const initialValues = {
    target: target,
    math: '',
    literature: '',
    language: '',
    average: '',
    combination: '',
    encouraged: -1,
    prior: -1,
  };

  const validationSchema = Yup.object().shape({
    math: Yup.number().required('Bạn quên nhập điểm Toán nè!'),
    literature: Yup.number().required('Bạn quên nhập điểm Văn nè!'),
    language: Yup.number().when('target', {
      is: 'thpt',
      then: Yup.number().required('Bạn quên nhập điểm Ngoại Ngữ nè!')
    }),
    average: Yup.number().required('Điểm trung bình lớp 12 của bạn là?'),
    combination: Yup.number().required('Bạn quên nhập điểm tổ hợp'),
    encouraged: Yup.number().moreThan(-1,'Vui lòng chọn điểm khuyến khích').required('Vui lòng chọn điểm khuyến khích'),
    prior: Yup.number().moreThan(-1,'Vui lòng chọn điểm ưu tiên').required('Vui lòng chọn điểm ưu tiên')
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => {
      console.log(values);
      GraduatedMark(values.target, values);
    }}>
      {
        formikValues => {
          const {values, errors, touched, handleChange} = formikValues;

          // if (values.target !== target) {
          //   console.log(target);
          //   setTarget(values.target);
          // }

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
                />
                <FastField
                  name="literature"
                  component={NumberField}

                  label="Văn"
                  size="md"
                />
              </CustomGrid>
              <CustomGrid fluid={values.target !== 'thpt'}>
                {values.target === 'thpt' && <FastField
                  name="language"
                  component={NumberField}

                  label="Ngoại ngữ"
                  size="md"
                />}
                <FastField
                  name="combination"
                  component={NumberField}

                  label="Tổ hợp"
                  size="md"
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
                  name="prior"
                  component={SelectField}

                  label="Điểm ưu tiên"
                  size="md"
                  data={ GRADUATED_PRIOR_MARK_OPTIONS}
                />
              </CustomGrid>
              <FastField
                  name="average"
                  component={NumberField}

                  label="Trung bình lớp 12"
                  size="md"
                />
              <Center mt="xl">
                <Button type="submit" color="indigo" size="md">Hoàn tất</Button>
              </Center>
            </Form>
          )
        }
      }
    </Formik>
  );
}

export default GraduatedCalcForm;