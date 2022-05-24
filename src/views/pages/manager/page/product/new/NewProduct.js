import React from 'react';
import SingleProductForm from '../component/SingleProductForm';

function NewProduct(props) {
    return (
        <div>
            <h1 className='manager-page-title'>Thêm sản phẩm</h1>
            <SingleProductForm/>
        </div>
    );
}

export default NewProduct;