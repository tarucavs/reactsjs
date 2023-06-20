import React, { useState } from 'react';
import './NavBar.css';
import Cart3 from './Cart3/Cart3';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '..//..//assets/react.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NavBar({ cartCount, handleOpenModal }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <Navbar className='nav__container' expand="lg">
        <Container fluid>
          <div className='logo__container'>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" onClick={toggleSidebar} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="link my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Link className='nav__link'  style={{ color: 'white'}} to={"/"} >Inicio</Link>
              <Link className='nav__link'  style={{ color: 'white' }} to={"/productos"} >Productos</Link>
              <Link className='nav__link'  style={{ color: 'white' }} to={"/contacto"} >Contacto</Link>
            </Nav>

            <div className='form__container'>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Buscar"
                  className="me-4"
                  aria-label="Search"
                />
                <Button variant="success">Buscar</Button>
              </Form>
            </div>
          </Navbar.Collapse>
          <div className='cart__container'>
            <div>
              <p>Carrito</p>
            </div>
            <div className='cart-widget__count' onClick={handleOpenModal}>
              <CartWidget cartCount={cartCount} />
            </div>
          </div>
        </Container>
      </Navbar>

      <div className="sidebar__container">
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <div className='hamburguer-button'>
            {showSidebar ? (
              <FaTimes color="white" onClick={toggleSidebar} size={24} />
            ) : (
              <FaBars color="white" onClick={toggleSidebar}  size={24} />
            )}
            <span className="sidebar__text">BÚSQUEDA POR CATEGORÍA</span>
          </div>
        </Navbar.Toggle>
        {showSidebar && (
          <div className="sidebar">
            <ul className="sidebar__list">
            <li><Link className='nav__link'   to={"/"} >ARMADO DE PC</Link></li>
            <li><Link className='nav__link'   to={"/"} >ARMADO DE COMBO</Link></li>
            <hr  style={{ color: 'white' }} />
           <li><Link className='nav__link'   to={"/productos/Monitores"} >Monitores</Link></li> 
           <li> <Link className='nav__link'   to={"/productos/Procesadores"} >Procesadores</Link></li>
            <li><Link className='nav__link'   to={"/productos/Perifericos"} >Perifericos</Link></li>
           <li> <Link className='nav__link'   to={"/productos"} >Notebooks</Link></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default NavBar;
