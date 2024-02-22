import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import LinkedinService from '../services/linkedinService';

function GetLinkedinByJobSeekerId() {
  const initialValues = {
    jobSeekerId: ''
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan')
  });

  const [linkedin, setlinekdin] = useState({});
  const [showList, setShowList] = useState(false);

  const fetchLinkedin = async (jobSeekerId) => {
    try {
      let linkedinService = new LinkedinService();
      const result = await linkedinService.getLinkedinJobSeekerId(jobSeekerId);
      setlinekdin(result.data.data);
      setShowList(true);
    } catch (error) {
      console.error('İş tecrübeleri getirme hatası:', error);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await fetchLinkedin(values.jobSeekerId);
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
              type='jobSeekerId'
              label='İş Arayan ID'
              name='jobSeekerId'
            />
            <button type='submit'>bul</button>
          </Form>
        )}
      </Formik>

      {showList && (
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>LinkedinId ID</TableHeaderCell>
              <TableHeaderCell>Linkedin Adres</TableHeaderCell>
           
            </TableRow>
          </TableHeader>

          <TableBody>
            {
              <TableRow key={linkedin.linkedinId}>
                <TableCell>{linkedin.linkedinId}</TableCell>
                <TableCell>{linkedin.linkedinAddress}</TableCell>
              
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

export default GetLinkedinByJobSeekerId
;
