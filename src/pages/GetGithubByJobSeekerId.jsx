import React from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobSeekerGithub } from '../store/thunks/githubThunks';

function GetGithubByJobSeekerId() {
  const dispatch = useDispatch()
  const githubItem = useSelector(state => state.github.githubItem)

  const handleChangeJobSeekerId = async (event, formik) => {
    const jobSeekerId = event.target.value;
    formik.handleChange(event);
    dispatch(getJobSeekerGithub(jobSeekerId));
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

          {githubItem && githubItem.githubId && (
            <TableBody>
              <TableRow key={githubItem.githubId}>
                <TableCell>{githubItem.githubId}</TableCell>
                <TableCell>{githubItem.githubAddress}</TableCell>
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

export default GetGithubByJobSeekerId
  ;
