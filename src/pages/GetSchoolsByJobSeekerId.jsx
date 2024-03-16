import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import SchoolService from '../services/schoolService';

function GetSchoolByJobSeekerId() {
  const initialValues = {
    jobSeekerId: '',
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan'),
  });

  const [schools, setSchools] = useState([]);
  const [showList, setShowList] = useState(false);

  const fetchWorkExperiences = async (jobSeekerId) => {
    try {
    
      const result = await new SchoolService().getSchoolJobSeekerId(jobSeekerId);
      setSchools(result.data.data);
      setShowList(true);
    } catch (error) {
      console.error('İş tecrübeleri getirme hatası:', error);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await fetchWorkExperiences(values.jobSeekerId);
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
              <TableHeaderCell>Okul ID</TableHeaderCell>
              <TableHeaderCell>Okul Adı</TableHeaderCell>
              <TableHeaderCell>Bölüm</TableHeaderCell>
              <TableHeaderCell>Başlangıç Tarihi</TableHeaderCell>
              <TableHeaderCell>Ayrılış Tarihi</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {schools.map((school) => (
              <TableRow key={school.schoolId}>
                 <TableCell>{school.schoolId}</TableCell>
                <TableCell>{school.schoolName}</TableCell>
                <TableCell>{school.schoolDepartment}</TableCell>
                <TableCell>{school.schoolStartYear}</TableCell>
                <TableCell>{school.schoolYearOfGraduation}</TableCell>
             
              </TableRow>
            ))}
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

export default GetSchoolByJobSeekerId
;
