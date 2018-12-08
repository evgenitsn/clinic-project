import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import 'moment/locale/bg' // without this line it didn't work
moment.locale('bg')

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

export default function AppointmentCard({ data, setAppointments }) {
  function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key)) || []
  }

  function updateToLocalStorage(key, update) {
    localStorage.setItem(key, JSON.stringify(update))
  }

  function removeEntry(id) {
    let current = readFromLocalStorage('appointments')
    let update = current.filter(f => f.id !== id)
    updateToLocalStorage('appointments', update)
    setAppointments(update)
  }

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
        <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>
          {data.fullName}
        </h4>
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
                textAlign: 'left',
                padding: 0,
                margin: 0,
                fontWeight: 700,
                fontSize: '1.5rem'
              }}
            >
              {moment(data.date).format('DD MMMM')}
            </p>
            <p
              style={{
                textAlign: 'left',
                padding: 0,
                margin: 0,
                fontWeight: 700,
                fontSize: '1.5rem'
              }}
            >
              {moment(data.time).format('kk:mm')}ч.
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
              {data.meta.speciality}
            </p>
            <ul>
              <li>
                <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                  {data.meta.name}
                </p>
              </li>
              <li>
                <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                  кабинет {data.meta.cabinet}
                </p>
              </li>
              <li>
                <p style={{ padding: 0, margin: 0, textAlign: 'left' }}>
                  {data.meta.telephone}
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img
              style={{ maxWidth: 100, maxHeight: 100, borderRadius: '100%' }}
              src={data.meta.photo}
              alt="Doctor"
            />
          </div>
        </div>
        <Button onClick={() => removeEntry(data.id)}>Откажи</Button>
      </div>
    </div>
  )
}
