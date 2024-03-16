import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addHrmsPerson } from '../store/thunks/hrmsPersonThunks'



function AddHrmsPersonForm() {
  const dispatch = useDispatch()

  const initialValues = {
    email: '',
    password: '',
    name: '',
    lastName: '',
    birthDate: '',
    nationalityNumber: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    birthDate: Yup.string().required('Required'),
    nationalityNumber: Yup.string().required('Required').min(11).max(11)

  })

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addHrmsPerson(values))
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
                label='Parola'
                type='password'
                name='password'
              />
              <FormikControl
                control='input'
                type='name'
                label='Ad'
                name='name'
              />
              <FormikControl
                control='input'
                label='Soyad'
                type='lastName'
                name='lastName'
              />
              <FormikControl
                control='date'
                type='birthDate'
                label='Doğum Tarihi'
                name='birthDate'
              />
              <FormikControl
                control='input'
                label='Tc Kimlik No'
                type='nationalityNumber'
                name='nationalityNumber'
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

export default AddHrmsPersonForm