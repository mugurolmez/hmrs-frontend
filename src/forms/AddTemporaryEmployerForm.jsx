import React from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl';
import { useDispatch } from 'react-redux';
import { addTemporaryEmployer } from '../store/thunks/temporaryEmployerThunks';

function AddTemporaryEmployerForm() {
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
    corporateName: '',
    webSite: '',
    phoneNumber: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required('Required'),
    password: Yup.string().required('Required'),
    corporateName: Yup.string().required('Required'),
    webSite: Yup.string().required('Required'),
    phoneNumber: Yup.string().matches(/^0[1-9]\d{9}$/, 'Geçerli bir cep telefonu numarası giriniz.').required('Required')
  })

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addTemporaryEmployer(values))
    setSubmitting(false)
    resetForm()
  }

  return (
    <div className='form-control'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl
                control='input'
                type='password'
                label='password'
                name='password'
              />
              <FormikControl
                control='input'
                type='corporateName'
                label='corporateName'
                name='corporateName'
              />
              <FormikControl
                control='input'
                type='webSite'
                label='webSite'
                name='webSite'
              />
              <FormikControl
                control='input'
                type='phoneNumber'
                label='phoneNumber'
                name='phoneNumber'
              />
              <button type='submit' disabled={!formik.isValid}>
                Kayıt Ol
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default AddTemporaryEmployerForm