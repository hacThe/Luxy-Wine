import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { userActions } from "../../actions/user.actions";
import { Nav, Navbar, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut, faCartPlus, faPhoneVolume, faSearch, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import './TheHeader.scss';


const TheHeader = () => {
  const dispatch = useDispatch();

  function HandleLogOutOnClick() {
    dispatch(userActions.logout())
  }

  return (
    <div className='header-wrapper' tabIndex={100}>
      <Container className='header'>
        <Row className='nav-1'>
          <Col xs={12} sm={3} className='nav-1a'>
            <p>
              <FontAwesomeIcon icon={faPhoneVolume} /> 0334.696.473
            </p>
          </Col>
          <Col xs={12}  sm={9} className='nav-1b'>
            <Nav as="ul">
              <Nav.Item as="li">
                <NavLink to={`/404`}>
                <FontAwesomeIcon icon={faFileInvoiceDollar} />
                  Tra cứu đơn hàng
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={`/404`}>
                  <FontAwesomeIcon icon={faCircleUser} />
                  Nguyen Tan Thanh
                </NavLink>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link onClick={() => { HandleLogOutOnClick() }}>
                  <FontAwesomeIcon icon={faSignOut} />
                  Đăng xuất
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <NavLink to={`/trang-chu`}>
                  <FontAwesomeIcon icon={faCartPlus} />
                  Giỏ hàng
                </NavLink>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        <Row className='nav-2'>
          <Col xs={3} className='nav-2-webName'>
            <h1>
              Luxy Wine
            </h1>
          </Col>
          <Col xs={9} className='nav-2-pages'>
            <Navbar bg="light" expand="lg">
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <NavLink to={`/trang-chu`} role='button' className='nav-link' >Trang chủ</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Rượu</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Combo khuyến mãi</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Phụ kiện</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Tin tức</NavLink>
                  <NavLink to={`/404`} role='button' className='nav-link' >Liên hệ</NavLink>

                </Nav>
                <Form className="form-search d-flex">
                  <FormControl
                    type="search"
                    placeholder="Tìm kiếm..."
                    aria-label="Search"
                  />
                  <Button className='btn-search'>
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </Form>

              </Navbar.Collapse>
            </Navbar>

          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default React.memo(TheHeader)
