import React from 'react'
import { NavLink } from 'react-router-dom'
import { Divider, Dropdown, Grid, Menu } from 'semantic-ui-react'

function AdminLeftsidebar() {
  return (
    <div>
      <Grid>

      
      <Menu vertical inverted>
        <Menu.Item>
          <Dropdown.Item>Admin Dashboard</Dropdown.Item>
          <Divider />
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Kullanıcı İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/userlist'>Kullanıcı Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/adduserform'>Kullanıcı Ekleme Formu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Personel İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/personlist'>Personel Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      
          
        <Menu.Item>
          <Dropdown item text='Hrms Personeli İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addhrmspersonform'>Hrms Personel Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/hrmspersonslist'>Hrms Personel Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/temporaryemployerlist'>Onay Bekleyen İşveren Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/verifyemployerform'>İş Veren Doğrulama Formu</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

          <Menu.Item>
          <Dropdown item text='Geçici İşveren İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addtemporaryemployerform'>Geçici iş Veren Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/temporaryEmployerList'>Geçici iş Veren Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İşveren Listeleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/employerlist'>İşveren Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İş İlanı İşlemleri'>
            <Dropdown.Menu>
            <Dropdown.Item as={NavLink} to='addjobadvertisementform'>İş İlanı Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='allactivejobAdvertisementsList'>Aktif İş İlanları Listesi</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='allpassivejobAdvertisementsList'>Pasif İş İlanları Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Çalışma Tipi İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addworktypeform'>Çalışma Tipi Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/worktypegetalllist'>Çalışma Tipi Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Çalışma Zamanı İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addworktimeform'>Çalışma Zamanı Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/worktimegetalllist'>Çalışma Tipi Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İş Tanımı İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addjobdescriptionform'>İş Tanımı Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getjobdescriptionbyid'>İş Tanımı Bul</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getalljobdescriptions'>İş Tanımı Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İş Arayan İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addjobseekerform'>İş Arayan Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/jobseekerlist'>İş Arayan Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Resim İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/getallimages'>Tüm Resimleri Göster</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/addimageform'>Resim Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getallimagelist'>Resim Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='İş Tecribeleri İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/workexperinceaddform'>İş Tecribesi Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/workexperincelist'>İş Tecribesi listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Okul İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addschoolForm'>Okul Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getSchoolbyjobseekerid'>İş Arayan Okul Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
        <Menu.Item>
          <Dropdown item text='Programlama Dilleri İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addprogramminglanguageform'>Programlama Dili Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getprogramminglanguagebyjobseekerId'>Programlama Dilleri Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Linkedin İşlmeleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addlinkedinform'>Linkedin Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getlinkedinbyjobseekerId'>Linkedin Adresi Bul</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
  

        <Menu.Item>
          <Dropdown item text='Yabancı Dil İşlmeleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addlanguageform'>Yabancı Dil Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getlanguagesbyjobseekerid'>Yabancı Dil Listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Github İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addgithubform'>Github Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getgithubbyjobseekerid'>Github Adresi Bul</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Frawework İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addframeworkform'>Framwork Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getallframeworks'>İş Arayan Framework listesi</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>

        <Menu.Item>
          <Dropdown item text='Ön Yazı İşlemleri'>
            <Dropdown.Menu>
              <Dropdown.Item as={NavLink} to='/addcoverletterform'>Önyazı Ekleme Formu</Dropdown.Item>
              <Dropdown.Item as={NavLink} to='/getcoverletterbyjobseekerid'>İş Arayan Önyazı</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Item>
      </Menu>
      </Grid>
    </div>
    
  )
}

export default AdminLeftsidebar;
