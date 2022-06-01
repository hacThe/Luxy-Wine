import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Banner } from '../../component/BannerProduct'
import { SpecialProductList } from './component/SpecialProductList'
import { SuggestProduct } from '../../component/SuggestProduct'
import {GrPrevious, GrNext} from 'react-icons/gr'
import './SpecialProducts.scss'

const filters = [
  {
    name: "Tất cả",
    value: 1
  },
  {
    name: "Hộp quà",
    value: 2
  },
  {
    name: "Combo",
    value: 3
  },
  {
    name: "Khuyến mãi",
    value: 4
  },
  {
    name: "Sản phẩm mới",
    value: 5
  }
]
const SpecialProducts = () => {

  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Container className="special-products-wrapper">
      <Banner url='https://res.cloudinary.com/tanthanh0805/image/upload/v1645178807/LuxyWine/Banner_fxehr3.png' />
      <div className='special-product-head'>
        <h1>Các sản phẩm đặc biệt đến từ LuxyWine</h1>
        <Container className='filter-special-product'>
          <GrPrevious style={{color: "black"}}/>
          {filters.map((value, index) => (
            <button key={index} className={currentTab === index + 1 ? 'btn-active' : 'btn'} onClick={() => setCurrentTab(index + 1)}>
              {value.name}
            </button>
          ))}
          <GrNext style={{color: "black"}}/>
        </Container>
      </div>

      <SpecialProductList />
      <div className='suggest-product'>
        <SuggestProduct />
      </div>
    </Container>
  )
}

export default SpecialProducts
