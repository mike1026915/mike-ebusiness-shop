import React from 'react';
import Head from 'next/head'
import SideBar from '../components/sidebar';
import StatusBar from '../components/statusbar';

const MainLayout  = (props) => (
    <>
        <Head>
            <title>賣客</title>
            <link rel='icon' href='/favicon.ico' />
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans+TC&display=swap" rel="stylesheet"></link>
        </Head>

        <SideBar />
        <StatusBar 
            title={props.pageTitle}
            nextAction={props.nextAction}
            prevAction={props.prevAction}
        />
    
        <div className='content'>
            {props.children}
        </div>
        

        <style jsx>{`
            .content {
                background-color: #e9f5f0   ;
                position: fixed;
                top: 80px;
                left: calc(20% + 3px);
                height: 100%;
                width: calc(80% - 5px);
            }
        `}</style>    
    </>
);

export default MainLayout;