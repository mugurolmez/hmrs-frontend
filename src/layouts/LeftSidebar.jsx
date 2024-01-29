import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, Menu, MenuMenu } from 'semantic-ui-react'

export default function LeftSidebar() {
  return (
    <div>
      
      <Menu vertical inverted>

<MenuMenu position='left'>
<Dropdown item text='Kullanıcı Listeleri'>
    <DropdownMenu >
        <DropdownItem as={NavLink} to='/userlist' >Kullanıcı Listesi</DropdownItem>
        <DropdownItem as={NavLink} to='/jobseekerlist' >İş Arayan Listesi</DropdownItem>
        <DropdownItem as={NavLink} to='/hrmsPersonsList' >Hrms Personel Listesi</DropdownItem>
        <DropdownItem as={NavLink} to='/employerlist'> İşveren Üye Listesi</DropdownItem>

    </DropdownMenu>
</Dropdown>
<Dropdown item text='İş Arayan İşlemleri'>
    <DropdownMenu >
        <DropdownItem >Cv İşlemleri</DropdownItem>
        <DropdownItem>Profil Bilgileri</DropdownItem>
       
    </DropdownMenu>
</Dropdown>

<Dropdown item text='İşveren Listeleri'>
    <DropdownMenu >
        <DropdownItem >İşveren Listesi</DropdownItem>
        <DropdownItem >Onay Bekleyen İşveren Listesi</DropdownItem>
        <DropdownItem>İş veren Onay Sayfası</DropdownItem>
    </DropdownMenu>
</Dropdown>



<Dropdown item text='Resimler'>
    <DropdownMenu >
        <DropdownItem >Resim Listesi</DropdownItem>
    </DropdownMenu>
</Dropdown>

<Dropdown item text='İş İlanı İşlemleri'>
    <DropdownMenu >
        <DropdownItem >İş İlanları Listesi</DropdownItem>
    </DropdownMenu>
</Dropdown>
</MenuMenu>
</Menu>
    </div>
  )
}
