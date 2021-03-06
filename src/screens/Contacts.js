import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  background-color: #33afcb;
  color: white;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
`

const Label = styled.p`
  font-weight: 700;
  padding-bottom: 0;
  margin-bottom: 0.4rem;
`
const Info = styled.p`
  margin-bottom: 1.2rem;
`

export default function Contacts() {
  return (
    <>
      <Title>Контакти</Title>
      <div>
        <Label>Адрес</Label>
        <Info>Варна 9010, ул. "Васил Петлешков" 3</Info>
        <Label>Телефон</Label>
        <Info>
          052-630-000
          <br />
          0877-700-434
          <br />
          0877-700-724
        </Info>
        <Label>E-mail</Label>
        <Info>
          <a href="info@medicallife.bg" target="_top">
            info@medicallife.bg
          </a>
        </Info>
        <div>
          <div>
            <iframe
              title="gmap"
              width="80%"
              height="200"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%D0%92%D0%B0%D1%80%D0%BD%D0%B0%209010%2C%20%D1%83%D0%BB.%20%22%D0%92%D0%B0%D1%81%D0%B8%D0%BB%20%D0%9F%D0%B5%D1%82%D0%BB%D0%B5%D1%88%D0%BA%D0%BE%D0%B2%22%203&t=&z=15&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </div>
    </>
  )
}
