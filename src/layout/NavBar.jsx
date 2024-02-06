import { useState } from 'react'
import { Nav, List, Item, Button  } from './LayoutStyles'
import { Link } from 'react-router-dom'

const currentUser = 0

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
          <Link  onClick={() => setOpen(false)}  to={'/'}>Home</Link>
        </Item>
        <Item>
          <Link onClick={() => setOpen(false)} to={'/nosotros'}>Nosotros</Link>
        </Item>
        <Item>
          <Link  onClick={() => setOpen(false)} to={'/productos'}>Productos</Link>
        </Item>
        <Item> 
          {currentUser? <p>{currentUser.username}</p> : <Link onClick={() => setOpen(false)} to={'/ingreso'} >Ingresar</Link>}
        </Item>
      </List>
    </Nav>
  )
}

export default NavBar