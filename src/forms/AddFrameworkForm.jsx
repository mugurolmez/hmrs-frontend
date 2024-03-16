import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { useDispatch, useSelector } from 'react-redux';
import { addFramework } from '../store/thunks/frameworkThunks';
import { getProgramminglanguagesByJobSeekerId } from '../store/thunks/programmingLanguagesThunks';
//jobseeker veri girip silince sorgu atması engellenecek

function AddFrameworkForm() {

  const dispatch = useDispatch();
  const programmingLanguagesData = useSelector((state) => state.programmingLanguage.programmingLanguageItems);
  console.log("programming languages",programmingLanguagesData)

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event)

    if (jobSeekerId.trim() !== '') {
      dispatch(getProgramminglanguagesByJobSeekerId(jobSeekerId));
    }

  };


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

  const onSubmit = async (values, { setSubmitting,resetForm }) => {
    dispatch(addFramework(values));
    setSubmitting(false);
    resetForm()
  };

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
              onBlur={formik.handleBlur}
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
