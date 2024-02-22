import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import SchoolService from '../services/schoolService'



function AddSchoolFrom() {

  const initialValues = {
    jobSeekerId: '',
    schoolName: '',
    schoolDepartment: '',
    schoolStartYear: '',
    schoolYearOfGraduation: ''

  }

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required'),
    schoolName: Yup.string().required('Required'),
    schoolDepartment: Yup.string().required('Required'),
    schoolStartYear: Yup.string().required('Required'),
    schoolYearOfGraduation: Yup.string()


  })


  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const schoolService = new SchoolService()
      const response = await schoolService.AddSchool(values)
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
                type='schoolName'
                label='Okul Adı'
                name='schoolName'
              />
               <FormikControl
                control='input'
                type='schoolDepartment'
                label='Bölüm'
                name='schoolDepartment'
              />
               <FormikControl
                control='input'
                type='schoolStartYear'
                label='Okul Başlangıç Yılı'
                name='schoolStartYear'
              />
               <FormikControl
                control='input'
                type='schoolYearOfGraduation'
                label='Mezuniyet Yılı'
                name='schoolYearOfGraduation'
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

export default AddSchoolFrom