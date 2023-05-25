import React from 'react'
import { Wrapper, Header, Title } from './LayoutStyles'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <Wrapper>
    <Header>
        <Title>Platino <span>disqueria</span></Title>
        <NavBar />
    </Header>
    <div>{children}</div>
    <footer>
        Footer
    </footer>
    </Wrapper>
  )
}

export default Layout