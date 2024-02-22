import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import JobDescriptionService from '../services/jobDescriptionService';


function GetJobDescriptionById() {
  const initialValues = {
    jobDescriptionId: ''
  };

  const validationSchema = Yup.object({
    jobDescriptionId: Yup.string().required('Zorunlu Alan')
  });

  const [jobDescription, setJobDescription] = useState({});
  const [showList, setShowList] = useState(false);

  const fetchjobDescription = async (jobDescriptionId) => {
    try {
      let jobDescriptionService = new JobDescriptionService();
      const result = await jobDescriptionService.getJobDescriptionById(jobDescriptionId);
      setJobDescription(result.data.data);
      setShowList(true);
    } catch (error) {
      console.error('İş  getirme hatası:', error);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await fetchjobDescription(values.jobDescriptionId);
    } catch (error) {
      console.error('Form gönderme hatası', error);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    // Sayfa başlangıcında iş tecrübelerini gösterme
    setShowList(false);
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {formik => (
          <Form>
            <FormikControl
              control='input'
              type='jobDescriptionId'
              label='İş Tanımı ID'
              name='jobDescriptionId'
            />
            <button type='submit'>bul</button>
          </Form>
        )}
      </Formik>

      {showList && (
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>İş Tanımı ID</TableHeaderCell>
              <TableHeaderCell> İş Tanımı </TableHeaderCell>
           
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              <TableRow key={jobDescription.jobDescriptionId}>
                <TableCell>{jobDescription.jobDescriptionId}</TableCell>
                <TableCell>{jobDescription.jobDescriptionName}</TableCell>
              
              </TableRow>
            }
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableHeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <MenuItem as='a' icon>
                    <Icon name='chevron left' />
                  </MenuItem>
                  <MenuItem as='a'>1</MenuItem>
                  <MenuItem as='a'>2</MenuItem>
                  <MenuItem as='a'>3</MenuItem>
                  <MenuItem as='a'>4</MenuItem>
                  <MenuItem as='a' icon>
                    <Icon name='chevron right' />
                  </MenuItem>
                </Menu>
              </TableHeaderCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </div>
  );
}

export default  GetJobDescriptionById
;
