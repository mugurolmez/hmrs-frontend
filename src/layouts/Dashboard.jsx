import React from 'react'
import { Grid, GridColumn } from 'semantic-ui-react'
import LeftSidebar from './LeftSidebar'
import { Route, Routes } from 'react-router-dom'
import UserList from "../pages/UsersList"
import JobSeekerList from "../pages/JobSeekersList"
import EmployerList from '../pages/EmployerList'
import ImagesList from '../pages/ImagesList'
import TemporaryEmployerList from '../pages/TemporaryEmployerList'
import HrmsPersonsList from '../pages/HrmsPersonsList'
import AddUserForm from '../forms/AddUserForm'

export default function Dashboard() {
  return (
    <div>

      <Grid>
        <GridColumn width={4}>
          <LeftSidebar />
        </GridColumn>
        <GridColumn width={12}>
          
          <Routes>
            <Route path="/" Component={AddUserForm} />
            <Route path="/adduserform" Component={AddUserForm} />
            <Route path="/userList" Component={UserList} />
            <Route path="/jobSeekerList" Component={JobSeekerList} />
            <Route path="/hrmsPersonsList" Component={HrmsPersonsList} />
            <Route path="/employerList" Component={EmployerList} />
            <Route path="/imageList" Component={ImagesList} />
            <Route path="/temporaryEmployerList" Component={TemporaryEmployerList} />
            <Route path="/jobDescriptionsList" Component={JobSeekerList} />

          </Routes>
        </GridColumn>
      </Grid>
    </div>
  )
}
