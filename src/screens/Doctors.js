import React from 'react'
import styled from 'styled-components'

//import images and use them.
import doctorImg0 from '../images/doctors/img-circle0.png'
import doctorImg1 from '../images/doctors/img-circle1.png'
import doctorImg2 from '../images/doctors/img-circle2.png'
import doctorImg3 from '../images/doctors/img-circle3.png'
import doctorImg4 from '../images/doctors/img-circle4.png'
import doctorImg5 from '../images/doctors/img-circle5.png'

const SubTitle = styled.h1`
  font-size: 1.6rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
`

const Title = styled.h2`
  background-color: #33afcb;
  color: white;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 0.5rem;
`

const DoctorContainer = styled.div`
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`
const DoctorImage = styled.img`
  max-width: 60px;
  border-radius: 100%;
  margin-right: 1rem;
`
const DoctorName = styled.div``

export default function Doctors() {
  return (
    <div>
      <SubTitle>Доктори</SubTitle>
      <Title>Неврология</Title>
      <DoctorContainer>
        <DoctorImage src={doctorImg0} />
        <DoctorName>Д-р Иван Томов</DoctorName>
      </DoctorContainer>
      <DoctorContainer>
        <DoctorImage src={doctorImg1} />
        <DoctorName>Д-р Станислав Тодоров</DoctorName>
      </DoctorContainer>
      <Title>Отропедия</Title>
      <DoctorContainer>
        <DoctorImage src={doctorImg2} />
        <DoctorName>Д-р Mилен Ганев</DoctorName>
      </DoctorContainer>
      <DoctorContainer>
        <DoctorImage src={doctorImg3} />
        <DoctorName>Д-р Росен Иванов</DoctorName>
      </DoctorContainer>
      <Title>Стоматология</Title>
      <DoctorContainer>
        <DoctorImage src={doctorImg4} />
        <DoctorName>Д-р Росица Гарчева</DoctorName>
      </DoctorContainer>
      <DoctorContainer>
        <DoctorImage src={doctorImg5} />
        <DoctorName>Д-р Росен Иванов</DoctorName>
      </DoctorContainer>
    </div>
  )
}
