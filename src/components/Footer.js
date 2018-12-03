import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import socialIcons from '../images/social-icons.png'

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 1.2rem;
  margin: 0;
  padding-top: 0.5rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`
const Li = styled.li`
  margin-left: 1rem;
  margin-right: 1rem;
  @media screen and (max-width: 500px) {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ home }) => (home ? 'white' : 'black')};
  &:hover {
    color: #00dfb2;
  }
`
const Nav = styled.nav`
  margin-top: 1.5rem;
  border-top: 1px solid #ccc;
  padding: 1rem;
  background-color: transparent;
`

export default function Footer({ home }) {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledLink to="/">Начало</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/doctors/">Лекари</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/contacts/">Контакти</StyledLink>
        </Li>
      </Ul>
      <img style={{ maxWidth: '10rem' }} src={socialIcons} alt="Social Icons" />
    </Nav>
  )
}
