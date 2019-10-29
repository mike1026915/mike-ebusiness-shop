import React, { useState, useEffect } from 'react'

import MainLayout from '../components/mainlayout';
import Button from '../components/button';

import { createOrder } from '../api/product';

import { SESSION_STORAGE_KEY } from '../constants/constants'

const CheckoutPage = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [bankAccount, setBankAccount] = useState('');
    const [itemList, setItemList] = useState(null);
    const [hasSubmitted, setHasSubmitted] = useState(true);

    useEffect(() => {
        if(!itemList){
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
        }

    });

    const onClick = async () => {
        const result = await createOrder({
            name,
            address,
            phone,
            email,
            bankAccount,
            itemList
        })

        setHasSubmitted(true)
    }

    let submittedData;

    if (hasSubmitted) {
        const textStyle = { 
            margin: '25px auto', 
            textAlign: 'center',
            fontFamily: 'Noto Sans TC, sans-serif',
        }
        submittedData = (
            <div style={{ margin: '50px auto' }}>
                <img width="350px" height="350px" src="/iconfinder_Streamline-65_185085.png" />
                <p style={textStyle}> 謝謝您的光臨 </p>
                <p style={textStyle}> 希望您喜歡我們的產品 </p>
            </div>
        )
    } else {
        submittedData = (
            <>
                <fieldset>
                    <legend>個人資料</legend>
                    <label>
                        姓名: 
                    </label>
                    <input type="text" 
                        onChange={(e) => {setName(e.target.value)}}
                        id="name"
                        value={name}
                    />
                    <br />
                    <label>
                        電話: 
                    </label>
                    <input type="text" 
                        onChange={(e) => {setPhone(e.target.value)}}
                        id="phone"
                        value={phone}
                    />
                    <br />
                    <label>
                        地址: 
                    </label>
                    <input type="text" 
                        onChange={(e) => {setAddress(e.target.value)}}
                        id="address"
                        value={address}
                    />
                    <br />
                    <label>
                        E-Mail: 
                    </label>
                    <input type="text" 
                        onChange={(e) => {setEmail(e.target.value)}}
                        id="email"
                        value={email}
                    />
                    <br />
                    <label>
                        銀行帳號: 
                    </label>
                    <input type="text" 
                        onChange={(e) => {setBankAccount(e.target.value)}}
                        id="bankAccount"
                        value={bankAccount}
                    />
                </fieldset>
            
                <div className="checkout-button">
                    <Button
                        imgSrc="/success.png"
                        text="確認送單"
                        onClick={onClick}
                    />
                </div>
                <style jsx>{`

                    .checkout-button {
                        margin: 30px;
                        width: 125px;
                        height: 80px;
                        font-size: 50px;
                    }
                `}</style>
            </>
        );
    }

    return (
        <div>
            <MainLayout
                pageTitle={hasSubmitted ? '成功下單' : '個人資料確認'}
                nextAction={null}
                prevAction={null}
            >
                <div className='list-container'>
                    <fieldset>
                        <legend>匯款方式</legend>
                        <p> ATM匯款: (812台新銀行) 28881000628715 </p>
                    </fieldset>

                    {submittedData}
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


export default CheckoutPage;
