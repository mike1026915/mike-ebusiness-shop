import React, { useState, useEffect } from 'react'

import MainLayout from '../components/mainlayout';
import GoToCart from '../components/gotocart';
import ProductItem from '../components/productitem';

import { getProductList } from '../api/product';

//https://stackoverflow.com/questions/5288336/put-text-at-bottom-of-div

const ListPage = (props) => {

    return (
        <div>
            <MainLayout
                pageTitle={'商品列表'}
                nextAction={GoToCart}
                prevAction={null}
            >
                <div className='list-container'>
                    <p>
                        {props.data.map((d) => {
                            return (
                                <ProductItem
                                    src={d.imgUrl}
                                    name={d.name}
                                    price={d.price}
                                    id={d.id}
                                />
                            );
                        })}
                    </p>
                </div>
            </MainLayout>
        
        
            <style jsx>{`
                .list-container {
                    display: flex;
                    flex-direction: column;
                }
            `}</style>
      </div>
    )
}

ListPage.getInitialProps = async () => {
    return getProductList();
}

export default ListPage;
