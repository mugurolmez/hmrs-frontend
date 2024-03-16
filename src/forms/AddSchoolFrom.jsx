import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addSchool } from '../store/thunks/schoolThunks'



function AddSchoolFrom() {

  const dispatch=useDispatch()
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

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addSchool(values))
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