import { Col, Container, Row } from "react-bootstrap";
import { SuggestProduct } from '../../component/SuggestProduct';
import { Breadcrumb } from '../../component/Breadcrumb'
import { ContactForm } from "../../component/ContactForm";
import { CartItem } from "./component/CartItem";
import './Cart.scss'
import { cookiesUtil } from "../../../utilities";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../actions";

function Cast() {

    const dataBread = [
        {
            name: 'Giỏ hàng',
            link: '/gio-hang'
        }]

    const [rerender, setRerender] = useState(true);
    const dispatch = useDispatch();
    const products = useSelector(state => state.userReducer.productsInCart) || {};

    const handleDeleteCart = (id) => {
        console.log("item delete: ", id);
        dispatch(userActions.editCart({ product: id, quantity: 0 }));
        setRerender(!rerender);
    }

    useEffect(() => {
        dispatch(userActions.getProductsInCart());
    }, [])

    return (
        <Container className="cart-wrapper">
            <Breadcrumb data={dataBread} />

            <div className="cart-header">
                <h1>Giỏ hàng của bạn</h1>
                <p>(Có <b>{products.length}</b> sản phẩm trong giỏ hàng)</p>
            </div>

            <Row className="cart-body">
                <Col xs={12} xl={9} className="list-product">
                    {
                        products.length > 0 && products.map((val, idx) => (
                            <div key={idx}>
                                <CartItem product={val.product} quantity={val.quantity} handleDeleteCart={handleDeleteCart} />
                            </div>
                        ))
                    }
                </Col>

                <Col xs={12} xl={3} className="receipt-briefing">
                    <div>
                        <h1>TÓM TẮT ĐƠN HÀNG</h1>
                        <p>Chưa bao gồm phí vận chuyển</p>
                        <div className="total-price">
                            <p>Tổng tiền: </p>
                            <p>1.900.000đ</p>
                        </div>
                        <hr></hr>

                        <p><i>Bạn có thể nhập mã ở trang thanh toán</i></p>

                        <div className="button-group">
                            <button className="btn-buy">Tiến hành đặt hàng</button>
                            <button className="btn-to-store">Mua thêm sản phẩm</button>
                        </div>
                    </div>
                </Col>
            </Row>
            <ContactForm />
            <SuggestProduct />
        </Container>
    )
}
export default Cast;