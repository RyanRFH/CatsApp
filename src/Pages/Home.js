import {useState, useEffect} from "react";
import { styled } from "styled-components";
import { faker } from "@faker-js/faker";
import BasketLogo from "../Resources/shopping-basket.png";
import Modal from "react-modal";
import '../App.css';
import { Link, Navigate, useNavigate } from "react-router-dom";
Modal.setAppElement("#root")




const Home = (props) => {
    
    const [cats, setCats] = useState(props.catsArray);
    // const [basket, setBasket] = useState(props.basketArray);
    const [total, setTotal] = useState();

    useEffect(() =>{
        let totalPrice = 0;
        props.basketArray.map((cat, index) => {
            totalPrice += cat.catPrice;
        })
        setTotal(totalPrice.toFixed(2));
    }, [props.basketArray])

    const basketAdd = (index) => {
        // Remove item from basket
        if (props.basketArray.includes(cats[index])) {
            let itemIndex = props.basketArray.findIndex((item) => item === cats[index]);
            let tempArray = [...props.basketArray];
            tempArray.splice(itemIndex, 1);
            props.setBasket(tempArray);
            console.log("CAT SPLICED FROM BASKET");
        

        } else {
            //Add item to basket
            let tempArray = [...props.basketArray];
            tempArray.push(cats[index]);
            props.setBasket(tempArray);
            console.log("CAT ADDED FROM BASKET");
            
        }
        
        
    }

    const [modalContent, SetModalContent] = useState({});
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        SetModalContent(props.basketArray);
        setIsOpen(true);
      };
      
    function closeModal() {
        setIsOpen(false);
      };


    //Assign faker info onto cat state array objects
    const navigate = useNavigate();
    const setState = () => {
        
        navigate("/Cat/${eachCat.catName}", {
            state : {
                testKey: "testValue",
            }
        })
    }


    return (
        <div id="homePage">
            <nav>
                <Basket onClick={openModal} src={BasketLogo} />
            </nav>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="basket"
                // overlayClassName="Overlay"
                className="Modal"
                shouldCloseOnOverlayClick={true}
            >
  


                <BasketHeaderWrapper>
                    <div>
                        <h1>Basket</h1>
                    </div>
                    <button onClick={closeModal} >X</button>
                </BasketHeaderWrapper>
                <BasketItemsWrapper>
                    {props.basketArray.map((basketItem, index) => {
                        return (
                            <BasketItemWrapper key={index}>
                                <BasketCatImageWrapper>
                                    <BasketCatImage src={basketItem.url}></BasketCatImage>
                                </BasketCatImageWrapper>

                                <p>{basketItem.catName}</p>
                                <p>£{basketItem.catPrice}</p>
                                
                            </BasketItemWrapper>
                            
                        )
                    })}
                </BasketItemsWrapper>
                <p>Total: £{total}</p>
        

            </Modal>
            <CatContainer>

            {cats.map((eachCat, index) => {
                return (
                    <CatBox>
                        <CatWrapper key={index} onClick={() => basketAdd(index)}>


                        <AddRemoveBasketWrapper>
                            <h1>{props.basketArray.includes(eachCat) ? "Remove from basket" : "Add to Basket"} </h1>
                        </AddRemoveBasketWrapper>
                        
                        <CatImage src={eachCat.url}></CatImage>
                        <p>{eachCat.catName}</p>
                        <p>£{eachCat.catPrice}</p>                      
                        
                    </CatWrapper>

                    
                    <Link to={`/Cat/${eachCat.catName}`} state={eachCat}>
                        <button>About Cat</button>
                    </Link>

                    </CatBox>

                )
            })}
        </CatContainer>
        </div>

            
    );
};

// const BasketModal = styled.Modal`
//     display: flex;
// `;

const CatBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        background-color: rgb(242, 180, 113);
        border: none;
        cursor: pointer;
        width: 20vw;
        font-size: larger;
    }
`;

const AddRemoveBasketWrapper = styled.div`
    
`;

const BasketItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    

`;

const BasketItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px dashed black;
    margin: 1vw;
`;

const BasketHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    button {
        align-self: flex-start;
        justify-self: flex-end;
    }
    div{
        margin: 0 20%;
    }
    
    
`;

const CatImage = styled.img`
    max-height: 60%;
    max-width: 100%;
    border-radius: 100px;
`;

const BasketCatImageWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const BasketCatImage = styled.img`
    max-height: 100%;
    max-width: 70%;
`;

const CatWrapper = styled.div`
    position: relative;
    width: 20vw;
    height: 30vw;
    background-color: rgb(224, 134, 38);
    margin: 3vw 2vw 0 2vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;

    div {
        display: none;
        
    }

    &:hover{
       div {
        display: block;
        position: absolute;
        top: 7vw;
        z-index: 1;
        background-color: rgba(128, 128, 128, 0.8);
        width: 18vw;
        text-align: center;
        border-radius: 15px;
       }
    }
    p {
        margin: 1vh;
    }
`;

const CatContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const Basket = styled.img`
    width: 100px;
`;

export default Home;