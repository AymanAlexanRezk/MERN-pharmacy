import { Route, Routes } from 'react-router-dom';
import Home from './screens/HomeScreen';
import { Navbar, Container } from 'react-bootstrap';

// import  from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import Product from './screens/ProductScreen';

function App() {
  return (
    <div className="d-flex flex-column app-container">
      <header>
        <Navbar bg="primary" variant="dark">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Ayman Pharmacy</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        {/* <p>Your Choice For Health & Beauty</p> */}
      </header>

      <main>
        <Container className='mt-3 mb-3'>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/product/:slug"  element={<Product />} />
          </Routes>
        </Container>
      </main>

      <footer className="text-center">
        <p>Copyright © 2022 Ayman Pharmacy | Hurghada - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
