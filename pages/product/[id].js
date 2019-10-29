import React from 'react'

import GoToCart from '../../components/gotocart';
import MainLayout from '../../components/mainlayout';

import { getProductById } from '../../api/product';

const ProductInfoPage = (props) => {
    return (
        <MainLayout
            pageTitle={props.data.name}
            nextAction={GoToCart}
            prevAction={null}
        >
            {JSON.stringify(props.data)}    
        </MainLayout>
    )

}

ProductInfoPage.getInitialProps = async (context) => {
    const { id } = context.query;
    console.log(context.query)
    return getProductById(id);
}

export default ProductInfoPage;
