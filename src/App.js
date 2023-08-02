import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import { styled } from 'styled-components';

function App() {
  return (
    <AppPage>
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
    justify-items: center;
    align-items: center;
    
`;

export default App;