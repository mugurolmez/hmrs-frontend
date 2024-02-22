import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import LinkedinService from '../services/linkedinService'



function AddLinkedinFrom() {

  const initialValues = {
    jobSeekerId: '',
    linkedinAddress: ''


  }

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required'),
    linkedinAddress: Yup.string().required('Required')
  })


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const linkedinService = new LinkedinService()
      const response = await linkedinService.AddLinkedin(values)
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
                type='jobSeekerId'
                label='İş Arayan ID'
                name='jobSeekerId'
              />
               <FormikControl
                control='input'
                type='linkedinAddress'
                label='Linkedin'
                name='linkedinAddress'
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

export default AddLinkedinFrom