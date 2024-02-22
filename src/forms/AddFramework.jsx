import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import FrameworkService from '../services/frameworkService';
import ProgrammingLanguageService from '../services/programmingLanguageService';

function AddFrameworkForm() {
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [id, setId] = useState('');

  const fetchProgrammingLanguages = async (jobSeekerId) => {
    try {
      const { data } = await new ProgrammingLanguageService().getProgrammingLanguageJobSeekerId(jobSeekerId);
      setProgrammingLanguages(data.data);
    } catch (error) {
      console.error('Programlama dilleri getirme hatası:', error);
    }
  };

  const handleChangeJobSeekerId = async (event, formik) => {
    const selectedId = event.target.value;
    setId(selectedId);
    await fetchProgrammingLanguages(selectedId);
  };

  const dropdownOptions = [
  { key: 'Programlama Dili Seçiniz', value: '' },
  ...programmingLanguages.map((programmingLanguage) => ({
    key: programmingLanguage.programmingLanguageName,
    value: programmingLanguage.programmingLanguageId,
  }))];

  const initialValues = {
    jobSeekerId: '',
    programmingLanguageId: '',
    frameworkName: '',
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required'),
    programmingLanguageId: Yup.string().required('Required'),
    frameworkName: Yup.string().required('Required'),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await new FrameworkService().addFramework(values);
      console.log('api yanıtı', response.data);
      console.log('kayıt başarılı');
    } catch (error) {
      console.error('api hatası:', error);
      if (error.response) {
        console.log('Server hatası', error.response.data);
      } else if (error.request) {
        console.log('istek hatası', error.request);
      } else {
        console.log('genel hata', error.message);
      }
    } finally {
      setSubmitting(false);
    }
  };

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await handleSubmit(values, { setSubmitting });
      console.log('Form Data', values);
      resetForm();
      setProgrammingLanguages([]);
    } catch (error) {
      console.error('Form gönderme hatası', error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProgrammingLanguages(id);
    }
  }, [id]);

  return (
    <div className='form-control'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control='input'
              type='jobSeekerId'
              label='İş Arayan ID'
              name='jobSeekerId'
              onChange={(event) => {
                handleChangeJobSeekerId(event, formik);
                formik.handleChange(event);
              }}
            />
            <FormikControl
              control='select'
              label='Programlama Dili'
              name='programmingLanguageId'
              options={dropdownOptions}
              onChange={formik.handleChange}
            />
            <FormikControl
              control='input'
              label='Framework'
              type='frameworkName'
              name='frameworkName'
              onChange={formik.handleChange}
            />
            <button type='submit' disabled={!formik.isValid}>
              Kayıt Et
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddFrameworkForm;
