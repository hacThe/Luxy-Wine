import React from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBookmark } from '@fortawesome/free-solid-svg-icons'
import "./ProductComponent.scss"


const product = {
    name: "Wine Castellari Bergaglio, Salluvii Gavi, 2017",
    img: "https://res.cloudinary.com/tanthanh0805/image/upload/v1645587735/LuxyWine/Rectangle10_tmk53m.png",
    desciption: "Italy, DOCG, White, Dry, 0.75L",
    sellPrice: 750000,
    discountPrice: 700000,
}
function ProductName(props) {
    return (
        <>
            <Card.Title className='product-name'>{props.name}</Card.Title>
        </>
    )
}
function Description(props) {
    return (
        <>
            <Card.Text className='desciption'>{props.desciption}</Card.Text>
        </>
    )
}
function NewPrice(props) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    let price = formatter.format(props.newPrice);
    return (
        <>
            <Card.Text className='new-price'>{price}</Card.Text>
        </>
    )
}
function OldPrice(props) {
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    let price = formatter.format(props.oldPrice);

    let percent = Math.floor((props.oldPrice - props.newPrice) / props.oldPrice * 100);
    return (
        <>
            <Row>
                <Col xs={8} className="text-end">
                    <Card.Text className='old-price'>{price}</Card.Text>
                </Col>
                <Col xs={4} className="text-start">
                    <Card.Text className='discount-percent'>{percent}%</Card.Text>
                </Col>
            </Row>
        </>
    )
}
function HoverContent() {
    return (
        <>
            <Card.Body className='hover-content row'>
                <Link to={`/san-pham`} style={{ height: "93%", width: "100%", margin: "0px", padding: "0px", backgroundColor: "#00000020" }}>
                </Link>
                <Row style={{ height: "7%", backgroundColor: "black", margin: "0px", padding: "0px" }}>
                    <Col style={{ padding: "0px", borderRight: "solid 1px white" }}>
                        <Button><FontAwesomeIcon icon={faCartPlus} /></Button>
                    </Col>
                    <Col style={{ padding: "0px" }}>
                        <Button to={`/san-pham`}>Mua Ngay</Button>
                    </Col>
                </Row>
            </Card.Body>
        </>
    )
}
function NewTag() {
    return (
        <>
            <div className='new-tag'>
                <div className='shape1'></div>
                <div className='shape2'>NEW</div>
            </div>
        </>
    )
}
function SpecialTag() {
    return (
        <>
            <div className='special-tag'>
                <div className='rectangle'>Special Offer</div>
                <div className='triangle '></div>
            </div>
        </>
    )
}

const NormalProduct = () => {
    return (
        <>
            <div className="product-card normal-product">
                <Card style={{ width: '14rem', height: "28rem" }}>
                    <Card.Img variant="top" src={product['img']} />
                    <Card.Body>
                        <ProductName name={product['name']} />
                        <Description desciption={product['desciption']} />
                        <Card.Text style={{
                            height: "20px",
                            margin: "0px"
                        }}></Card.Text>
                        <NewPrice newPrice={product['sellPrice']} />
                    </Card.Body>
                    <HoverContent />
                </Card>
            </div>
        </>
    )
}

const SellProduct = () => {
    return (
        <>
            <div className="product-card sell-product">
                <Card style={{ width: '14rem', height: "28rem" }}>
                    <Card.Img variant="top" src={product['img']} />
                    <Card.Body>
                        <ProductName name={product['name']} />
                        <Description desciption={product['desciption']} />
                        <OldPrice oldPrice={product['sellPrice']} newPrice={product['discountPrice']} />
                        <NewPrice newPrice={product['discountPrice']} />
                    </Card.Body>
                    <HoverContent />
                </Card>
            </div>
        </>
    )
}

const NewProduct = () => {
    return (
        <>
            <div className="product-card new-product">
                <Card style={{ width: '14rem', height: "28rem" }}>
                    <Card.Img variant="top" src={product['img']} />
                    <Card.Body>
                        <ProductName name={product['name']} />
                        <Description desciption={product['desciption']} />
                        <OldPrice oldPrice={product['sellPrice']} newPrice={product['discountPrice']} />
                        <NewPrice newPrice={product['discountPrice']} />
                    </Card.Body>
                    <NewTag />
                    <HoverContent />
                </Card>
            </div>
        </>
    )
}

const SpecialProduct = () =>{
    return(
        <>
            <div className="product-card new-product">
                <Card style={{ width: '14rem', height: "28rem" }}>
                    <Card.Img variant="top" src={product['img']} />
                    <Card.Body>
                        <ProductName name={product['name']} />
                        <Description desciption={product['desciption']} />
                        <OldPrice oldPrice={product['sellPrice']} newPrice={product['discountPrice']} />
                        <NewPrice newPrice={product['discountPrice']} />
                    </Card.Body>
                    <SpecialTag />
                    <HoverContent />
                </Card>
            </div>
        </>
    )
}


export { NormalProduct, SellProduct, NewProduct, SpecialProduct };
