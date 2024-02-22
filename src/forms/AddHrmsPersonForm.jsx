import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import HrmsPersonService from '../services/hrmsPersonService'



function AddHrmsPersonForm() {

  const initialValues = {
    email: '',
    password: '',
    name: '',
    lastName:'',
    birthDate: '',
    nationalityNumber: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    lastName:Yup.string().required('Required'),
    birthDate: Yup.string().required('Required'),
    nationalityNumber: Yup.string().required('Required').min(11).max(11)

  })

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const hrmsPersonsService = new HrmsPersonService()
      const response = await hrmsPersonsService.addHrmsPerson(values)
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

  const onSubmit = async (values, { setSubmitting,resetForm }) => {
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