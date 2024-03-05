import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch } from 'react-redux'
import { addLanguage } from '../store/thunks/languageThunks'



function AddLanguageForm() {

    const dispatch = useDispatch()
    const languageOptions = [
        { key: '1', value: '1' },
        { key: '2', value: '2' },
        { key: '3', value: '3' },
        { key: '4', value: '4' },
        { key: '5', value: '5' }
    ]

    const initialValues = {
        jobSeekerId: '',
        languageName: '',
        languageLevel: ''
    }

    const validationSchema = Yup.object({
        jobSeekerId: Yup.string().required('Required'),
        languageName: Yup.string().required('Required'),
        languageLevel: Yup.string().required('Required')
    })

    const onSubmit = async (values, { setSubmitting, resetForm }) => {

        dispatch(addLanguage(values))
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
                                type='languageName'
                                label='Dil'
                                name='languageName'
                            />
                            <FormikControl
                                control='radio'
                                type='languageLevel'
                                label='Dil Seviyesi'
                                name='languageLevel'
                                options={languageOptions}
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

export default AddLanguageForm