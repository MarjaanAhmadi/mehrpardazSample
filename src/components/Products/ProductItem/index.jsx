// @flow
import * as React from 'react';
import { useSelector } from 'react-redux';

const ProductContainer = (props) => {
    const products = useSelector(state => state.products)

    return (
        <p>product item</p>
    );
}


export default ProductContainer;
