import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

function AdminLeftsidebar() {
  return (
    <div>
      <Menu vertical inverted>
        <Menu.Item>
          <Dropdown item text='Admin Left Sidebar'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/userlist'>Kullanıcı Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/jobseekerlist'>İş Arayan Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/hrmsPersonsList'>Hrms Personel Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/employerlist'>İşveren Üye Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İş Arayan İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item>Cv İşlemleri</Dropdown.Item>
              <Dropdown.Item>Profil Bilgileri</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İşveren Listeleri'>
            <Dropdown.Menu>
              <Dropdown.Item>İşveren Listesi</Dropdown.Item>
              <Dropdown.Item>Onay Bekleyen İşveren Listesi</Dropdown.Item>
              <Dropdown.Item>İşveren Onay Sayfası</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Resimler'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/imagegetallimages'>Resim Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İş İlanı İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='allactivejobAdvertisementsList'>Aktif İş İlanları Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='allpassivejobAdvertisementsList'>Pasif İş İlanları Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </div>
  )
}

export default AdminLeftsidebar;
