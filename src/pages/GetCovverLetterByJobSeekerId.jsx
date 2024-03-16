import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCoverLetterByJobSeekerId } from '../store/thunks/coverLetterThunks';


function GetCoverLetterByJobSeekerId() {

  const dispatch = useDispatch()
  const { coverLetterItem } = useSelector(state => state.coverLetter);

  const handleChangeJobSeekerId = async (event, formik) => {
    const selectedId = event.target.value;
    formik.handleChange(event);
    dispatch(fetchCoverLetterByJobSeekerId(selectedId))
  };

  const initialValues = {
    jobSeekerId: ''
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Required')
  });
  
  const handleSubmit = (values, { setSubmitting }) => {
    setSubmitting(false);
  };


  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
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
              <TableHeaderCell>Ön Yazı ID</TableHeaderCell>
              <TableHeaderCell>Ön Yazı</TableHeaderCell>
            </TableRow>
          </TableHeader>


          {coverLetterItem && coverLetterItem.id && (
            <TableBody>
              <TableRow key={coverLetterItem.id}>
                <TableCell>{coverLetterItem.id}</TableCell>
                <TableCell>{coverLetterItem.coverLetter}</TableCell>
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
      }
    </div>
  );
}

export default GetCoverLetterByJobSeekerId
  ;
