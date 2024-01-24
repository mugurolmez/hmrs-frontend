import React, { useState } from 'react'
import {  Container, Menu, MenuItem, MenuMenu } from 'semantic-ui-react'
import SingedIn from './SingedIn'
import SingOut from './SingOut'
import Languages from './Languages'

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
        <MenuItem name='Ana Sayfa' />
        <Container>       
        <MenuMenu position='right'>
            <Languages position='right'/>
          {/* alt komponente data geçme örneği singOut={handleSingOut} bu işleme props denıyor 
          alt komponente veri gondermıs oluyoruz */}
            {IsAutenticated?<SingedIn singOut={handleSingOut} />
            :<SingOut singIn={handleSingIn}/>}
            
           

          </MenuMenu>
          </Container>
      </Menu>
    </div>
  )
}
