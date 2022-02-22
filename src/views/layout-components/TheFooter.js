import React from 'react'
import { useDispatch } from "react-redux";
import { userActions } from "../../actions/user.actions";
import { Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons'
import { faInstagramSquare, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import './TheFooter.scss';
import { Link } from 'react-router-dom';

const TheFooter = () => {
  return (
    <Container>
      <Row className='footer'>
        <Col xs={12} sm={6} className='address'>
          <h1>Luxy Wine</h1>
          <p style={
            {
              fontWeight: 'bold'
            }
          }>Kho rượu Nhập khẩu chính hãng, giá tốt</p>
          <p>Địa chỉ: 29 Đường số 8, P. Bình Hưng Hòa A, Q. Bình Tân, TP.HCM</p>
          <p>Số điện thoại: 0386 39 7579 - 090236 4049</p>
        </Col>
        <Col xs={12} sm={3}>
          <p style={
            {
              fontWeight: 'bold'
            }
          }>
            HỖ TRỢ KHÁCH HÀNG</p>
          <Link to='/'><p>Chính sách và quy định chung</p></Link>
          <Link to='/'><p>Điều khoản và bảo mật</p></Link>
          <Link to='/'><p>Chính sách thanh toán</p></Link>
          <Link to='/'><p>Chính sách đổi trả</p></Link>
          <Link to='/'><p>Về Luxy Wine</p></Link>
        </Col>
        <Col xs={12} sm={3}>
          <h5>Hotline: 0334.696.473</h5>
          <p style={
            {
              fontWeight: 'bold'
            }
          }>
            Theo dõi chúng tôi:
            <a href='/'>
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
          </p>
          <p>Nhập email để đăng ký nhận những thông tin khuyến mãi đến từ Luxy Wine</p>
          <InputGroup className="my-3">
            <FormControl
              placeholder="Nhập email..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              Gửi
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default React.memo(TheFooter)
