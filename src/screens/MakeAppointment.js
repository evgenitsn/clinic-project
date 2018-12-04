import React from 'react'
import styled from 'styled-components'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'

import { Formik } from 'formik'
import * as Yup from 'yup'
import DatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

const DatePickerStyled = styled(DatePicker)`
  border: 1px solid #ced4da;
  border-radius: 0.3rem;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
  height: 40px;
  ::placeholder {
    opacity: 1;
  }
  outline: none;
`

const Title = styled.h2`
  background-color: #33afcb;
  color: white;
  font-size: 1.4rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  margin-bottom: 2rem;
`
const Container = styled.div`
  margin: 0 2rem;
`

function readFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key)) || []
}

function updateToLocalStorage(key, update) {
  localStorage.setItem(key, JSON.stringify(update))
}

function addToLocalStorage(item) {
  let current = readFromLocalStorage('appointments')
  let update = [...current, item]
  updateToLocalStorage('appointments', update)
}

export default function MakeAppointment(props) {
  function handleSubmit(values) {
    console.log(values)
    addToLocalStorage({ ...values })
    props.history.push('/appointments')
  }
  return (
    <>
      <Title>Запазване на час</Title>
      <Container>
        <Formik
          initialValues={{
            fullName: '',
            gender: '',
            doctor: '',
            date: '',
            time: ''
          }}
          validationSchema={Yup.object().shape({
            fullName: Yup.string()
              .min(4, 'Името трябва да съдържа поне 4 символа')
              .required('Задължително поле'),
            gender: Yup.string().required('Задължително поле'),
            doctor: Yup.string().required('Задължително поле'),
            date: Yup.date().required('Задължително поле'),
            time: Yup.string().required('Задължително поле')
          })}
          onSubmit={values => {
            handleSubmit(values)
          }}
        >
          {props => {
            const {
              values,
              touched,
              errors,
              isSubmitting,
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue
            } = props
            return (
              <Form
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                name="reservation"
                onSubmit={handleSubmit}
              >
                <FormGroup style={{ width: '75%' }}>
                  <Label for="fullName">Три имена</Label>
                  <Input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Три имена *"
                    value={values.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={
                      errors.fullName && touched.fullName
                        ? 'text-input error'
                        : 'text-input'
                    }
                  />
                </FormGroup>

                {errors.fullName && touched.fullName && (
                  <div style={{ color: 'red' }}>{errors.fullName}</div>
                )}
                <Label for="gender">Пол</Label>
                <div
                  style={{
                    width: '90%',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '1rem'
                  }}
                >
                  <label>
                    <input
                      name="gender"
                      type="radio"
                      value="Мъж"
                      checked={values.gender === 'Мъж'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className="non-smoking box"
                      style={{
                        borderTopLeftRadius: '0.4rem',
                        borderBottomLeftRadius: '0.4rem'
                      }}
                    >
                      <span style={{ whiteSpace: 'nowrap' }}>Мъж</span>
                    </div>
                  </label>
                  <label>
                    <input
                      name="gender"
                      type="radio"
                      value="Жена"
                      checked={values.gender === 'Жена'}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div
                      className="smoking box"
                      style={{
                        borderTopRightRadius: '0.4rem',
                        borderBottomRightRadius: '0.4rem'
                      }}
                    >
                      <span style={{ whiteSpace: 'nowrap' }}>Жена</span>
                    </div>
                  </label>
                </div>

                {errors.gender && touched.gender && (
                  <div style={{ color: 'red' }}>{errors.gender}</div>
                )}

                <FormGroup style={{ width: '75%' }}>
                  <Label for="doctor">Доктор</Label>
                  <Input
                    type="select"
                    name="doctor"
                    value={values.doctor}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="doctor"
                  >
                    <option value="" label="Доктор *">
                      Доктор *
                    </option>
                    <option value="Д-р Иван Томов - невролог">
                      Д-р Иван Томов - невролог
                    </option>
                    <option value="Д-р Станислав Тодоров - невролог">
                      Д-р Станислав Тодоров - невролог
                    </option>
                    <option value="Д-р Mилен Ганев - ортопед">
                      Д-р Mилен Ганев - ортопед
                    </option>
                    <option value="Д-р Росен Иванов - ортопед">
                      Д-р Росен Иванов - ортопед
                    </option>
                    <option value="Д-р Росица Гарчева - стоматолог">
                      Д-р Росица Гарчева - стоматолог
                    </option>
                    <option value="Д-р Росен Ганев - стоматолог">
                      Д-р Росен Ганев - стоматолог
                    </option>
                  </Input>
                </FormGroup>
                {errors.doctor && touched.doctor && (
                  <div style={{ color: 'red' }}>{errors.doctor}</div>
                )}

                <Label for="date">Дата</Label>
                <DatePickerStyled
                  name="date"
                  type="date"
                  label="Дата *"
                  onChange={e => {
                    setFieldValue('date', e)
                  }}
                  placehoderText=" Дата *"
                  disabledKeyboardNavigation
                  value={
                    values.date
                      ? '  ' + moment(values.date).format('DD-MM-YYYY')
                      : '  Дата *'
                  }
                />
                {errors.date && touched.date && (
                  <div style={{ color: 'red' }}>{errors.date}</div>
                )}
                <Label for="date">Час</Label>
                <DatePickerStyled
                  name="time"
                  type="time"
                  label="Час *"
                  disabledKeyboardNavigation
                  onChange={e => {
                    setFieldValue('time', e)
                  }}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={15}
                  dateFormat="LT"
                  timeCaption="Time"
                  placehoderText="Час *"
                  value={
                    values.time
                      ? '  ' + moment(values.time).format('LT')
                      : '  Час *'
                  }
                />
                {errors.time && touched.time && (
                  <div style={{ color: 'red' }}>{errors.time}</div>
                )}

                <Button
                  style={{ marginTop: '2rem' }}
                  type="submit"
                  disabled={isSubmitting}
                  color={'primary'}
                >
                  Запиши час
                </Button>
              </Form>
            )
          }}
        </Formik>
      </Container>
    </>
  )
}
