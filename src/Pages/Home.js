import {useState, useEffect} from "react";
import { styled } from "styled-components";
import { faker } from "@faker-js/faker";
import BasketLogo from "../Resources/shopping-basket.png";
import Modal from "react-modal";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";
Modal.setAppElement("#root")




const Home = (props) => {
    
    const [cats, setCats] = useState([]);
    const [total, setTotal] = useState();
    const [sortType, setSortType] = useState("Name");
    const [sortedCats, setSortedCats] = useState([]);

    useEffect(() => {
        setCats(props.catsArray)

    }, [props.catsArray]);

    useEffect(() => {
        console.log("USE EFFECT IS RUNNING");
        console.log(cats);
        if (sortType === "PriceUp") {
            setSortedCats([...cats].sort((a, b) => (a.catPrice > b.catPrice) ? 1 : -1));
        } else  if (sortType === "PriceDown") {
            setSortedCats([...cats].sort((a, b) => (a.catPrice < b.catPrice) ? 1 : -1));
        } else if (sortType === "Name") {
            setSortedCats([...cats].sort((a, b) => (a.catName > b.catName) ? 1 : -1));
        }
    }, [sortType, cats])




    

    useEffect(() =>{
        let totalPrice = 0;
        props.basketArray.map((cat, index) => {
            totalPrice += cat.catPrice;
        })
        setTotal(totalPrice.toFixed(2));
    }, [props.basketArray])

    const basketAdd = (index) => {
        // Remove item from basket
        if (props.basketArray.includes(sortedCats[index])) {
            let itemIndex = props.basketArray.findIndex((item) => item === sortedCats[index]);
            let tempArray = [...props.basketArray];
            tempArray.splice(itemIndex, 1);
            props.setBasket(tempArray);
            console.log("CAT SPLICED FROM BASKET");
        

        } else {
            //Add item to basket
            let tempArray = [...props.basketArray];
            tempArray.push(sortedCats[index]);
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
        <div className="homePage">
            <DropdownBasketWrap>
                <label>
                    <p>Sort by:</p>
                    <select onChange={(event) => setSortType(event.target.value)}>
                        <option value="Name">Name</option>
                        <option value="PriceUp">Price (ascending)</option>
                        <option value="PriceDown">Price (descending)</option>
                    </select>
                </label>
                <BasketIconTextBox onClick={openModal}>
                    <BasketIconWrapper>

                        <Basket  src={BasketLogo} />
                        
                    </BasketIconWrapper>
                    <h3>Basket</h3>
                </BasketIconTextBox>
            </DropdownBasketWrap>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="basket"
                className="Modal"
                shouldCloseOnOverlayClick={true}
                overlayClassName="overlay"
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
                <Link to={props.basketArray.length < 1 ? "" : "/Checkout"}>
                    <CheckoutButton>Checkout now</CheckoutButton>
                </Link>
            </Modal>

            <CatContainer>
                {sortedCats.map((eachCat, index) => {
                    return (
                        <CatBox key={index}>
                            <CatWrapper  onClick={() => basketAdd(index)}>

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


const DropdownBasketWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: centre; 

    label{
        padding: 0 4vw;
        display: flex;
        align-items: center;
        justify-content: center;

        p {
            font-size: larger;
            margin: 1vw;
        }
    }

`



const CheckoutButton = styled.button`
    background-color: rgb(224, 134, 38);
    padding: 1vh;
    font-size: larger;
    border-radius: 10px;
    width: 100%
`


const BasketIconWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 0.8vw;
`;

const BasketIconTextBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 2vw 2vw 0 0;
    margin-right: 3vw;
    cursor: pointer;
`

const CatBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        background-color: rgb(242, 180, 113);
        border: none;
        cursor: pointer;
        width: 21vw;
        font-size: larger;
        border-radius: 0 0 10px 10px;
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
    border: 4px dashed rgb(224, 134, 38);
    margin: 1vw;
`;

const BasketHeaderWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    button {
        font-size: larger;
        align-self: flex-start;
        padding: 0 4%;
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
    width: 21vw;
    height: 30vw;
    background-color: rgb(224, 134, 38);
    margin: 3vw 1vw 0 1vw;
    padding: 0 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;

    p {
        font-size: larger;
    }

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
    justify-content: center;
`;

const Basket = styled.img`
    width: 4vw;
    padding-top: 1vh;
    cursor: pointer;
`;

export default Home;