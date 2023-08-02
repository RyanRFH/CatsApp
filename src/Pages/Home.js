import {useState, useEffect} from "react";
import { styled } from "styled-components";
import { faker } from "@faker-js/faker";

const Home = () => {

    const [cats, setCats] = useState([]);
    const [basket, setBasket] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const catsApi = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const cats = await catsApi.json();
            setCats(cats);
        }
        fetchData();
    }, [])

    const basketAdd = () => {
        // setBasket(name and price)
    }

    const catArray = [];
    //Cat object array



    


    return (
        <CatContainer>
            {cats.map((eachCat, index) => {
                return (
                    <CatWrapper key={index} onClick={basketAdd}>
                        <CatImage src={eachCat.url}></CatImage>
                        <p>{faker.person.fullName()}</p>
                        <p>{faker.finance.amount(100, 1000, 2, '£')}</p>
                        <p></p>
                    </CatWrapper>

                )
            })}
        </CatContainer>
            
    );
};

const CatImage = styled.img`
    max-height: 60%;
    max-width: 100%;
`;

const CatWrapper = styled.div`
    width: 20vw;
    height: 30vw;
    background-color: gray;
    margin: 3vw 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CatContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;


export default Home;