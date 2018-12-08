import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import mockImg from '../images/doctors/img-circle2.png'

const Button = styled.button`
  background: transparent;
  border: 1px solid #206d7e;
  border-radius: 2rem;
  outline: none;
  color: black;
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem;
  margin-top: 0.8rem;
  padding-left: 1rem;
  padding-right: 1rem;
  &:hover {
    cursor: pointer;
  }
`

export default function AppointmentCard({
  patientName,
  doctorName,
  speciality,
  date,
  time,
  cabinet,
  telephone,
  image
}) {
  return (
    <div>
      <div
        style={{
          paddingTop: '1rem',
          paddingBottom: '1rem',
          margin: '2rem',
          background: '#99D7E5',
          borderRadius: 4
        }}
      >
        <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Йордан Иванов</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <div>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontWeight: 700,
                fontSize: '1.5rem'
              }}
            >
              18 Декември
            </p>
            <p
              style={{
                padding: 0,
                margin: 0,
                fontWeight: 700,
                fontSize: '1.2rem',
                textAlign: 'left'
              }}
            >
              Зъболекар
            </p>
            <ul>
              <li>
                <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                  д-р Иванов
                </p>
              </li>
              <li>
                <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                  кабинет 402
                </p>
              </li>
              <li>
                <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                  0878523694
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img style={{ maxWidth: 100 }} src={mockImg} alt="Doctor" />
          </div>
        </div>
        <Button>Откажи</Button>
      </div>
    </div>
  )
}
