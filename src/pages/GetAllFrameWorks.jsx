import React, { useState } from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableCell, TableBody, Table } from 'semantic-ui-react';
import FrameworkService from '../services/frameworkService';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

const FrameworkList = () => {
  
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [, setError] = useState('');

  const fetchFrameworks = async (jobSeekerId) => {
    try {
      const { data } = await new FrameworkService().getFrameworkJobSeekerId(jobSeekerId);

      if (data.data.length === 0) {
        setError('Bulunamadı');
      } else {
        setProgrammingLanguages(data.data);
        setError('');
      }
    } catch (error) {
      console.error('Framework getirme hatası:', error);
      setProgrammingLanguages([]);
      setError('Framework Bilgisi bulunamadı');
    }
  };

  const handleChangeJobSeekerId = async (event, formik) => {
    const selectedId = event.target.value;
    formik.handleChange(event);
    await fetchFrameworks(selectedId);
  };

  const initialValues = {
    jobSeekerId: ''
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required')
  });

  const handleFormSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await handleChangeJobSeekerId({ target: { value: values.jobSeekerId } });
    setSubmitting(false);
  };

  return (
    <div className='form-control'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <FormikControl
              control='input'
              type='jobSeekerId'
              label='İş Arayan ID'
              name='jobSeekerId'
              onChange={(event) => handleChangeJobSeekerId(event, formik)}
            />
   
          </Form>
        )}
      </Formik>

      <Table celled structured>
        <TableHeader>
          <TableRow>
            <TableHeaderCell >Languages</TableHeaderCell>
            {programmingLanguages.map((language, index) => (
              <TableHeaderCell key={index}>{language.programmingLanguageName}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell >Frameworks</TableCell>
            {programmingLanguages.map((language, index) => (
              <TableCell key={index}>
                {language.frameWorks.map((framework, subIndex) => (
                  <div key={subIndex}>{framework.frameworkName}</div>
                ))}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default FrameworkList;
