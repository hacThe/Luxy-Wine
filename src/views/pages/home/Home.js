import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions/user.actions";
import { Carousel, Container, Button, Card, Row, Col } from "react-bootstrap";
import { IoStar } from 'react-icons/io5';
import { ProductComponent } from './../../product-component/ProductComponent';
import HorizontalScroll from 'react-horizontal-scrolling';
import './Home.scss';

const Home = () => {

  const product = {
    name: "Wine Castellari Bergaglio, Salluvii Gavi, 2017",
    avtURL: "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png",
    imgURLs: ["https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png", "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png"],
    quantity: 7,
    importPrice: 600000, // Giá nhập
    sellPrice: 750000, // Giá bán gốc
    discountPrice: 70000, // Giá bán đã sale
    temperature: { minimum: 10, maximun: 40 }, // Nhiệt độ sử dụng
    color: ['White', 'Blue'],
    food: ["Bò khô"],
    origin: "Italy", // Xuất xứ
    producer: "DOCG", //Nhà sản xuất
    concentrationPercent: 40, //  nồng độ cồn ( tính theo %)
    capacity: 750, // Dung tích (ml)
    vintage: 2017, // Năm sản xuất
    aboutProduct: "about product", // Một đoạn ngắn mô tả thông tin sản phẩm
    suger: 10, // Hàm lượng đường
    experation: "Date",//Date
    productType: "wine", // wine/combo/accessory
    isSpecial: true,
    isNew: true,
}


  return (
    <>
      <Container className="Home-page">
        <Slider />
        <Slogan />
        <Product />
        <AboutUs />
        <CustomerReview />
        <Map />
      </Container>
    </>
  );

  function Slider() {
    return (
      <Row className="slider" >
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
                <h1>Second slide label</h1>
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
                <h1>Third slide label</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    )
  }

  function Slogan() {
    return (
      <div className="slogan">
        <h3>Wine</h3>
        <p className="para-1">
          “Wine is one of the most civilized things in the world and one of the most natural things of the world that has been brought
          to the greatest perfection, and it offers a greater range for enjoyment and appreciation than, possibly, any other purely sensory thing.”
        </p>
        <p className="para-2">― Ernest Hemingway ―</p>
      </div>
    )
  }

  function Product() {
    
    return (
      <Container className="product">
        <h3 style={{ marginBottom: "32px" }}>Sản phẩm nổi bật của Luxy Wine</h3>
        <div className="px-5 py-3" id="container">
          <HorizontalScroll>
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="px-2">
                <ProductComponent product = {product}/>
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </Container>
    )

  }

  function AboutUs() {
    return (
      <div className="about-us">
        <div className="baner-img"></div>
        <h3>Luxy Wine</h3>
        <p className="para-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
          release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
          versions of Lorem Ipsum.
        </p>
      </div>
    )

  }

  function CustomerReview() {
    return (
      <div className="customer-review">
        <h3>Đánh giá của khách hàng</h3>
        <Row xs={1} className="g-4 body-review">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Card key={idx} className="">
              <Row className="body">
                <Col xs={12} md={3}>
                  <div className="card-img">
                    <Card.Img variant="left" src="https://res.cloudinary.com/tanthanh0805/image/upload/v1640322386/moriiStore/N%C3%A0ng_th%C6%A1__13_jk1or9.jpg" />
                  </div>
                  <div className="assess d-flex justify-content-center" style={{ color: "yellow" }}>
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <IoStar key={idx} style={{ padding: "2px" }} />
                    ))}
                  </div>
                </Col>
                <Col xs={12} md={9}>
                  <Card.Body>
                    <Card.Title className="card-title">Card title</Card.Title>
                    <Card.Text className="card-text">
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Row>
      </div>
    )
  }

  function Map() {
    return (
      <div className="gg-map">
        <div className="map-img"></div>
      </div>
    )
  }
};

export default Home;
