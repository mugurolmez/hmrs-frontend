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
import AddImageForm from '../forms/AddImageForm'
import WorkExperinceAddForm from '../forms/WorkExperinceAddForm'
import WorkExperienceList from '../pages/WorkExperinceList'
import AddWorkTypeFrom from '../forms/AddWorkTypeForm'
import WorkTypeGetAllList from '../pages/WorkTypeGetAllList'
import AddWorkTimeFrom from '../forms/AddWorkTimeForm'
import WorkTimeGetAllList from '../pages/WorkTimeGetAllList'
import AddTemporaryEmployerForm from '../forms/AddTemporaryEmployerForm'
import AddSchoolFrom from '../forms/AddSchoolFrom'
import GetSchoolByJobSeekerId from '../pages/GetSchoolsByJobSeekerId'
import AddProgrammingLanguageForm from '../forms/AddProgrammingLanguageForm'
import GetProgrammingLanguagesByJobSeekerId from '../pages/GetProgrammingLanguagesByJobSeekerId'
import PersonList from '../pages/PersonList'
import AddLinkedinFrom from '../forms/AddLinkedinForm'
import GetLinkedinByJobSeekerId from '../pages/GetLinkedinByJobSeekerId'
import AddLanguageForm from '../forms/AddLanguageForm'
import GetLanguagesByJobSeekerId from '../pages/GetLanguagesByJobSeekerId'
import AddJobSeekerForm from '../forms/AddJobSeekerFrom'
import AddJobDescriptionForm from '../forms/AddJobDescriptionForm'
import GetJobDescriptionById from '../pages/GetJobDescriptionById'
import GetAllJobDescriptions from '../pages/GetAllJobDescriptions'
import AddHrmsPersonForm from '../forms/AddHrmsPersonForm'
import AddGithubFrom from '../forms/AddGithubForm'
import GetGithubByJobSeekerId from '../pages/GetGithubByJobSeekerId'

import GetAllFrameWorks from '../pages/GetAllFrameWorks'
import GetCoverLetterByJobSeekerId from '../pages/GetCovverLetterByJobSeekerId'
import VerifyEmployerForm from '../forms/VerifyEmployerForm'
import AddJobAdvertisementForm from '../forms/AddJobAdvertisementForm'
import AddCoverLetterFrom from '../forms/AddCoverLetterForm'
import AddFrameworkForm from '../forms/AddFrameworkForm'


export default function Dashboard() {
  return (
  
      <Grid >
   
        <GridColumn width={14} textAlign='left'>
          <Routes >
            <Route path="/" Component={AddProgrammingLanguageForm} />
            <Route path="/adduserform" Component={AddUserForm} />
            <Route path="/userList" Component={UserList} />
            <Route path="/jobSeekerList" Component={JobSeekerList} />
            <Route path="/hrmsPersonsList" Component={HrmsPersonsList} />
            <Route path="/employerList" Component={EmployerList} />
            <Route path="/imageList" Component={ImagesList} />
            <Route path="/temporaryEmployerList" Component={TemporaryEmployerList} />
            <Route path="/getalljobdescriptions" Component={GetAllJobDescriptions} />
            <Route path="/allactivejobAdvertisementsList" Component={AllActiveJobAdvertisemenstList} />
            <Route path="/allpassivejobAdvertisementsList" Component={AllPassiveJobAdvertisemenstList} />
            <Route path="/imagegetallimages" Component={ImageGetAllImages} />
            <Route path="/addimageform" Component={AddImageForm} />
            <Route path='/workexperinceaddform' Component={WorkExperinceAddForm}/>
            <Route path='/workexperincelist' Component={WorkExperienceList}/>
            <Route path='/addworktypeForm' Component={AddWorkTypeFrom}/>
            <Route path='/worktypegetalllist' Component={WorkTypeGetAllList}/>
            <Route path='/addworktimeForm' Component={AddWorkTimeFrom}/>
            <Route path='/worktimegetalllist' Component={WorkTimeGetAllList}/>
            <Route path='/addtemporaryemployerform' Component={AddTemporaryEmployerForm}/>
            <Route path='/addschoolform' Component={AddSchoolFrom}/>
            <Route path='/getSchoolbyjobseekerid' Component={GetSchoolByJobSeekerId}/>
            <Route path='/addprogramminglanguageform' Component={AddProgrammingLanguageForm}/>
            <Route path='/getprogramminglanguagebyjobseekerId' Component={GetProgrammingLanguagesByJobSeekerId}/>
            <Route path='/personlist' Component={PersonList}/>
            <Route path='/addlinkedinForm' Component={AddLinkedinFrom}/>
            <Route path='/getlinkedinbyjobseekerid' Component={GetLinkedinByJobSeekerId}/>
            <Route path='/addlanguageform' Component={AddLanguageForm}/>
            <Route path='/getlanguagesbyjobseekerid' Component={GetLanguagesByJobSeekerId}/>
            <Route path='/addjobseekerform' Component={AddJobSeekerForm}/>
            <Route path='/addjobdescriptionForm' Component={AddJobDescriptionForm}/>
            <Route path='/getjobdescriptionbyid' Component={GetJobDescriptionById}/>
            <Route path='/getalljobdescriptions' Component={GetAllJobDescriptions}/>
            <Route path='/addhrmspersonform' Component={AddHrmsPersonForm}/>
            <Route path='/addgithubform' Component={AddGithubFrom}/>
            <Route path='/getgithubbyjobseekerid' Component={GetGithubByJobSeekerId}/>
            <Route path='/addframeworkform' Component={AddFrameworkForm}/>
            <Route path='/getallframeworks' Component={GetAllFrameWorks}/>
            <Route path='/addcoverletterform' Component={AddCoverLetterFrom}/>
            <Route path='/getcoverletterbyjobseekerid' Component={GetCoverLetterByJobSeekerId}/>
            <Route path='/verifyemployerform' Component={VerifyEmployerForm}/>
            <Route path='/addjobadvertisementform' Component={AddJobAdvertisementForm}/>

          </Routes>
        </GridColumn>
      </Grid>
      
 
  )
}
