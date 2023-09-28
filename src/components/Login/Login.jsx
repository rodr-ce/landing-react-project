import React, { useState } from 'react'
import { LoginForm, LoginConteiner, LoginPopUp, CloseWindow } from './LoginStyles'
import Register from './Register'

const Login = (props) => {
  const [showRegister, setRegister] = useState(false)

  function toggleLogin() {
    setRegister(!showRegister)
  }

  return (
    <LoginPopUp>
      
      <LoginConteiner>
      <div onClick={props.toggle} ><CloseWindow/></div>
        <h3>Ingresá</h3>
        <LoginForm action="post">
          <fieldset>
            <label htmlFor="email">Email:</label>
            <input type="email" />
          </fieldset>
          <fieldset>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" />
          </fieldset>
          <button>Ingresá</button>
        </LoginForm>
        <span onClick={toggleLogin}>¿No tenés cuenta? Registrate acá</span>
        {
        showRegister ? <Register show={toggleLogin} close={props.toggle}/> : null
      }
      </LoginConteiner>
      
      
    </LoginPopUp>
  )
}

export default Login