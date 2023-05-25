import { useState } from 'react'
import { Nav, List, Item, Button  } from './LayoutStyles'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Nav>
      <Button onClick={() => handleClick()} aria-label="Toggle navigation menu" ></Button>
      <List open={open} className={open ? 'openList' : ''}>
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
  )
}

export default NavBar