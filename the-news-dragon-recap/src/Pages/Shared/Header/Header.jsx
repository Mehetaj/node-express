import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Container>
                <div className='text-center'>
                    <img src={logo} alt="" />
                    <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                    <p>{moment().format('dddd, MMMM D, YYYY ')}</p>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <Button variant='danger'>Latest</Button>
                    <marquee behavior="" scrolldelay="2"  direction="left">My ex girlfriends Anonna , Maisha , Isanta , Jepti , Latifa , Anika etc..... <span className='text-primary text-decoration-underline '>See More</span></marquee>
                </div>
                {/* Navbar */}

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <p className='link'><Link to="#features">Home</Link></p>
            <p className='link'><Link to="#pricing">About</Link></p>
            <p className='link'><Link to="#pricing">Career</Link></p>
           
          </Nav>
          <Nav className='d-flex align-items-center'>
            <p className='link'><Link  to="#deets">Profile</Link></p>
            <p className='link'><Link eventKey={2}>
              <Button variant='dark'>Login</Button>
            </Link></p>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </Container>
        </div>
    );
};

export default Header;