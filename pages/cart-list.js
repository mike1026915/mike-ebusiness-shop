import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import MainLayout from '../components/mainlayout';
import CheckOutItem from '../components/checkoutitem';
import Button from '../components/button';

import { SESSION_STORAGE_KEY } from '../constants/constants'

import { getProductList } from '../api/product';

const CartListPage = (props) => {

    const [itemList, setItemList] = useState([]);
    useEffect(() => {
        const cartList = sessionStorage.getItem(SESSION_STORAGE_KEY);
        let cartListData;

        if (!cartList) {
            cartListData = {
                productList: []
            };
    
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cartListData));
        } else {
            cartListData = JSON.parse(cartList);
        }

        setItemList(cartListData.productList)
    });

    return (
        <div>
            <MainLayout
                pageTitle={'購買商品確認清單'}
                nextAction={null}
                prevAction={null}
            >
                <div className='list-container'>
                    <p>
                        {itemList.map((id) => {
                            const d = props.data.find((i) => (id))
                            return (
                                <CheckOutItem
                                    src={d.imgUrl}
                                    name={d.name}
                                    price={d.price}
                                    id={d.id}
                                />
                            );
                        })}
                    </p>
                </div>
                <hr/> 
                <div className="checkout-button">
                    <Link href="/checkout">
                        <Button 
                            imgSrc="/icons8-checkout-50.png"
                            text="進行結帳"
                        />
                    </Link>                   
                </div> 

            </MainLayout>
    
               
            <style jsx>{`
                .list-container {
                    display: flex;
                    flex-direction: column;
                }
                .checkout-button {
                    position: absolute;
                    margin: 30px;
                    left: calc(100% - 350px);
                    width: 125px;
                    height: 50px;
                    font-size: 50px;
                }
            `}</style>
        </div>
    )
};
  
CartListPage.getInitialProps = async () => {
    return getProductList();
}

export default CartListPage;
  