import React from 'react'
import { LoginForm, LoginConteiner, LoginPopUp, CloseWindow } from './LoginStyles'


const Register = (props) => {


    return (
        <LoginPopUp>
            <LoginConteiner>
            <div onClick={props.close} ><CloseWindow/></div>
                <LoginForm action="">
                    <h3>Ingresá</h3>
                    <fieldset>
                        <label htmlFor="email">Email:</label>
                        <input type="email" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="password">Repetir contraseña:</label>
                        <input type="password" />
                    </fieldset>
                    <fieldset>
                        <input type="checkbox" name="tyc" id="tyc" />
                        <label htmlFor="tyc">Acepto Términos y Condiciones</label>
                    </fieldset>
                    <button>Ingresá</button>
                </LoginForm>
                <span onClick={props.show}>¿Ya tenés cuenta? Ingresá</span>
            </LoginConteiner>
        </LoginPopUp>
    )
}

export default Register