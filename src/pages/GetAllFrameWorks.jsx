import React from 'react';
import { TableRow, TableHeaderCell, TableHeader, TableCell, TableBody, Table } from 'semantic-ui-react';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllFrameworkJobSeekerId } from '../store/thunks/frameworkThunks';

//jobseeker ıd bos olunca sorgu atması engellenecek
//ındex yerıne frameworkıd ile key olusturulacak
const FrameworkList = () => {
  const dispatch=useDispatch()
  const frameWorks=useSelector((state)=>state.framework.frameworkItems)

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getAllFrameworkJobSeekerId(jobSeekerId));

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

      {frameWorks && frameWorks.length > 0 && (
      <Table celled structured>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Programlama Dili</TableHeaderCell>
            <TableHeaderCell>Frameworks</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {frameWorks.map((language,index) => (
            <TableRow key={index}>
              <TableCell>{language.programmingLanguageName}</TableCell>
              <TableCell>
                {language.frameWorks && language.frameWorks.length > 0 ? (
                  language.frameWorks.map((framework, subIndex) => (
                    <div key={subIndex}>{framework.frameworkName}</div>
                  ))
                ) : (
                  <div>Framework bilgisi yok</div>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )}

    </div>
  );
                }

export default FrameworkList;
