import { Container } from 'react-bootstrap'
import { Breadcrumb } from '../../component/Breadcrumb'
import { SuggestProduct } from '../../component/SuggestProduct'
import { ProductBrief } from './component/ProductBrief'
import { ProductDetailInfo } from './component/ProductDetailInfo'
import './Product.scss'

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

const dataBread = [
    {
        name: 'Rượu',
        link: '/san-pham'
    },
    {
        name: 'Rượu vang pháp',
        link: '/chi-tiet-san-pham/:1'
    }]
function Product() {
    return (
        <Container className='product-wrapper'>
            <Breadcrumb data={dataBread} />
            <ProductBrief product={product} />
            <div className='detail-banner'>
                <h1>ĐẶC TRƯNG</h1>
            </div>
            {product.productType !== 'accessory' ?
                <ProductDetailInfo product={product} /> :
                <Container className='accessory-detail'>
                    <h5>Mô tả: </h5>
                    <p>{product.aboutProduct}</p>
                </Container>}
            <div className='suggest-product'>
                <SuggestProduct />
            </div>

        </Container>
    )
}
export default Product 