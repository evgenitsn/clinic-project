import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import Footer from './components/Footer'
import Header from './components/Header'
import {
  Home,
  Doctors,
  Appointments,
  MakeAppointment,
  Contacts
} from './screens'

export default function Routes() {
  return (
    <Router>
      <div>
        <ScrollToTop>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/doctors/" component={Doctors} />
          <Route path="/appointments/" component={Appointments} />
          <Route path="/make-appointment/" component={MakeAppointment} />
          <Route path="/contact/" component={Contacts} />
          <Footer />
        </ScrollToTop>
      </div>
    </Router>
  )
}
