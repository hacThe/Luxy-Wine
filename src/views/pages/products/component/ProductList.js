import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductComponent } from '../../../product-component/ProductComponent'
import { PaginationCustom } from '../../../component/PaginationCustom'
import './ProductList.scss'

const products = [{
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
}]


function ProductList(props) {

    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        console.log("current page: ", currentPage);
    }, [currentPage])

    return (
        <Container className='product-list-wrapper'>
            <div className='product-list-header-wrapper'>
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
                        <button>Tất cả sản phẩm</button>
                    </div>

                    <div className='result-filter'>
                        <p>Tìm được 65 sản phẩm</p>
                    </div>
                </div>
            </div>

            <div className='product-list'>
                {Array.from({ length: 12 }).map((_, idx) => (
                    <div key={idx} className="py-3 px-3">
                        <ProductComponent product={products[0]} />
                    </div>
                ))}
                <div className='product-list-footer'>
                    <PaginationCustom numberOfElement={65} elementPerPage={3} setCurrentPage={setCurrentPage} />
                </div>
            </div>

        </Container>
    )
}

export { ProductList } 
