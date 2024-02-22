import React, { useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import CoverLetterService from '../services/coverLetterService';


function GetCoverLetterByJobSeekerId() {
  const [coverLetter, setCoverLetter] = useState({});
  const [, setError] = useState('');

  const fetchCoverLetter = async (jobSeekerId) => {
    try {
      const { data } = await new CoverLetterService().getCoverLetterByJobSeekerId(jobSeekerId);

      if (data.data.length === 0) {
        setError('Bulunamadı');
      } else {
        setCoverLetter(data.data);
        setError('');
      }
    } catch (error) {
      console.error('Framework getirme hatası:', error);
      setCoverLetter([]);
      setError('Framework Bilgisi bulunamadı');
    }
  };

  const handleChangeJobSeekerId = async (event, formik) => {
    const selectedId = event.target.value;
    formik.handleChange(event);
    await fetchCoverLetter(selectedId);
  };

  const initialValues = {
    jobSeekerId: ''
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required')
  });


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
       
      >
        {formik => (
          <Form>
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

      { 
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>GitHub ID</TableHeaderCell>
              <TableHeaderCell>Github Adres</TableHeaderCell>
           
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              <TableRow key={coverLetter.id}>
                <TableCell>{coverLetter.id}</TableCell>
                <TableCell>{coverLetter.coverLetter}</TableCell>
              
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
      }
    </div>
  );
}

export default GetCoverLetterByJobSeekerId
;
