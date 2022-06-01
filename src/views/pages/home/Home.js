import React from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../../actions/user.actions";
import { Carousel, Container, Button, Card, Row, Col } from "react-bootstrap";
import { IoStar } from "react-icons/io5";
import { ProductComponent } from "../../component/product-component/ProductComponent";
import HorizontalScroll from "react-horizontal-scrolling";
import { appActions } from "../../../actions";
import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const product = {
    _id: "1",
    name: "Wine Castellari Bergaglio, Salluvii Gavi, 2017",
    sku: "HT3892",
    aboutProduct: "Một đoạn ngắn mô tả thông tin sản phẩm",
    avtURL: "https://vinoteka.vn/assets/components/phpthumbof/cache/092121-1.f82e22adba27a7c64145c7a97710f316.jpg",
    imgURLs: [
        "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png",
        "https://vinoteka.vn/assets/components/phpthumbof/cache/092121-1.f82e22adba27a7c64145c7a97710f316.jpg",
        "https://vinoteka.vn/assets/components/phpthumbof/cache/071303-1.be16d2d411b9f5d48c089e890607cf09.jpg",
        "https://vinoteka.vn/assets/components/phpthumbof/cache/092104-1.e0b0155f7422a686f522524c1b1fbd23.jpg"],

    quantity: 100,
    importPrice: 600000, // Giá nhập
    originPrice: 750000, // Giá bán gốc
    price: 700000, // Giá bán đã sale
    temperature: { minimum: 10, maximun: 40 }, // Nhiệt độ sử dụng
    color: ['Red', 'Blue'],
    food: ["Thịt cừu", "Thịt bò"],
    origin: "Italy", // Xuất xứ
    producer: "DOCG", //Nhà sản xuất
    concentrationPercent: 40, //  nồng độ cồn ( tính theo %)
    capacity: 750, // Dung tích (ml)
    vintage: 2017, // Năm sản xuất
    aboutProduct: "The soil is calcareous-clayish and silt with south exposure. Yield per hectare: 9 tonnes. Manual harvest.Winemaking process:Fermented in stainless steel tanks, at a temperature of about 25-26'C, for 15 days in contact with the skins, it is drained to complete the primary fermentation without grape marc. After completing malolactic fermentation, it continues refinement in stainless steel tanks. ", // Một đoạn ngắn mô tả thông tin sản phẩm
    sugar: 10, // Hàm lượng đường
    experation: "Date",//Date
    productType: "wine", // wine/combo/accessory
    isSpecial: true,
    isNew: true,
    hasSold: 50,//số sp đã bán
}
  const navigate = useNavigate();

  return (
    <>
      <Container className="Home-page">
        <Slider />
        <Slogan />
        <Product />
        <AboutUs />
        <CustomerReview />
        <Map />
        <button
          onClick={() => {
            console.log("Click", appActions);
            dispatch(
              appActions.openConfirmDialog("Click me oke", () =>
                navigate("/quan-ly/san-pham/")
              )
            );
          }}
        >
          Click me
        </button>
      </Container>
    </>
  );

  function Slider() {
    return (
      <Row className="slider">
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
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Row>
    );
  }

  function Slogan() {
    return (
      <div className="slogan">
        <h3>Wine</h3>
        <p className="para-1">
          “Wine is one of the most civilized things in the world and one of the
          most natural things of the world that has been brought to the greatest
          perfection, and it offers a greater range for enjoyment and
          appreciation than, possibly, any other purely sensory thing.”
        </p>
        <p className="para-2">― Ernest Hemingway ―</p>
      </div>
    );
  }

  function Product() {
    return (
      <div className="product">
        <h3 style={{ marginBottom: "32px" }}>Sản phẩm nổi bật của Luxy Wine</h3>
        <div className="px-5 py-3" id="container">
          <HorizontalScroll>
            {Array.from({ length: 12 }).map((_, idx) => (
              <div key={idx} className="px-2">
                <ProductComponent product={product} />
              </div>
            ))}
          </HorizontalScroll>
        </div>
      </div>
    );
  }

  function AboutUs() {
    return (
      <div className="about-us">
        <div className="baner-img"></div>
        <h3>Luxy Wine</h3>
        <p className="para-1">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    );
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
                    <Card.Img
                      variant="left"
                      src="https://res.cloudinary.com/tanthanh0805/image/upload/v1640322386/moriiStore/N%C3%A0ng_th%C6%A1__13_jk1or9.jpg"
                    />
                  </div>
                  <div
                    className="assess d-flex justify-content-center"
                    style={{ color: "yellow" }}
                  >
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <IoStar key={idx} style={{ padding: "2px" }} />
                    ))}
                  </div>
                </Col>
                <Col xs={12} md={9}>
                  <Card.Body>
                    <Card.Title className="card-title">Card title</Card.Title>
                    <Card.Text className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          ))}
        </Row>
      </div>
    );
  }

  function Map() {
    return (
      <div className="gg-map">
        <div className="map-img"></div>
      </div>
    );
  }
};

export default Home;
