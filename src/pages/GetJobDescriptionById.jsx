import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobDescriptionById } from '../store/thunks/jobDescriptionThunks';


function GetJobDescriptionById() {
  const dispatch = useDispatch()
  const jobDescriptionItem = useSelector(state => state.jobDescription.jobDescriptionItem)


  const initialValues = {
    jobDescriptionId: ''
  };

  const validationSchema = Yup.object({
    jobDescriptionId: Yup.string().required('Zorunlu Alan')
  });

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getJobDescriptionById(jobSeekerId));
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
              type='jobDescriptionId'
              label='İş Tanımı ID'
              name='jobDescriptionId'
              onChange={(event) => handleChangeJobSeekerId(event, formik)}
            />
         
          </Form>
        )}
      </Formik>
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>İş Tanımı ID</TableHeaderCell>
              <TableHeaderCell> İş Tanımı </TableHeaderCell>

            </TableRow>
          </TableHeader>

          {jobDescriptionItem && jobDescriptionItem.jobDescriptionId && (
            <TableBody>
              <TableRow key={jobDescriptionItem.jobDescriptionId}>
                <TableCell>{jobDescriptionItem.jobDescriptionId}</TableCell>
                <TableCell>{jobDescriptionItem.jobDescriptionName}</TableCell>

              </TableRow>

            </TableBody>
          )}
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
      
    </div>
  );
}

export default GetJobDescriptionById
  ;
