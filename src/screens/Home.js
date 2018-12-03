import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Alert, Button } from 'reactstrap'

import heroImg from '../images/hero.png'

const Title = styled.h1`
  font-size: 5rem;
  font-weight: 500;
  color: white;
  margin: 2rem;
`

const Description = styled.h4`
  max-width: 34rem;
  margin: 0 auto;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 300;
  color: white;
`

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
      <h1>Bolnica</h1>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <Button color="danger">Danger!</Button>
      <Alert color="success">This is a success alert — check it out!</Alert>
    </>
  )
}
