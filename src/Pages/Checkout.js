import React, { useEffect, useState } from 'react';
import '../App.css';
import { styled } from 'styled-components';


const Checkout = (props) => {
    const [totalPrice, setTotal] = useState();
    useEffect(() =>{
        let totalPrice = 0;
        props.basketArray.map((cat, index) => {
            totalPrice += cat.catPrice;
        })
        setTotal(totalPrice.toFixed(2));
    }, [props.basketArray]);
    
    return (
        <div className='checkoutPage'>
            <AllWrap>
                <CatsContainer>
                    {props.basketArray.map((basketItem, index) => {
                    return (
                        <EachCatWrap key={index}>
                            <div>
                                <img width="200px" src={basketItem.url}></img>
                            </div>

                            <p>{basketItem.catName}</p>
                            <p>£{basketItem.catPrice}</p>
                        
                        </EachCatWrap>
                    
                    )
                })}
                    </CatsContainer>
                <h1>{props.basketArray.length} item(s)</h1>
                <h1>Total: £{totalPrice}</h1>
                <button>Pay now</button>
            </AllWrap>
        </div>

    );
};

const CatsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const EachCatWrap = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    margin: 1vw;
    padding: 2vw;
    background-color: rgb(224, 134, 38);
    border-radius: 15px;

    p {
        font-size: larger;
    }
`;

const AllWrap = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    padding-bottom: 5vh;

    button {
        background-color: rgb(224, 134, 38);
        border: none;
        padding: 1vw;
        width: 75vw;
        border-radius: 10px;
        font-size: larger;
    }
`;



export default Checkout;