import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../../../actions";
import { CartItem } from "../../cart/component/CartItem"
import './ReceiptBrefing.scss'
function ReceiptBrefing(props) {
    const dispatch = useDispatch();
    const products = useSelector(state => state.userReducer.productsInCart) || [];

    var formatter = new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
    });

    const handleDeleteCart = (id) => {
        dispatch(userActions.editCart({ product: id, quantity: 0 }));
    }
    const getTotalPrice = (products) => {
        var price = 0
        if (products.length > 0) {
            products.forEach(element => {
                price += element.product.price * element.quantity;
            });
        }
        return price;
    }

    const transportFee = 50000;
    const promotionalPrice = 0;
    const totalPrice = getTotalPrice(products);
    const finalPrice = totalPrice + transportFee - promotionalPrice;

    useEffect(() => {
        dispatch(userActions.getProductsInCart());
    }, [])

    return (
        <Container className="receipt-brefing">
            <div className="list-product">
                {
                    products.length > 0 && products.map((val, idx) => (
                        <div key={idx}>
                            <CartItem product={val.product} quantity={val.quantity} handleDeleteCart={handleDeleteCart} />
                        </div>
                    ))
                }
            </div>
            <div className="receipt-description-wrapper">
                <div className="receipt-description">
                    <h1 className="receipt-title">TÓM TẮT ĐƠN HÀNG</h1>
                    <div className="price-item">
                        <h5>Tổng tiền: </h5>
                        <p>{formatter.format(totalPrice)}</p>
                    </div>

                    <div className="price-item">
                        <h5>Phí vận chuyển: </h5>
                        <p>{formatter.format(transportFee)}</p>
                    </div>

                    <div className="price-item">
                        <h5>Khuyến mãi: </h5>
                        <p>{formatter.format(promotionalPrice)}</p>
                    </div>
                    <hr></hr>
                    <div className="price-item">
                        <h4>Tổng tiền: </h4>
                        <h4>{formatter.format(finalPrice)}</h4>
                    </div>

                    <p className="receipt-note"><i>Hàng giảm giá không hỗ trợ đổi - trả.
                        <br></br> Mọi khiếu nại giao nhầm/ thiếu sản phẩm, Luxy Wine chỉ hỗ trợ khi bạn cung cấp video từ khi mở hộp tới mở sản phẩm bên trong không bị cắt đoạn. Xin cảm ơn!</i></p>

                    <div className="button-group">
                        <div className="input-voucher">
                            <input type={'text'} placeholder='Mã giảm giá' />
                            <button className="btn-buy" >Áp dụng</button>
                        </div>
                        <button className="order-btn" type="submit" onClick={() => props.setTotalPrice(totalPrice + transportFee - promotionalPrice)}>Đặt hàng</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}
export { ReceiptBrefing }