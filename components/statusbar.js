import React from 'react'

const StatusBar = (props) => (
    <div className='statusbar'>
        <div className='title'>
            <h2> {props.title} </h2>
        </div>
        <div className="actions">
            <div className="prev-action">
                
            </div>
            <div className="next-action">
                {props.nextAction}
            </div>
        </div>

        <style jsx>{`

            .actions {
                position: absolute;
                margin: 24px;
                left: calc(80% + 20px)
            }

            .statusbar {
                background: #e0f0d7;
                position: fixed;
                top: 0;
                left: calc(20% + 3px);
                height: 78px;
                width: calc(80% - 5px);
                border-radius: 10px;
                display: flex
            }

            .title {
                position: absolute;
                margin: 12px 25px;
            }

            h2 {
                font-family: 'Noto Sans TC', sans-serif;
                font-size: 36px;
                color: #5a5747;
                margin: 0;
            }
        `}</style>
    </div>



);

export default StatusBar;