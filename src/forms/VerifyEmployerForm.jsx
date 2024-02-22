import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import HrmsPersonService from '../services/hrmsPersonService';

function VerifyEmployerForm({temporaryEmployerId,closeModal,updateTemporaryEmployers}) {


    const initialValues = {
        hrmsPersonId: '',
        temporaryEmployerId:temporaryEmployerId,
        comment: ''
    };

    const validationSchema = Yup.object({
        hrmsPersonId: Yup.string().required('Required'),
        temporaryEmployerId: Yup.string().required('Required'),
        comment: Yup.string().required('Required'),
    });

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const response = await new HrmsPersonService().verifyEmployer(values);
            console.log('api yanıtı', response.data);
            console.log('kayıt başarılı');
            
        } catch (error) {
            console.error('api hatası:', error);
            if (error.response) {
                console.log('Server hatası', error.response.data);
            } else if (error.request) {
                console.log('istek hatası', error.request);
            } else {
                console.log('genel hata', error.message);
            }
        } finally {
            setSubmitting(false);
        }
    };

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await handleSubmit(values, { setSubmitting });
            console.log('Form Data', values);
            resetForm();
            closeModal()
            updateTemporaryEmployers()
        } catch (error) {
            console.error('Form gönderme hatası', error);
        }
    };


    return (
        <div className='form-control'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {(formik) => (
                    <Form>
                        <FormikControl
                            control='input'
                            type='hrmsPersonId'
                            label='Hrms Personel ID'
                            name='hrmsPersonId'

                        />
                        <FormikControl
                            control='input'
                            type='temporaryEmployerId'
                            label='Geçici İş Veren ID'
                            name='temporaryEmployerId'


                        />
                        <FormikControl
                            control='input'
                            label='Açıklama'
                            type='comment'
                            name='comment'

                        />
                        <button type='submit' disabled={!formik.isValid}>
                            Onayla
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default VerifyEmployerForm;
