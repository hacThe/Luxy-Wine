import { Col, Container, Row } from "react-bootstrap";
import { SuggestProduct } from '../../component/SuggestProduct';
import { Breadcrumb } from '../../component/Breadcrumb'
import { ContactForm } from "../../component/ContactForm";
import { CartItem } from "./component/CartItem";
import './Cart.scss'

function Cast() {

    const dataBread = [
        {
            name: 'Giỏ hàng',
            link: '/gio-hang'
        }]

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

    const quantity = 2;

    return (
        <Container className="cart-wrapper">
            <Breadcrumb data={dataBread} />

            <div className="cart-header">
                <h1>Giỏ hàng của bạn</h1>
                <p>(Có <b>3</b> sản phẩm trong giỏ hàng)</p>
            </div>

            <Row className="cart-body">
                <Col xs={12} xl={9} className="list-product">
                    <CartItem product={product} quantity={quantity} />
                    <CartItem product={product} quantity={quantity} />
                    <CartItem product={product} quantity={quantity} />
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