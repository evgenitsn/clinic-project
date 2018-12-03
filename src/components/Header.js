import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

export default function Header({ home }) {
  const [isOpen, toggleOpen] = useState(false)
  return (
    <div>
      <Navbar color="primary" dark expand="md">
        <NavbarBrand href="/">Medical Life</NavbarBrand>
        <NavbarToggler onClick={() => toggleOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/" onClick={() => toggleOpen(false)}>
                Начало
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => toggleOpen(false)}
                to="/doctors/"
              >
                Доктори
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => toggleOpen(false)}
                to="/appointments/"
              >
                Моите часове
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => toggleOpen(false)}
                to="/make-appointment/"
              >
                Запазване на час
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                onClick={() => toggleOpen(false)}
                to="/contact/"
              >
                Контакти
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
