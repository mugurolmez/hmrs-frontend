import React, { useEffect, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../component/FormikControl'
import JobAdvetisementService from '../services/jobAdvertisementService'
import CitiesService from '../services/citiesService'
import JobDescriptionService from '../services/jobDescriptionService'
import WorkTypeService from '../services/workTypeService'
import WorkTimeService from '../services/workTimeService'




function AddJobAdvertisementForm() {
    const [cities, setCities] = useState([])
    const [jobDescriptions, setJobDescriptions] = useState([])
    const [workTypes, setWorkTypes] = useState([])
    const [workTimes, setWorkTimes] = useState([])

    useEffect(() => {
        let cityService = new CitiesService();
        cityService.getCities().then(result => setCities(result.data.data));
    }, []);

    useEffect(() => {
        let jobDescriptionService = new JobDescriptionService();
        jobDescriptionService.getAllJobDescritions().then(result => setJobDescriptions(result.data.data));
    }, []);

    useEffect(() => {
        let workTypeService = new WorkTypeService();
        workTypeService.getAllWorkType().then(result => setWorkTypes(result.data.data));
    }, []);

    useEffect(() => {
        let workTimeService = new WorkTimeService();
        workTimeService.getAAllWorkTime().then(result => setWorkTimes(result.data.data));
    }, []);

    const cityOptions = [
        { key: 'Şehir Seçiniz', value: '' },
        ...cities.map((city) => ({
            key: city.cityName,
            value: city.id
        }))];

    const jobDescriptionOptions = [
        { key: 'İş Tanımı Seçiniz', value: '' },
        ...jobDescriptions.map((jobDescription) => ({
            key: jobDescription.jobDescriptionName,
            value: jobDescription.jobDescriptionId
        }))];

    const workTypeOptions = [
        { key: 'Çalışma Tipi Seçiniz', value: '' },
        ...workTypes.map((workType) => ({
            key: workType.workTypeName,
            value: workType.workTypeId
        }))];

    const workTimeOptions = [
        { key: 'Çalışma Zamanı Seçiniz', value: '' },
        ...workTimes.map((workTime) => ({
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

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const jobAdvertisementService = new JobAdvetisementService()
            const response = await jobAdvertisementService.addJobAdvertisement(values)
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