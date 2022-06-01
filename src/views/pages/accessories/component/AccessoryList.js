import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductComponent } from '../../../component/product-component/ProductComponent'
import { PaginationCustom } from '../../../component/PaginationCustom'
import './AccessoryList.scss'

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


function AccessoryList(props) {

    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        console.log("current page: ", currentPage);
    }, [currentPage])

    return (
        <Container className='product-list-wrapper'>
            <Container className='product-list-header-wrapper'>
                <div className='product-list-header'>
                    <div className='product-sort'>
                        <label>Sấp xếp theo: </label>
                        <select>
                            <option value={'name'}>Tên A-Z</option>
                            <option value={'cheapest'}>Giá thấp nhất</option>
                            <option value={'mostExpensive'}>Giá cao nhất</option>
                            <option value={'sales'}>Bán chạy nhất</option>
                            <option value={'newest'}>Mới nhất</option>
                        </select>
                    </div>

                    <div className='result-filter'>
                        <p>Tìm được 65 sản phẩm</p>
                    </div>
                </div>
            </Container>

            <Container className='product-list'>
                {Array.from({ length: 20 }).map((_, idx) => (
                    <div key={idx} className="py-3 px-3">
                        <ProductComponent product={product} />
                    </div>
                ))}
                <div className='product-list-footer'>
                    <PaginationCustom numberOfElement={65} elementPerPage={3} setCurrentPage={setCurrentPage} />
                </div>
            </Container>

        </Container>
    )
}

export { AccessoryList } 
