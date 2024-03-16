import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addWorkExperience } from '../store/thunks/workExperienceThunks'

function WorkExperinceAddForm() {

  const dispatch = useDispatch()

  const initialValues = {
    jobSeekerId: "",
    companyName: "",
    jobPosition: "",
    workStartYear: "",
    yearOfDeparture: ""
  }

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required("Zorunlu Alan"),
    companyName: Yup.string().required("Zorunlu Alan"),
    jobPosition: Yup.string().required("Zorunlu Alan"),
    workStartYear: Yup.string().required("Zorunlu Alan"),
    yearOfDeparture: Yup.string()

  })

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    dispatch(addWorkExperience(values))
    setSubmitting(false)
    resetForm()
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