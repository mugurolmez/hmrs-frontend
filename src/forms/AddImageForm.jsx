import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl';
import { useDispatch } from 'react-redux';
import { addImage } from '../store/thunks/imageThunks';


//resim ekleniyor ama console hata veriyor bakılacak
function AddImageForm() {
   const dispatch = useDispatch()

    const initialValues = {
        jobSeekerId: '',
        image: ''
    }

    const validationSchema = Yup.object({
        jobSeekerId: Yup.string().required('Required'),
        image: Yup.mixed().required('Required'),

    })

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        dispatch(addImage(values))
        console.log('add values',values)
        resetForm()
        setSubmitting(false)
    };

    return (
        <div className='form-control'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {
                    formik => {
                        return (
                            <Form>

                                <FormikControl
                                    control='imageInput'
                                    label='Profil Resmi'
                                    type='image'
                                    name='image'
                                />

                                <FormikControl
                                    control='input'
                                    type='jobSeekerId'
                                    label='JobSeekerId'
                                    name='jobSeekerId'
                                />

                                <button type='submit' disabled={!formik.isValid} >Upload</button>

                            </Form>

                        )

                    }
                }

            </Formik>


        </div>
    )
}

export default AddImageForm