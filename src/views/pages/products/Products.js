import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductList } from './component/ProductList'
import { FilterComponent } from './component/FilterComponent'
import { SuggestProduct } from '../../component/SuggestProduct'
import './Products.scss'



const Products = () => {
  return (
    <Container className="products-wrapper">
      <div className='product-banner'>
        <div className='banner-img'></div>
      </div>

      <Container className='product-list-group'>
        <Row className='product-list-group_row'>
        <Col xs={3} className="product__filter-group">
          <FilterComponent />
        </Col>
        <Col xs={9} className="product__list-group">
          <ProductList />
        </Col>
        </Row>
      </Container>

      <div className='suggest-product'>
        <SuggestProduct />
      </div>
    </Container>
  )
}

export default Products
