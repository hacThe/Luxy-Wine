import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Banner } from '../../component/BannerProduct'
import { SuggestProduct } from '../../component/SuggestProduct'
import { AccessoryList } from './component/AccessoryList'
import './Accessories.scss'

const SpecialProducts = () => {

  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Container className="products-wrapper">
      <Banner url='https://res.cloudinary.com/tanthanh0805/image/upload/v1645178807/LuxyWine/Banner_fxehr3.png' />
      <div className='special-product-head'>
        <h1>Phụ kiện dành cho rượu vang</h1>
      </div>

      <AccessoryList />

      <div className='suggest-product'>
        <SuggestProduct />
      </div>
    </Container>
  )
}

export default SpecialProducts
