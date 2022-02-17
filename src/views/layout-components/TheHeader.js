import React from 'react'
import { useDispatch } from "react-redux";
import { userActions } from "../../actions/user.actions";
import { Nav, Navbar, Container, Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faSignOut, faCartPlus, faPhoneVolume, faSearch } from '@fortawesome/free-solid-svg-icons'
import './TheHeader.scss';


const TheHeader = () => {
  const dispatch = useDispatch();

  function HandleLogOutOnClick() {
    dispatch(userActions.logout())
  }
  return (
    <div style={{
      backgroundColor: "#FFFFFF"
    }}>
       <Container className='hd1'>
              <Container className='header'>
      <Row className='nav-1'>
        <Col xs={3} className='nav-1a'>
          <p>
            <FontAwesomeIcon icon={faPhoneVolume} /> 0334.696.473
          </p>
        </Col>
        <Col xs={9} className='nav-1b'>
          <Nav as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/home">Tra cứu đơn hàng</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-1">
                <FontAwesomeIcon icon={faCircleUser} />
                Nguyen Tan Thanh
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link onClick={() => { HandleLogOutOnClick() }}>
                <FontAwesomeIcon icon={faSignOut} />
                Đăng xuất
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link eventKey="link-2">
                <FontAwesomeIcon icon={faCartPlus} />
                Giỏ hàng
              </Nav.Link>
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
                <Nav.Link href="#action1">Trang chủ</Nav.Link>
                <Nav.Link href="#action2">Rượu</Nav.Link>
                <Nav.Link href="#action3">Combo khuyến mãi</Nav.Link>
                <Nav.Link href="#action4">Phụ kiện</Nav.Link>
                <Nav.Link href="#action5">Tin tức</Nav.Link>
                <Nav.Link href="#action6">Liên hệ</Nav.Link>

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
      </Container>
    </div>
     
  )
}

export default React.memo(TheHeader)
