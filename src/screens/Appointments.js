import React from 'react'
import { Alert } from 'reactstrap'
import { Button } from 'reactstrap'

export default function Appointments() {
  return (
    <>
      <h1>Appointments</h1>
      <Alert color="primary">This is a primary alert — check it out!</Alert>
      <Button color="danger">Danger!</Button>
      <Alert color="success">This is a success alert — check it out!</Alert>
    </>
  )
}
