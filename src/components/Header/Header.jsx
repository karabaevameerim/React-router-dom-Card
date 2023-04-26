import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Header/Header.css'

const Header = () => {
  return (
    <div className='container'>
    <Navbar>
      <Container>
      <Link to='/'><Navbar.Brand>Home</Navbar.Brand></Link>
       <Link to='/addform'><Navbar.Brand>AddForm</Navbar.Brand></Link>
        <Link to='/about-us'><Navbar.Brand>AboutUs</Navbar.Brand></Link>
        <Link to='/contacts'><Navbar.Brand>Contacts</Navbar.Brand></Link>
       <Link to='/select'><Navbar.Brand>Select</Navbar.Brand></Link>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header