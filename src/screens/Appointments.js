import React from 'react'
import AppointmentCard from '../components/AppointmentCard'
import styled from 'styled-components'

const Title = styled.h2`
  background-color: #33afcb;
  color: white;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
`

export default function Appointments() {
  let appointments = JSON.parse(localStorage.getItem('appointments')) || []
  return (
    <>
      <Title>Моите часове</Title>
      {appointments.map(appt => {
        return <AppointmentCard />
      })}
    </>
  )
}
