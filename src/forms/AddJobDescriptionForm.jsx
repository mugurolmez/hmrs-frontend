import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import JobDescriptionService from '../services/jobDescriptionService'



function AddJobDescriptionForm() {

  const initialValues = {
    jobDescriptionName: ''
  }

  const validationSchema = Yup.object({
    jobDescriptionName: Yup.string().required('Required')
  })


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const jobDescriptionService = new JobDescriptionService()
      const response = await jobDescriptionService.addJobDescription(values)
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
                type='jobDescriptionName'
                label='İş Tanımı Adı'
                name='jobDescriptionName'
              />

              <button type='submit' disabled={!formik.isValid}>
                Ekle
              </button>
            </Form>
          )
        }}
      </Formik>
    </div>

  )
}

export default AddJobDescriptionForm