import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { useDispatch, useSelector } from 'react-redux';
import { addFramework } from '../store/thunks/frameworkThunks';
import { fetchProgramminglanguagesByJobSeekerId } from '../store/thunks/programmingLanguagesThunks';




function AddFrameworkForm() {

  const dispatch = useDispatch();
  const programmingLanguagesData = useSelector((state) => state.programmingLanguages.programmingLanguagesItems);

  const handleChangeJobSeekerId = async (event, formik) => {
    const selectedId = event.target.value;
    dispatch(fetchProgramminglanguagesByJobSeekerId(selectedId));
  };

  useEffect(() => {
  }, [programmingLanguagesData]);

  const dropdownOptions = [
    { key: 'Programlama Dili Seçiniz', value: '' },
    ...(programmingLanguagesData && Array.isArray(programmingLanguagesData) && programmingLanguagesData.length > 0
      ? programmingLanguagesData.map((programmingLanguage) => ({
          key: programmingLanguage.programmingLanguageName,
          value: programmingLanguage.programmingLanguageId,
        }))
      : [])
  ];

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

  const handleSubmit = async (values, { setSubmitting,resetForm }) => {
    dispatch(addFramework(values));
    setSubmitting(false);
    resetForm()
    
  };

  return (
    <div className='form-control'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
