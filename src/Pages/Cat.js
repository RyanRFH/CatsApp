import { styled } from "styled-components";
import '../App.css';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import '../App.css';

const Cat = () => {
    let {state} = useLocation();
    
    return (
        <div className='catPage'>
            <CatInfoImgWrapper >
                <img width="200px" src={state.url}></img>
                <div>
                    <p>Name: {state.catName}</p>
                    <p>Age: {state.catAge}</p>
                    <p>Price: £{state.catPrice}</p>
                    <p>Gender: {state.catGender}</p>
                    <p>Zodiac Sign: {state.catZodiac}</p>
                    <p>Bio: {state.catBio}</p>
                    <p>Breed: {state.catType}</p>
                    <p>Email: {state.catEmail}</p>
                    <p>Address: {state.catAddress}</p>

                </div>

            </CatInfoImgWrapper>
        </div>

        
    )
};


const CatInfoImgWrapper = styled.div`
    width: 50vw;
    height: 50vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 15vh 0;
`;

export default Cat;