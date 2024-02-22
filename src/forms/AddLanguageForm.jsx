import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import LanguageService from '../services/languageService'



function AddLanguageForm() {
    
    const radioOptions = [
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


    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const languageService = new LanguageService()
            const response = await languageService.AddLanguage(values)
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
                                type='languageName'
                                label='Dil'
                                name='languageName'
                            />
                              <FormikControl
                                control='radio'
                                type='languageLevel'
                                label='Dil Seviyesi'
                                name='languageLevel'
                                options={radioOptions}
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