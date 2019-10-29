import React from 'react';

const Button = (props) => {
    const margin = props.imgSrc ? '3px 15px 3px 3px' : '3px 15px 3px 15px'
    return (
        <div onClick={props.onClick} className="button">
            {props.imgSrc ? (<img className="button-icon" width="25px" height="25px" src={props.imgSrc} />) : null}
            <div className="button-text">
                {props.text}
            </div>
            <style jsx>{`
                .button-icon {
                    margin: 0px 3px 0px 10px; 
                }

                .button {
                    display: flex;
                    width: 100%;
                    border-radius: 10px;
                    border: 1px #7f7854 solid;
                    font-size: 15px;
                    box-shadow: 0 0 3px grey;
                    font-family: 'Noto Sans TC', sans-serif;
                    cursor: pointer;
                    background-color: white;
                }
                .button:active {
                    display: flex;
                    width: 100%;
                    border-radius: 10px;
                    border: 1px #7f7854 solid;
                    font-size: 15px;
                    box-shadow: 0 0 6px grey;
                    background-color: #eeeeee;
                    font-family: 'Noto Sans TC', sans-serif;
                    cursor: pointer;
                }
                .button-text {
                    width: 100%;
                    text-align: center;
                    white-space: nowrap;
                    margin: ${margin}
                    
                }
            `}</style>
        </div>
    )
};

export default Button;