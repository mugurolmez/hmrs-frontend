import React, { useState } from 'react'
import { Menu, MenuItem, MenuMenu } from 'semantic-ui-react'
import SingedIn from './SingedIn'
import SingOut from './SingOut'
import Languages from './Languages'
import { NavLink } from 'react-router-dom'

export default function Navi() {
  const [IsAutenticated, setIsAutenticed] = useState(false)

  function handleSingOut() {
    setIsAutenticed(false)
  }

  function handleSingIn() {
    setIsAutenticed(true)
  }

  return (
    <div>
    
      <Menu inverted>
        <MenuItem name='Ana Sayfa' as={NavLink} to='/' />
        <MenuItem as={NavLink} to='/allactivejobAdvertisementsList' name="İş İlanlar"/>
           
        <MenuMenu position='right'>
            <Languages position='right'/>
          {/* alt komponente data geçme örneği singOut={handleSingOut} bu işleme props denıyor 
          alt komponente veri gondermıs oluyoruz */}
            {IsAutenticated?<SingedIn singOut={handleSingOut} />
            :<SingOut singIn={handleSingIn}/>}
          </MenuMenu>
         
      </Menu>
    </div>
  )
}
