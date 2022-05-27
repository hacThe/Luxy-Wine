import { Col, Row } from "react-bootstrap";
import { BsFillCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import './ProductDetailInfo.scss'

function ProductDetailInfo(props) {

    return (
        <Row className="product-detail-info-wrapper">
            <Col xs={3} className='left-grid'>
                <h1>NHIỆT ĐỘ SỬ DỤNG</h1>
                <p className="temperature">{props.product.temperature.minimum}-{props.product.temperature.maximun}&deg;C</p>

                <h1>MÀU SẮC </h1>
                <p className="product-color"><BsFillCircleFill className={"product-color-" + props.product.color[0]} /> {props.product.color[0]}</p>

                <h1>SỬ DỤNG KÈM THEO</h1>
                {props.product.food.map((val, idx) => (
                    <p className="food-product">
                        <img src={"/Foods/1.svg"}></img>
                        {val}
                    </p>
                ))}
            </Col>

            <Col xs={9} className='right-grid'>

            </Col>
        </Row>
    )
}

export { ProductDetailInfo }