import {useState, useEffect} from "react";
import { styled } from "styled-components";
import { faker } from "@faker-js/faker";
import BasketLogo from "../Resources/shopping-basket.png";
import Modal from "react-modal";
import '../App.css';

Modal.setAppElement("#root")

const Home = () => {

    const [cats, setCats] = useState([]);
    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const catsApi = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
            const cats = await catsApi.json();

            cats.map((cat, index) => {
                const catDetails = {
                catName: faker.person.fullName(),
                catPrice: faker.finance.amount(100, 1000, 2, '£'),
                };
                Object.assign(cat, catDetails);
            });
            setCats(cats);
        }
        fetchData();
    }, [])
useEffect((index) =>{
        let total = 0;
    basket.map((cat, index) => {
        
        total += cat.catPrice
        
        setTotal(total);
        
    })
    }, [basket])

    const basketAdd = (index) => {
        if (basket.includes(cats[index])) {
            let tempArray = [...basket];
            tempArray.splice(cats[index], 1);
            setBasket(tempArray);
            
            //         let tempTotal = total;
            // tempTotal += cats[index]?.catPrice;
            
            // setTotal(tempTotal);
            
            

        } else {
            let tempArray = [...basket];
            tempArray.push(cats[index]);
            setBasket(tempArray);
            // let tempTotal = total;
            // tempTotal -= cats[index]?.catPrice;
            // setTotal (tempTotal);
        }
        
        
    }


    useEffect(() => {
        console.log(basket)
    }, [basket]);

    const [modalContent, SetModalContent] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        SetModalContent(basket);
        setIsOpen(true);
      };
      
    function closeModal() {
        setIsOpen(false);
      };


    //Assign faker info onto cat state array objects
    
    return (
        <div id="homePage">
            <nav>
                <Basket onClick={openModal} src={BasketLogo} />
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="basket"
                overlayClassName="Overlay"
                className="Modal"
            >
  


                <BasketHeaderWrapper>
                    <div>
                        <h1>Basket</h1>
                    </div>
                    <button onClick={closeModal} >X</button>
                </BasketHeaderWrapper>
                <BasketItemsWrapper>
                    {basket.map((basketItem, index) => {
                        return (
                            <BasketItemWrapper>
                                <BasketCatImageWrapper>
                                    <BasketCatImage src={basketItem.url}></BasketCatImage>
                                </BasketCatImageWrapper>

                                <p>{basketItem.catName}</p>
                                <p>{basketItem.catPrice}</p>
                                
                            </BasketItemWrapper>
                            
                        )
                    })}
                </BasketItemsWrapper>
                <p>Total: {total}</p>
        

            </Modal>
            <CatContainer>

            {cats.map((eachCat, index) => {
                return (
                    <CatWrapper key={index} onClick={() => basketAdd(index)}>
                        <CatImage src={eachCat.url}></CatImage>
                        <p>{eachCat.catName}</p>
                        <p>{eachCat.catPrice}</p>
                    </CatWrapper>

                )
            })}
        </CatContainer>
        </div>

            
    );
};

// const BasketModal = styled.Modal`
//     display: flex;
// `;

const BasketItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const BasketItemWrapper = styled.div`

`;

const BasketHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    button {
        align-self: flex-start;
    }
    div{
        margin-left: 42%;
    }

    
`;

const CatImage = styled.img`
    max-height: 60%;
    max-width: 100%;
    border-radius: 100px;
`;

const BasketCatImageWrapper = styled.div`
`;

const BasketCatImage = styled.img`
    max-height: 100%;
    max-width: 50%;
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

const Basket = styled.img`
    width: 100px;
`;

export default Home;