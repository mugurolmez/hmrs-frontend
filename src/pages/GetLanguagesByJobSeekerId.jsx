import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import FormikControl from '../component/FormikControl';
import { Form, Formik } from 'formik';
import { TableRow, TableHeaderCell, TableHeader, TableFooter, TableCell, TableBody, MenuItem, Icon, Menu, Table } from 'semantic-ui-react';
import LanguageService from '../services/languageService';

function GetLanguagesByJobSeekerId() {
  const initialValues = {
    jobSeekerId: '',
  };

  const validationSchema = Yup.object({
    jobSeekerId: Yup.string().required('Zorunlu Alan'),
  });

  const [languages, setLanguages] = useState([]);
  const [showList, setShowList] = useState(false);

  const fetchLanguages = async (jobSeekerId) => {
    try {
      let languageService = new LanguageService();
      const result = await languageService.getLanguageJobSeekerId(jobSeekerId);
      setLanguages(result.data.data);
      setShowList(true);
    } catch (error) {
      console.error('Yabancı dilleri getirme hatası:', error);
    }
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      await fetchLanguages(values.jobSeekerId);
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
              <TableHeaderCell>Yabancı Dil ID</TableHeaderCell>
              <TableHeaderCell>YAbancı Dil Adı</TableHeaderCell>
              <TableHeaderCell>Dil Seviyesi</TableHeaderCell>
            </TableRow>
          </TableHeader>

          <TableBody>
            {languages.map((language) => (
              <TableRow key={language.languageId}>
                <TableCell>{language.languageId}</TableCell>
                <TableCell>{language.languageName}</TableCell>
                <TableCell>{language.languageLevel}</TableCell>
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

export default GetLanguagesByJobSeekerId
;
