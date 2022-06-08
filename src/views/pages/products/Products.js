import React , { useEffect } from  'react'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../../../actions/product.actions'
import { Col, Container, Row } from 'react-bootstrap'
import { ProductList } from './component/ProductList'
import { FilterComponent } from './component/FilterComponent'
import { SuggestProduct } from '../../component/SuggestProduct'
import { Banner } from '../../component/BannerProduct'
import './Products.scss'


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.productReducer.products) || []

  useEffect(() => {
   // const query = {}
   // dispatch(productActions.getList(query));
  }, [])

  return (
    <Container className="products-wrapper">
      <Banner url='https://res.cloudinary.com/tanthanh0805/image/upload/v1645178807/LuxyWine/Banner_fxehr3.png' />
      <div className='product-list-group'>
        <Row className='product-list-group_row'>
          <Col xs={12} xxl={3} className="product__filter-group">
            <FilterComponent />
          </Col>
          <Col xs={12} xxl={9} className="product__list-group">
            <ProductList products={products} />
          </Col>
        </Row>
      </div>

      <div className='suggest-product'>
        <SuggestProduct />
      </div>
    </Container>
  )
}

export default Products
