import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Banner } from '../../component/BannerProduct'
import { SuggestProduct } from '../../component/SuggestProduct'
import './SpecialProducts.scss'



const SpecialProducts = () => {
  return (
    <Container className="products-wrapper">
      <Banner url='https://res.cloudinary.com/tanthanh0805/image/upload/v1645178807/LuxyWine/Banner_fxehr3.png' />

      <div className='suggest-product'>
        <SuggestProduct />
      </div>
    </Container>
  )
}

export default SpecialProducts
