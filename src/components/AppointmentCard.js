import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import mockImg from '../images/doctors/img-circle2.png'

export default function AppointmentCard({ home }) {
  return (
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
          <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>д-р Иванов</p>
          <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
            кабинет 402
          </p>
          <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>0878523694</p>
        </div>
        <div>
          <img style={{ maxWidth: 100 }} src={mockImg} alt="Doctor" />
        </div>
      </div>
    </div>
  )
}
