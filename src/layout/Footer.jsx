import React from 'react'
import { FooterLegend, FooterLinks, FooterWrapper } from './LayoutStyles'
import {FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterWrapper>
        <FooterLegend>Página de muestra. Creado con Vite + React</FooterLegend>
        <FooterLinks>
            <a href="https://www.instagram.com/"><FaInstagram /></a>
            <a href=""><FaFacebook /></a>
            <a href=""><FaYoutube /></a>
        </FooterLinks>
    </FooterWrapper>
  )
}

export default Footer