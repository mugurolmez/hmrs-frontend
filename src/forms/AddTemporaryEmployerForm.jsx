import React from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl';
import TemporaryEmployerService from '../services/temporaryEmployerService';

function AddTemporaryEmployerForm() {
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
    phoneNumber: Yup.string().required('Required')

  })


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const temporaryEmployerService = new TemporaryEmployerService()
      const response = await temporaryEmployerService.addTemporaryEployer(values)
      console.log('api yanıtı', response.data)
      console.log("kayıt başarılı")

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

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      await handleSubmit(values, { setSubmitting })
      console.log('Form Data', values)
      resetForm()

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