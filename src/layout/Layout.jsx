import React from 'react'
import { Wrapper, Header, Title, Cart } from './LayoutStyles'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Cronos <span>disqueria</span></Title>
        <NavBar />
        <Cart/>
      </Header>
      <div>{children}</div>
      <Footer />
    </Wrapper>
  )
}

export default Layout