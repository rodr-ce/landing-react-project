import { useState } from 'react'
import { Nav, List, Item, Button  } from './LayoutStyles'
import { Link } from 'react-router-dom'
import Login from '../components/Login/Login'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const [showLogin, setLogin] = useState(false)

  const displayLogin = () => {
    setOpen(false)
    setLogin(!showLogin)
  }

  return (
    <Nav>
      <Button onClick={() => handleClick()} aria-label="Toggle navigation menu" ></Button>
      <List open={open} className={open ? 'openList' : ''}>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/'}>Home</Link>
        </Item>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/about'}>About</Link>
        </Item>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/products'}>Products</Link>
        </Item>
        <Item>
          <Link onClick={() => displayLogin() } >Login</Link>
        </Item>
      </List>
      {showLogin ? <Login toggle={displayLogin}/> : null}
    </Nav>
  )
}

export default NavBar