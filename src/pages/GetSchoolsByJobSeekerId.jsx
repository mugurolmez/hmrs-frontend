import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobSeekerSchools } from '../store/thunks/schoolThunks';

function GetSchoolByJobSeekerId() {
  const dispatch = useDispatch()
  const schoolItems = useSelector(state => state.school.schoolItems)

  const initialValues = {
    jobSeekerId: '',
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan'),
  });

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getJobSeekerSchools(jobSeekerId));
  };

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

      {schoolItems && (
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
            {schoolItems.map((school) => (
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
              <TableHeaderCell colSpan='5'>
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
