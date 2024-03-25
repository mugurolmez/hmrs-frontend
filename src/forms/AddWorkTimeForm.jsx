import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addWorkTime, fetchWorkTimes } from '../store/thunks/workTimeThunks'



function AddWorkTimeFrom() {
   const dispatch=useDispatch()

  const initialValues = {
    workTimeName: '',
  }

  const validationSchema = Yup.object({
      workTimeName: Yup.string().required('Required')
  })


  const onSubmit = async (values, { setSubmitting,resetForm }) => {
    dispatch(addWorkTime(values))
    dispatch(fetchWorkTimes())
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
                type='workTimeName'
                label='Çalışma Zamanı'
                name='workTimeName'
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

export default AddWorkTimeFrom