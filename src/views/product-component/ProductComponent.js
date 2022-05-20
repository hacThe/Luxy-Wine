import React from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { BsCartPlusFill } from 'react-icons/bs'

import "./ProductComponent.scss";

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
            <Card.Text className='desciption'>{props.origin}, {props.producer}, {props.color.toString()}, {props.capacity}ml </Card.Text>
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
                <Row style={{ height: "7%", backgroundColor: "#353535", margin: "0px", padding: "0px" }}>
                    <Col style={{ padding: "0px", borderRight: "solid 1px white" }}>
                        <Button><BsCartPlusFill /></Button>
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
//----------------------------------------------------------------------------------------------------------------//

const ProductComponent = () => {
    return (
        <>
            <div className="product-card discount-product">
                <Card style={{ height: "48rem" }}>
                    <Card.Img variant="top" src={product.avtURL} />
                    <Card.Body>
                        <ProductName name={product.name} />
                        <Description origin={product.origin} producer={product.producer} color={product.color} capacity={product.capacity} />
                        {product.discountPrice !== 0? 
                        <OldPrice oldPrice={product.sellPrice} newPrice={product.discountPrice} /> 
                        :<Card.Text style={{
                            height: "20px",
                            margin: "0px"
                        }}></Card.Text>}
                        <NewPrice newPrice = {product.discountPrice !==0? product.discountPrice: product.sellPrice} />
                    </Card.Body>
                    {product.isNew? <NewTag />: <></>}
                    {product.isSpecial? <SpecialTag />: <></>}
                    <HoverContent />
                </Card>
            </div>
        </>
    )
}

export {ProductComponent };
