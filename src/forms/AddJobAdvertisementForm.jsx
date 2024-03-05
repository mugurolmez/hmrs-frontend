import React, { useEffect } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCities } from '../store/thunks/cityThunks'
import { fetchJobDescriptions } from '../store/thunks/jobDescriptionThunks'
import { fetchWorkTypes } from '../store/thunks/workTypeThunks'
import { fetchWorkTimes } from '../store/thunks/workTimeThunks'
import { AddJobAdvertisement } from '../store/thunks/jobAdvertisementThunks'

function AddJobAdvertisementForm() {
    const dispatch = useDispatch()
    const cityData = useSelector((state) => state.city.cityItems)
    const jobDescriptionData = useSelector((state) => state.jobDescription.jobDescriptionItems)
    const workTypeData = useSelector((state) => state.workType.workTypeItems)
    const workTimeData = useSelector((state) => state.workTime.workTimeItems)

    useEffect(() => {
        dispatch(fetchCities())
        dispatch(fetchJobDescriptions())
        dispatch(fetchWorkTypes())
        dispatch(fetchWorkTimes())
    }, [dispatch])

    const cityOptions = [
        { key: 'Şehir Seçiniz', value: '' },
        ...cityData.map((city) => ({
            key: city.cityName,
            value: city.id
        }))];

    const jobDescriptionOptions = [
        { key: 'İş Tanımı Seçiniz', value: '' },
        ...jobDescriptionData.map((jobDescription) => ({
            key: jobDescription.jobDescriptionName,
            value: jobDescription.jobDescriptionId
        }))];

    const workTypeOptions = [
        { key: 'Çalışma Tipi Seçiniz', value: '' },
        ...workTypeData.map((workType) => ({
            key: workType.workTypeName,
            value: workType.workTypeId
        }))];

    const workTimeOptions = [
        { key: 'Çalışma Zamanı Seçiniz', value: '' },
        ...workTimeData.map((workTime) => ({
            key: workTime.workTimeName,
            value: workTime.workTimeId
        }))];

    const initialValues = {
        employerId: '',
        jobDescriptionFeatures: '',
        minSalary: '',
        maxSalary: '',
        numberOfPositions: '',
        applicationDeadline: '',
        jobDescriptionId: '',
        cityId: '',
        workTypeId: '',
        workTimeId: ''
    }

    const validationSchema = Yup.object({
        employerId: Yup.string().required('Required'),
        jobDescriptionFeatures: Yup.string().required('Required'),
        minSalary: Yup.string().required('Required'),
        maxSalary: Yup.string().required('Required'),
        numberOfPositions: Yup.string().required('Required'),
        applicationDeadline: Yup.string().required('Required'),
        jobDescriptionId: Yup.string().required('Required'),
        cityId: Yup.string().required('Required'),
        workTypeId: Yup.string().required('Required'),
        workTimeId: Yup.string().required('Required')
    })

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        dispatch(AddJobAdvertisement(values))
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
                                type='employerId'
                                label='İş VerenId'
                                name='employerId'
                            />
                            <FormikControl
                                control='input'
                                label='Açıklama '
                                type='jobDescriptionFeatures'
                                name='jobDescriptionFeatures'
                            />
                            <FormikControl
                                control='input'
                                type='minSalary'
                                label='Minimum Maaş'
                                name='minSalary'
                            />
                            <FormikControl
                                control='input'
                                label='Maksimum Maaş'
                                type='maxSalary'
                                name='maxSalary'
                            />
                            <FormikControl
                                control='input'
                                type='numberOfPositions'
                                label='Açık Pozisyon Adeti'
                                name='numberOfPositions'
                            />
                            <FormikControl
                                control='date'
                                label='İlan Bitiş Tarihi'
                                type='applicationDeadline'
                                name='applicationDeadline'
                            />
                            <FormikControl
                                control='select'
                                label='İş Tanımı'
                                type='jobDescriptionId'
                                name='jobDescriptionId'
                                options={jobDescriptionOptions}
                            />
                            <FormikControl
                                control='select'
                                type='cityId'
                                label='Şehir Adı'
                                name='cityId'
                                options={cityOptions}
                            />
                            <FormikControl
                                control='select'
                                label='Çalışma Tipi'
                                type='workTypeId'
                                name='workTypeId'
                                options={workTypeOptions}

                            />
                            <FormikControl
                                control='select'
                                label='Çalışma Zamanı'
                                type='workTimeId'
                                name='workTimeId'
                                options={workTimeOptions}
                            />

                            <button type='submit' disabled={!formik.isValid}>
                                Kayıt Ol
                            </button>
                        </Form>
                    )
                }}
            </Formik>
        </div>

    )
}

export default AddJobAdvertisementForm