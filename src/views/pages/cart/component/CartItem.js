import { Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai'
import './CartItem.scss'

function CartItem(props) {
    const [quantity, setQuantity] = useState(props.quantity);
    const handleChangeQuantity = (number) => {
        if (parseInt(number) < 1) setQuantity(1);
        else if (isNaN(parseInt(number)) && isNaN(quantity)) setQuantity(1);
        else setQuantity(parseInt(number));
    }
    var formatter = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    });

    const sellPrice = formatter.format(props.product.sellPrice);
    const discountPrice = formatter.format(props.product.discountPrice);

    return (
        <Row className='cart-item'>
            <Col xs={12} md={6} className='left-grid'>
                <div className='product-img'>
                    <img src={props.product.avtURL}></img>
                </div>
                <div className='product-name'>
                    <p>Mã sản phẩm: {props.product.sku}</p>
                    <h1>{props.product.name}</h1>
                </div>
            </Col>
            <Col xs={12} md={6} className='right-grid'>

                <div className='inp-quantity'>
                    <button onClick={() => handleChangeQuantity(quantity - 1)}>-</button>
                    <input type={'number'} value={quantity} onChange={(e) => handleChangeQuantity(e.target.value)} />
                    <button onClick={() => handleChangeQuantity(quantity + 1)}>+</button>
                </div>

                <div className='product-price'>
                    <div>
                        {props.product.discountPrice > 0 ?
                            <>
                                <p className='old-price'>{sellPrice}</p>
                                <p className='sell-price'>{discountPrice}</p>
                            </> : <p className='sell-price'>{sellPrice}</p>
                        }
                    </div>
                </div>

                <div className='btn-delete'>
                        <button>
                            <AiOutlineDelete />
                        </button>
                </div>
            </Col>
        </Row>
    )
}
export { CartItem }