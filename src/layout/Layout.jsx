import React from 'react'
import { Wrapper, Header, Title, Cart as CartIcon } from './LayoutStyles'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import { Cart } from '../components/Cart/Cart'

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header>
        <Title>Cronos <span>disqueria</span></Title>
        <NavBar />
        <Link to={'/cart'}><CartIcon/></Link>
      </Header>
      <div>{children}</div>
      <Footer />
    </Wrapper>
  )
}

export default Layout