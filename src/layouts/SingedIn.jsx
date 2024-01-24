import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

export default function SingedIn({singOut}) {
    return (
        <div>
            <Menu.Item>

                <Image avatar spaced="right" src="https://res.cloudinary.com/ddoosppta/image/upload/v1704925271/profil.jpg" />
                <Dropdown pointing="top left" text='Uğur'>
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info" />

                        <Dropdown.Item onClick={singOut} text="Çıkış Yap" icon="sing-out" />
                    </Dropdown.Menu>
                </Dropdown>

            </Menu.Item>
        </div>
    )
}
