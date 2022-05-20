import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userActions } from "../../actions/user.actions";
import { Nav, Navbar, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { MdPhoneInTalk, MdOutlineReceiptLong, MdLogout } from 'react-icons/md';
import { GoSearch } from 'react-icons/go';
import { FaUserCircle } from 'react-icons/fa';
import { BsCartCheck } from 'react-icons/bs'

import './TheHeader.scss';


const TheHeader = () => {
  const dispatch = useDispatch();

  function HandleLogOutOnClick() {
    dispatch(userActions.logout())
  }

  return (
    <div className='header-wrapper' tabIndex={100}>
      <Container className='header'>
        <div className='nav-1'>
          <div className='nav-1a'>
            <p>
              <MdPhoneInTalk /> 0334.696.473
            </p>

          </div>

          <div className='nav-1b'>
            <Nav as="ul">
              <Nav.Item as="li">
                <NavLink to={`/404`}>
                  <MdOutlineReceiptLong />
                  Tra cứu đơn hàng
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={`/404`}>
                  <FaUserCircle />
                  Nguyen Tan Thanh
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={() => { HandleLogOutOnClick() }}>
                  <MdLogout />
                  Đăng xuất
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={`/trang-chu`}>
                  <BsCartCheck />
                  Giỏ hàng
                </NavLink>
              </Nav.Item>
            </Nav>
          </div>
        </div>

        <Row className='nav-2 mx-0'>
          <Container className='nav-2-navigate-group'>
            <Navbar bg="light" expand="xxl" className='nav-2-navbar-expand'>
              <Navbar.Brand href="#" className='nav-2-navbar-brand mx-0'>
                <h1>
                  Luxy Wine
                </h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className='ms-4' style={{ height: "4rem", width: "4rem" }} />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <NavLink to={`/trang-chu`} role='button' className='nav-link' >Trang chủ</NavLink>
                  <NavLink to={`/san-pham`} role='button' className='nav-link' >Rượu</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Combo khuyến mãi</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Phụ kiện</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Tin tức</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Liên hệ</NavLink>

                </Nav>
                <div className='form-wrapper'>
                  <Form className="form-search d-flex">
                    <FormControl
                      type="search"
                      placeholder="Tìm kiếm..."
                      aria-label="Search"
                      className='ms-3'
                    />
                    <Button className='btn-search'>
                      <GoSearch />
                    </Button>
                  </Form>
                </div>
              </Navbar.Collapse>
            </Navbar>
          </Container>
        </Row>
      </Container>
    </div>

  )
}

export default React.memo(TheHeader)
