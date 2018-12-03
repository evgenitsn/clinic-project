import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
              <NavLink href="/">Начало</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/doctors">Лекари</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/appointments">Моите часове</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/make-appointment">Запазване на час</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Контакти</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}
