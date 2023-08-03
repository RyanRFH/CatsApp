import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cat from './Pages/Cat'
import ContactForm from './Pages/contact'
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './Pages/myNavbar';
import Blog from './Pages/blog';
import About from './Pages/About';

function App() {

  const [cats, setCats] = useState([]);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        const catsApi = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");
        const cats = await catsApi.json();

        cats.map((cat, index) => {
            const catDetails = {
            catName: faker.person.fullName(),
            catAge : faker.number.int({ min: 0, max: 40}),
            catPrice : faker.number.float({ min: 100, max: 1000, precision: 0.01 }),
            catGender : faker.person.gender(),
            catZodiac : faker.person.zodiacSign(),
            catBio : faker.person.bio(),
            catType: faker.animal.cat(),
            catEmail : faker.internet.email(),
            catAddress : faker.location.streetAddress(),
            
            };
            Object.assign(cat, catDetails);
        });
        setCats(cats);
    }
    fetchData();
    }, [])

    //ADD CATS STATE ARRAY AS ATTRIBUTE IN HOME ELEMENT
  return (
    <AppPage>
      <MyNavbar></MyNavbar>
      <BrowserRouter>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/About">About</Link>
          <Link to="/blog">Blog</Link>
        </NavBar>
        <Routes>
          <Route path="/" element={<Home catsArray={cats} basketArray={basket} setBasket={setBasket}></Home>}></Route>
          <Route path="/Cat/:catUrl" element={<Cat></Cat>}></Route>
          <Route path="/contact/" element={<ContactForm></ContactForm>}></Route>
          <Route path="/About/" element={<About></About>}></Route>
          <Route path="/blog/" element={<Blog></Blog>}></Route>
        </Routes>
      </BrowserRouter>
    </AppPage>
  );
}

const AppPage = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const NavBar = styled.nav`
    display: flex;
    justify-items: center;
    align-items: center;
    
`;

export default App;