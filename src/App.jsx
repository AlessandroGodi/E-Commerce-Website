import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer';
import Home from './Pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { books } from './data'
import Books from './Pages/Books'
import BookInfo from './Pages/BookInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route path="/books/1" element={ <BookInfo books={books} /> } />
          {/* <Route path="/books" element={<Books books={books} />} /> */}
          {/* <Route path="/books/:id" element={<BookInfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path="/cart" element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
