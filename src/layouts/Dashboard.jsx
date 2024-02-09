import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'

import { Route, Routes } from 'react-router-dom'
import UserList from "../pages/UsersList"
import JobSeekerList from "../pages/JobSeekersList"
import EmployerList from '../pages/EmployerList'
import ImagesList from '../pages/ImagesList'
import TemporaryEmployerList from '../pages/TemporaryEmployerList'
import HrmsPersonsList from '../pages/HrmsPersonsList'
import AddUserForm from '../forms/AddUserForm'

import AllActiveJobAdvertisemenstList from '../pages/AllActiveJobAdvertisementsList'
import AllPassiveJobAdvertisemenstList from '../pages/AllPassiveJobAdvertisementsList'
import ImageGetAllImages from '../pages/ImageGetAllImages'

export default function Dashboard() {
  return (
  
      <Grid >
   
        <GridColumn width={14} textAlign='left'>
          <Routes >
            <Route path="/" Component={ImageGetAllImages} />
            <Route path="/adduserform" Component={AddUserForm} />
            <Route path="/userList" Component={UserList} />
            <Route path="/jobSeekerList" Component={JobSeekerList} />
            <Route path="/hrmsPersonsList" Component={HrmsPersonsList} />
            <Route path="/employerList" Component={EmployerList} />
            <Route path="/imageList" Component={ImagesList} />
            <Route path="/temporaryEmployerList" Component={TemporaryEmployerList} />
            <Route path="/jobDescriptionsList" Component={JobSeekerList} />
            <Route path="/allactivejobAdvertisementsList" Component={AllActiveJobAdvertisemenstList} />
            <Route path="/allpassivejobAdvertisementsList" Component={AllPassiveJobAdvertisemenstList} />
            <Route path="/imagegetallimages" Component={ImageGetAllImages} />
          </Routes>
        </GridColumn>
      </Grid>
      
 
  )
}
