import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions/user.actions";
import { Carousel, Container, Button, Card, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import './Home.scss';
const Login = () => {

  return (
    <>
      <div className="Home-page">
        <Container  className="slider">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tanthanh0805/image/upload/v1645172016/LuxyWine/slider1_vafvkl.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <div className="carousel-content">
                  <h1>Luxy Wine</h1>
                  <p>Chuyên gia cung cấp sỉ và lẻ rượu nhập khẩu</p>
                  <Button variant="light">MUA NGAY</Button>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tanthanh0805/image/upload/v1645174210/LuxyWine/best-online-wine-shops-FT-MAG1019_i07qkl.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <div className="carousel-content">
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/tanthanh0805/image/upload/v1645174206/LuxyWine/ruou-vang-va-mon-an_o8d7ef.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <div className="carousel-content">
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container className="slogan">
          <h3>Wine</h3>
          <p className="para-1">
            “Wine is one of the most civilized things in the world and one of the most natural things of the world that has been brought
            to the greatest perfection, and it offers a greater range for enjoyment and appreciation than, possibly, any other purely sensory thing.”
          </p>
          <p className="para-2">― Ernest Hemingway</p>
        </Container>

        <Container className="product">
          <h3>Sản phẩm nổi bật của Luxy Wine</h3>

        </Container>

        <Container className="about-us">
          <div className="baner-img"></div>
          <h3>Luxy Wine</h3>
          <p className="para-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </p>
        </Container>


        <Container className="customer-review">
          <h3>Đánh giá của khách hàng</h3>
          <Row xs={1} className="g-4 body-review">
            {Array.from({ length: 3 }).map((_, idx) => (
              <Card className="col-9">
                <Row className="body">
                  <Col xs={12} md={3}>
                    <div className="card-img">
                      <Card.Img variant="left" src="https://res.cloudinary.com/tanthanh0805/image/upload/v1640322386/moriiStore/N%C3%A0ng_th%C6%A1__13_jk1or9.jpg" />
                    </div>
                    <div className="assess d-flex justify-content-center" style={{color: "yellow"}}>
                      {Array.from({length:5}).map((_, idx)=>(
                          <FontAwesomeIcon icon={faStar} style={{padding: "2px"}}/>
                      ))}
                    </div>
                  </Col>
                  <Col xs={12} md={9}>
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            ))}
          </Row>
        </Container>

        <Container className="gg-map">
          <div className="map-img"></div>
        </Container>
      </div>
    </>
  );
};

export default Login;
