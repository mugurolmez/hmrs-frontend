import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobSeekerWorkExperiences } from '../store/thunks/workExperienceThunks';

function WorkExperienceList() {
  const dispatch=useDispatch()
  const workExperinceItems=useSelector(state=>state.workExperience.workExperienceItems)

  const initialValues = {
    jobSeekerId: '',
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan'),
  });

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getJobSeekerWorkExperiences(jobSeekerId));
   
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
              label='JobSeekerId'
              name='jobSeekerId'
              onChange={(event) => handleChangeJobSeekerId(event, formik)}
            />
            <button type='submit'>bul</button>
          </Form>
        )}
      </Formik>

      {workExperinceItems && (
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>İş Tecrübesi ID</TableHeaderCell>
              <TableHeaderCell>İş Yeri</TableHeaderCell>
              <TableHeaderCell>Pozisyon</TableHeaderCell>
              <TableHeaderCell>Başlangıç Tarihi</TableHeaderCell>
              <TableHeaderCell>Ayrılış Tarihi</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {workExperinceItems.map((workExperience) => (
              <TableRow key={workExperience.workExperienceId}>
                <TableCell>{workExperience.workExperienceId}</TableCell>
                <TableCell>{workExperience.companyName}</TableCell>
                <TableCell>{workExperience.jobPosition}</TableCell>
                <TableCell>{workExperience.workStartYear}</TableCell>
                <TableCell>{workExperience.yearOfDeparture}</TableCell>
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

export default WorkExperienceList;
