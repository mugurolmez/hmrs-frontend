import axios from 'axios';
import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl';



function AddImageForm() {


    const initialValues = {
        jobSeekerId: '',
        image: ''
    }

    const validationSchema = Yup.object({
        jobSeekerId: Yup.string().required('Required'),
        image: Yup.mixed().required('Required'),

    })

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {

            const formData = new FormData();
            formData.append('jobSeekerId', values.jobSeekerId);
            formData.append('multipartFile', values.image);
            
            const response = await axios.post('http://localhost:8080/image/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            console.log('Image upload response:', response.data);
         resetForm()

        } catch (error) {
            console.error('Image upload error:', error);
        } finally {
            setSubmitting(false)

        }
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