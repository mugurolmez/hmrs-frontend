import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addUser } from '../store/thunks/userThunks'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../store/actions/userActions'

function AddUserForm() {
  const dispatch = useDispatch()
  const navigate=useNavigate()

  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required'),
  })
//eklemeden sonra Liste Yenileme eklenecek
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addUser(values))
    setSubmitting(false)
    resetForm()
    dispatch(setUser())
    navigate('/userlist')
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

export default AddUserForm