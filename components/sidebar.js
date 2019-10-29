import React from 'react'
import Link from 'next/link';

const Sidebar = (props) => (
    <aside className='sidebar'>
        <div className='title'>
            <Link href="/list">
                <h1> 賣客 </h1>
            </Link>
            
        </div>
        
        <div className='slogan'>
            <h3 > 您信賴的電商平台 </h3>
        </div>


        <style jsx>{`
            .sidebar {
                background: #60f4b5;
                position: fixed;
                top: 0;
                left: 0;
                height: 100%;
                width: 20%;
                border-radius: 10px;
            }

            .title {
                position: relative;
                text-align: center;
                top: 10%;
                cursor: pointer;
            }

            .slogan {
                position: relative;
                text-align: center;
                top: 30%;
                font-family: 'Noto Sans TC', sans-serif;
            }

            h1 {
                font-family: 'Noto Sans TC', sans-serif;
                font-size: 51px;
            }
    `}</style>
    </aside>
);

export default Sidebar;