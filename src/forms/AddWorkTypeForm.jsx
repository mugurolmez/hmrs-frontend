import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addWorkType } from '../store/thunks/workTypeThunks'



function AddWorkTypeFrom() {
  const dispatch=useDispatch()
  
  const initialValues = {
    workTypeName: '',
  }

  const validationSchema = Yup.object({
      workTypeName: Yup.string().required('Required')
  })

  const onSubmit = async (values, { setSubmitting,resetForm }) => {
    dispatch(addWorkType(values))
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
                type='workTypeName'
                label='Çalışma Tipi'
                name='workTypeName'
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

export default AddWorkTypeFrom