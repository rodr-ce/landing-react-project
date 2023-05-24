import React from 'react'
import { Wrapper, Header, Title, Nav, List, Item } from './LayoutStyles'
import { Link } from 'react-router-dom'

const Layout = ({children}) => {
  return (
    <Wrapper>
    <Header>
        <Title>Titulo</Title>
        <Nav>
            <List>
                <Item>
                    <Link to={'/'}>Home</Link>
                </Item>
                <Item>
                    <Link to={'/about'}>About</Link>
                </Item>
                <Item>
                    <Link to={'/products'}>Products</Link>
                </Item>
                <Item>
                    <Link to={'/login'}>Login</Link>
                </Item>
            </List>
        </Nav>
    </Header>
    <div>{children}</div>
    <footer>
        Footer
    </footer>
    </Wrapper>
    
  )
}

export default Layout