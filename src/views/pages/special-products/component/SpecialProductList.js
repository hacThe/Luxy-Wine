import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { productActions } from '../../../../actions/product.actions'
import { Container} from 'react-bootstrap'
import { ProductComponent } from '../../../component/product-component/ProductComponent'
import { PaginationCustom } from '../../../component/PaginationCustom'
import './SpecialProductList.scss'


function SpecialProductList(props) {
    const dispatch = useDispatch();

    const products = useSelector(state => state.productReducer.products) || []
    const isLoading = useSelector(state => state.productReducer.isLoading)
  
    useEffect(() => {
      const query = {
        productType: "combo"
      }
      dispatch(productActions.getList(query));
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        console.log("current page: ", currentPage);
    }, [currentPage])

    return (
        isLoading ? <h1 style={{ marginTop: "12rem" }}>Loading............</h1> :
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

            {products.length > 0 &&
            <Container className='product-list'>
                {Array.from({ length: products.length }).map((_, idx) => (
                    <div key={idx} className="py-3 px-3">
                        <ProductComponent product={products[idx]} />
                    </div>
                ))}
                <div className='product-list-footer'>
                    <PaginationCustom numberOfElement={65} elementPerPage={3} setCurrentPage={setCurrentPage} />
                </div>
            </Container>}

        </Container>
    )
}

export { SpecialProductList } 
