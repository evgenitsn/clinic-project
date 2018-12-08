import React, { useState } from 'react'
import AppointmentCard from '../components/AppointmentCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.h2`
  background-color: #33afcb;
  color: white;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
`

export default function Appointments() {
  function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || []
  }

  const [appointments, setAppointments] = useState(
    readFromLocalStorage('appointments')
  )

  return (
    <>
      <Title>Моите часове</Title>
      {appointments.length === 0 && (
        <div>
          <h4 style={{ margin: '2rem' }}>Нямате запазени часове</h4>
          <Link
            to="/make-appointment/"
            style={{
              padding: '1rem',
              borderRadius: 4,
              border: '1px solid #206D7E'
            }}
          >
            Запишете час
          </Link>
        </div>
      )}
      {appointments.map(appt => {
        return (
          <AppointmentCard
            key={appt.id}
            data={appt}
            setAppointments={setAppointments}
          />
        )
      })}
    </>
  )
}
