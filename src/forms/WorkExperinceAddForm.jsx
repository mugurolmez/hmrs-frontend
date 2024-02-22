import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

import FormikControl from '../component/FormikControl'
import WorkExperienceService from '../services/workExperinceService'

function WorkExperinceAddForm() {
 
  
 
  const initialValues = {
    jobSeekerId: "",
    companyName: "",
    jobPosition: "",
    workStartYear: "",
    yearOfDeparture: ""
  }
  
  const validationSchema = Yup.object( {
    jobSeekerId: Yup.string().required("Zorunlu Alan"),
    companyName: Yup.string().required("Zorunlu Alan"),
    jobPosition: Yup.string().required("Zorunlu Alan"),
    workStartYear: Yup.string().required("Zorunlu Alan"),
    yearOfDeparture: Yup.string()
  
  })
  
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const workExperienceService = new WorkExperienceService()
      const response = await workExperienceService.addWorkExperience(values)
      
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
    <div>
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
                label='JobSeekerId'
                name='jobSeekerId'

              />
             <FormikControl
                control='input'
                type='companyName'
                label='CompanyName'
                name='companyName'

              />
              <FormikControl
                control='input'
                type='jobPosition'
                label='Job Position'
                name='jobPosition'

              />
              <FormikControl
                control='input'
                type='workStartYear'
                label='Work Start Year'
                name='workStartYear'

              />
              <FormikControl
                control='input'
                type='yearOfDeparture'
                label='Year Of Departure'
                name='yearOfDeparture'

              />


              <button type='submit'>Ekle</button>
            </Form>
          )
        }}

      </Formik>
    </div>
  )
}

export default WorkExperinceAddForm