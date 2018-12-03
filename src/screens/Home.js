import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import heroImg from '../images/hero.png'

const CTAButton = styled.button`
  font-weight: bold;
  background: #206d7e;
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 4rem;
  margin-top: 40vh;
  color: white;
  outline: none;
  border-radius: 0.4rem;
  border: none;
  font-size: 1.3rem;
  &:hover {
    cursor: pointer;
  }
`

const LandingDiv = styled.div`
  background-image: url(${heroImg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 60vh;
`

export default function Home() {
  return (
    <>
      <LandingDiv>
        <Link to="/make-appointment/">
          <CTAButton>ЗАПАЗВАНЕ НА ЧАС</CTAButton>
        </Link>
      </LandingDiv>
      <h1>НЕ Е ГОТОВО!</h1>
    </>
  )
}
