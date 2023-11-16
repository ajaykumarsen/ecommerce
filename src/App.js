import {Container} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';



function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen></HomeScreen>} exact></Route>
            <Route path='/product/:id' element={<ProductScreen></ProductScreen>}></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
