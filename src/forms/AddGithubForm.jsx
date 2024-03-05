import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'

import { useDispatch } from 'react-redux'
import { addGithub } from '../store/thunks/githubThunks'


function AddGithubFrom() {
  const dispatch = useDispatch()

  const initialValues = {
    jobSeekerId: '',
    githubAddress: ''
  }

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required'),
    githubAddress: Yup.string().required('Required')
  })


  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addGithub(values));
    setSubmitting(false);
    resetForm()
  };

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
                type='githubAddress'
                label='Github'
                name='githubAddress'
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

export default AddGithubFrom