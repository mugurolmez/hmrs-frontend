import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import UserService from '../services/userService'
import { useNavigate } from 'react-router-dom'



function AddUserForm() {

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
    const navigate=new useNavigate()
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      let userService = new UserService()
      const response = await userService.addUser(values)
      console.log('api yanıtı', response.data)
      console.log("kayıt başarılı")
      navigate("/userlist")
    } catch (error) {
      console.error('api hatası:', error)
      if (error.response) {
        console.log('Server hatası', error.response.data)
      } else if (error.request) {
        console.log('istek hatası', error.request)
      } else {
        console.log("genel hata", error.message)
      }
    } finally {
      setSubmitting(false)
    }


  }

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await handleSubmit(values, { setSubmitting })
      console.log('Form Data', values)
     

    } catch (error) {
      console.error('Form gonderme hatası', error)
    }

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