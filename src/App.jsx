import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Nav from './Components/Nav'
import About from './Pages/About'
import Art from './Pages/Art';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/art' element={<Art />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

