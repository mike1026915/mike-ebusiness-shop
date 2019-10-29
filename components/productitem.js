
import React, { useState, useEffect } from 'react'
import Link from 'next/link';

import Button from '../components/button';

import { SESSION_STORAGE_KEY } from '../constants/constants'

const ProductItem = (props) => {
    
    let cartListData;
    const [isItemInList, setIsItemInList] = useState(false);

    useEffect(() => {
        const cartList = sessionStorage.getItem(SESSION_STORAGE_KEY);
        
        if (!cartList) {
            cartListData = {
                productList: []
            };
    
            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cartListData));
        } else {
            cartListData = JSON.parse(cartList);
        }

        setIsItemInList(cartListData.productList.includes(props.id))
    });

    
    return (
        <div className='item'>
            <Link href={`/product/${props.id}`} >
                <img src={props.src} />
            </Link>
            
            <Link href={`/product/${props.id}`}>
                <div className="item-text">
                    <div className="product-name">
                        <div>
                            {props.name}
                        </div>
                    </div>
                    <div className="product-price">
                        <div>
                            {`售價：${props.price}`}
                        </div>
                        
                    </div>
                </div>
            </Link>
            <div className="action-buttons">
                <div className="b1">
                    <Button 
                        text={ isItemInList ? "已加入" : "加入購物車" }
                        onClick={() => {
                            const cartList = sessionStorage.getItem(SESSION_STORAGE_KEY);
                            
                            cartListData = JSON.parse(cartList);

                            if (isItemInList) {
                                const index = cartListData.productList.indexOf(props.id);
                                cartListData.productList.splice(index, 1);
                                setIsItemInList(false);
                            } else {
                                cartListData.productList.push(props.id);
                                setIsItemInList(true);
                            }

                            sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(cartListData));

                        }}
                    />
                </div>
                <div className="b2">
                    <Button 
                        text="分享給朋友"
                        onClick={() => {}}
                    />
                </div>
            </div>

            <style jsx>{`
                .b1 {
                    margin-bottom: 10px; 
                } 
                .action-buttons {
                    margin: 15px 60px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                img {
                    width: 60px;
                    height: 75px;
                    margin: 5px 15px 5px 15px;
                    cursor: pointer;
                }
                .item {
                    border: 3px #7f7854 solid;
                    background-color: white;
                    margin: 15px 25px;
                    display: flex;
                }
                .product-name {
                    font-family: 'Noto Sans TC', sans-serif;
                    font-size: 20px;
                    flex-grow: 2;
                    text-align: left;
                    word-wrap:break-word;
                    margin: 5px;
                }
                .product-price {
                    font-family: 'Noto Sans TC', sans-serif;
                    flex-grow: 1;
                    font-size: 15px;
                    text-align: right:
                    align-self: flex-end;
                    position: relative;
                    margin: 5px;
                }
                .product-price div {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
                .item-text {
                    display: flex;
                    width: 70%;
                    justify-content: space-between;
                    cursor: pointer;
                    border-radius: 10px;
                    border: 0px #7f7854 solid;
                }
            `}</style>
        </div>
    )
};

export default ProductItem;