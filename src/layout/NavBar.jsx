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
          <Link onClick={() => setOpen(false)} to={'/'}>Home</Link>
        </Item>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/about'}>About</Link>
        </Item>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/products'}>Products</Link>
        </Item>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/login'}>Login</Link>
        </Item>
      </List>
    </Nav>
  )
}

export default NavBar