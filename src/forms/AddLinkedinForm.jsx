import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addLinkedin } from '../store/thunks/linkedinThunks'



function AddLinkedinFrom() {
  const dispatch = useDispatch()

  const initialValues = {
    jobSeekerId: '',
    linkedinAddress: ''
  }

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required'),
    linkedinAddress: Yup.string().required('Required')
  })

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addLinkedin(values))
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