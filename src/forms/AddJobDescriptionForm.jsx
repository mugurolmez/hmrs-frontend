import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { AddJobDescriptions } from '../store/thunks/jobDescriptionThunks'



function AddJobDescriptionForm() {
  const dispatch = useDispatch()

  const initialValues = {
    jobDescriptionName: ''
  }

  const validationSchema = Yup.object({
    jobDescriptionName: Yup.string().required('Required')
  })

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(AddJobDescriptions(values))
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