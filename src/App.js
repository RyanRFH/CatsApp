import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import { styled } from 'styled-components';

function App() {
  return (
    <AppPage>
      <h1>App Page</h1>
      <BrowserRouter>
        <NavBar>
          <Link to="/">Home</Link>

        </NavBar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>

        </Routes>
      </BrowserRouter>
    </AppPage>
  );
}

const AppPage = styled.nav`
    display: flex;
`;

const NavBar = styled.nav`
    display: flex;
    width: 50%;
    align-items: space-between;
    justify-content: space-around;
    
`;

export default App;