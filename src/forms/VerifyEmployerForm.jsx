import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { useDispatch } from 'react-redux';
import { verifyEmployer } from '../store/thunks/hrmsPersonThunks';
import { setTemporaryEmployers } from '../store/actions/temporaryEmployerActions';
//lisye yenıleme eklenececk
function VerifyEmployerForm({ temporaryEmployerId, closeModal }) {
    const dispatch = useDispatch()

    const initialValues = {
        hrmsPersonId: '',
        temporaryEmployerId: temporaryEmployerId,
        comment: ''
    };

    const validationSchema = Yup.object({
        hrmsPersonId: Yup.string().required('Required'),
        temporaryEmployerId: Yup.string().required('Required'),
        comment: Yup.string().required('Required'),
    });

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        dispatch(verifyEmployer(values))
        dispatch(setTemporaryEmployers())
        setSubmitting(false)
        resetForm()
        closeModal()
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
