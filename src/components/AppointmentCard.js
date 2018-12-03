import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import mockImg from '../images/doctors/img-circle2.png'

export default function AppointmentCard({ home }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        margin: '2rem',
        background: '#99D7E5'
      }}
    >
      <div>
        <p>18 Декември</p>
        <p>Зъболекар</p>
        <p>д-р Иванов</p>
        <p>кабинет 402</p>
        <p>0878523694</p>
      </div>
      <div>
        <img style={{ maxWidth: 100 }} src={mockImg} alt="Doctor" />
      </div>
    </div>
  )
}
