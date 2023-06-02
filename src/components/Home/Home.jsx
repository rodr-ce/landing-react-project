import React from 'react'
import { HomeWrapper, Conteiner } from './HomeStyles'

const Home = () => {

  const ImgURL = 'https://images.unsplash.com/photo-1542208998-f6dbbb27a72f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'

  return (
    <HomeWrapper>
      <img src={ImgURL} alt="Imagen de fondo" />
      <Conteiner>
        <h1>Cronos</h1>
        <span>tu disqueria de confianza</span>
      </Conteiner>
    </HomeWrapper>
  )
}

export default Home