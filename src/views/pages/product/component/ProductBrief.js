import { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import HorizontalScroll from 'react-horizontal-scrolling';
import './ProductBrief.scss'

function ProductBrief(props) {
    const [currentImg, setCurrentImg] = useState({ val: props.product.avtURL, id: 0 });
    const handleImgClick = (val, id) => {
        setCurrentImg({ val: val, id: id });
    }
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const sellPrice = formatter.format(props.product.sellPrice);
    const discountPrice = formatter.format(props.product.discountPrice);
    const discountPercent = Math.floor((props.product.sellPrice - props.product.discountPrice) / props.product.sellPrice * 100);

    return (
        <Container className="product-briefing-wrapper">
            <Row>
                <Col xs={12} lg={6} className="product-img-group">
                    <div className='img-list'>
                        <img
                            onClick={() => handleImgClick(props.product.avtURL, 0)}
                            src={props.product.avtURL}
                            className={currentImg.id === 0 ? "img-active" : ""}
                        ></img>
                        {props.product.imgURLs.map((val, idx) => (
                            <img
                                key={idx}
                                onClick={() => handleImgClick(val, idx + 1)}
                                src={val}
                                className={idx + 1 === currentImg.id ? "img-active" : ""}
                            ></img>
                        ))}
                    </div>
                    <div className='current-img'>
                        <img src={currentImg.val}></img>
                    </div>
                </Col>
                <Col xs={12} lg={6} className="product-briefing">
                    <Container>

                    <div className='product-code'>
                        <p>Mã sản phẩm: {props.product.sku}</p>
                    </div>
                    <div className='product-name'>
                        <p>{props.product.name}</p>
                    </div>
                    <div className='product-discount'>
                        {props.product.discountPrice !== 0 &&
                            <>
                                <p> {discountPrice}</p>
                                <span>-{discountPercent}%</span>
                            </>}
                    </div>
                    <div className='sell-price'>
                        {props.product.discountPrice !== 0 ?
                            <p>{discountPrice}</p> :
                            <p>{sellPrice}</p>}
                    </div>
                    <div className='product-count'>
                        <h3>Số lượng: {props.product.quantity}</h3>
                       {/*  <div>
                            <button></button>
                            <input type={'number'}></input>
                            <button></button>
                        </div> */}
                    </div>
                    <div className='buy-btn-group'>
                        <button className='btn-add-to-cast'>Thêm vào giỏ hàng</button>
                        <br></br>
                        <button className='btn-buy'>Đặt hàng</button>
                    </div>
                        </Container>
                </Col>
            </Row>
        </Container>
    )
}
export { ProductBrief }