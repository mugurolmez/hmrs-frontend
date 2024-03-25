import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobSeekerLinkedin } from '../store/thunks/linkedinThunks';

function GetLinkedinByJobSeekerId() {
  const dispatch=useDispatch()
  const linkedinItem=useSelector(state=>state.linkedin.linkedinItem)

  const initialValues = {
    jobSeekerId: ''
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan')
  });

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getJobSeekerLinkedin(jobSeekerId));
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
      
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>LinkedinId ID</TableHeaderCell>
              <TableHeaderCell>Linkedin Adres</TableHeaderCell>
           
            </TableRow>
          </TableHeader>
          {linkedinItem && (
          <TableBody>
              <TableRow key={linkedinItem.linkedinId}>
                <TableCell>{linkedinItem.linkedinId}</TableCell>
                <TableCell>{linkedinItem.linkedinAddress}</TableCell>
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

export default GetLinkedinByJobSeekerId
;
