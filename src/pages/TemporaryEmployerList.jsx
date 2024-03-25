import React, { useEffect, useState } from 'react';
import {
  ModalHeader,
  ModalContent,
  Modal,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Menu,
  Table,
  Button
} from 'semantic-ui-react';
import VerifyEmployerForm from '../forms/VerifyEmployerForm';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTemporaryEployers } from '../store/thunks/temporaryEmployerThunks';


export default function TemporaryEmployerList() {

  const dispatch = useDispatch()
  const temporaryEmployerItems = useSelector(state => state.temporaryEmployer.temporaryEmployerItems)
  
  const [selectedTemporaryEmployerId, setselectedTemporaryEmployerId] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllTemporaryEployers())
  }, [dispatch]);

  const handleApproveClick = (temporaryEmployerId) => {
    setselectedTemporaryEmployerId(temporaryEmployerId);
    openModal()
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const updateTemporaryEmployers = () => {
    getAllTemporaryEployers();
  };

  return (
    <div>
      <Table celled>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Kullanıcı Id</TableHeaderCell>
            <TableHeaderCell>İş Veren Id</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Password</TableHeaderCell>
            <TableHeaderCell>Şirket Adı</TableHeaderCell>
            <TableHeaderCell>Web Adresi</TableHeaderCell>
            <TableHeaderCell>Telefon Numarası</TableHeaderCell>
            <TableHeaderCell> Onay Durumu</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            temporaryEmployerItems.map((temporaryEmployer) => (
              <TableRow key={temporaryEmployer.employerId}>
                <TableCell>{temporaryEmployer.userId}</TableCell>
                <TableCell>{temporaryEmployer.employerId}</TableCell>
                <TableCell>{temporaryEmployer.email}</TableCell>
                <TableCell>{temporaryEmployer.password}</TableCell>
                <TableCell>{temporaryEmployer.corporateName}</TableCell>
                <TableCell>{temporaryEmployer.webSite}</TableCell>
                <TableCell>{temporaryEmployer.phoneNumber}</TableCell>
                <TableCell> <span style={{ color: temporaryEmployer.approvalStatus ? 'green' : 'red' }}>&bull;</span></TableCell>
               
                <TableCell><Button
                  onClick={() => handleApproveClick(temporaryEmployer.employerId)}
                >Onaylama Formu</Button></TableCell>
              </TableRow>
            ))

          }
        </TableBody>

        {selectedTemporaryEmployerId && (
          <Modal open={isModalOpen} onClose={closeModal} size="mini">
            <ModalHeader> Employer Onaylama Formu</ModalHeader>
            <ModalContent>
              <VerifyEmployerForm
                temporaryEmployerId={selectedTemporaryEmployerId}
                closeModal={closeModal}
                updateTemporaryEmployers={updateTemporaryEmployers}
              />
            </ModalContent>
          </Modal>
        )}

        <TableFooter>
          <TableRow>
            <TableHeaderCell colSpan='9'>
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
