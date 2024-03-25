import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobSeekerProgrammingLanguages } from '../store/thunks/programmingLanguagesThunks';

function GetProgrammingLanguagesByJobSeekerId() {

  const dispatch = useDispatch()
  const programmingLanguageItems = useSelector(state => state.programmingLanguage.programmingLanguageItems)

  const initialValues = {
    jobSeekerId: '',
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan'),
  });

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getJobSeekerProgrammingLanguages(jobSeekerId));
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
            <button type='submit'>bul</button>
          </Form>
        )}
      </Formik>

      {programmingLanguageItems && (
        <Table celled>
          <TableHeader>
            <TableRow>
              <TableHeaderCell>Programla Dili ID</TableHeaderCell>
              <TableHeaderCell>Programlama Dili</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {programmingLanguageItems.map((programmingLanguage) => (
              <TableRow key={programmingLanguage.programmingLanguageId}>
                <TableCell>{programmingLanguage.programmingLanguageId}</TableCell>
                <TableCell>{programmingLanguage.programmingLanguageName}</TableCell>
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

export default GetProgrammingLanguagesByJobSeekerId
  ;
