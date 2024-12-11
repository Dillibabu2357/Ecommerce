import React from 'react';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import LandingPage from './stores/Pages/LandingPage';
import Kitchen from './stores/Pages/Kitchen';
import AC from './stores/Pages/AC';
import Books from './stores/Pages/Books';
import Computers from './stores/Pages/Computers';
import Fridge from './stores/Pages/Fridge';
import Furniture from './stores/Pages/Furniture';
import Men from './stores/Pages/Men';
import Mobile from './stores/Pages/Mobile';
import Speaker from './stores/Pages/Speaker';
import Tv from './stores/Pages/Tv';
import Watch from './stores/Pages/Watch';
import Woman from './stores/Pages/Woman';
import MobileSingle from './Singles/MobileSingle';
// import ProData from './stores/Pages/Prodata';

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
         <Link to="/" className="nav-link">Home</Link>
         <Link to="/kitchen" className="nav-link">Kitchen</Link>
         <Link to="/ac" className="nav-link">AC</Link>
         <Link to="/books" className="nav-link">Books</Link>
         <Link to="/computers" className="nav-link">Computers</Link>
         <Link to="/fridge" className="nav-link">Fridge</Link>
         <Link to="/furniture" className="nav-link">Furniture</Link>
         <Link to="/men" className="nav-link">Men</Link>
         <Link to="/mobile" className="nav-link">Mobile</Link>
         <Link to="/speaker" className="nav-link">Speaker</Link>
         <Link to="/tv" className="nav-link">TV</Link>
         <Link to="/watch" className="nav-link">Watch</Link>
         <Link to="/woman" className="nav-link">Woman</Link>
       </nav>
      <Routes>
        <Route className="nav-link" path="/" element={<LandingPage />} />
        <Route className="nav-link" path="/kitchen" element={<Kitchen />} />
        <Route className="nav-link" path="/ac" element={<AC />} />
        <Route className="nav-link" path="/books" element={<Books />} />
        <Route className="nav-link" path="/computers" element={<Computers />} />
        <Route className="nav-link" path="/fridge" element={<Fridge />} />
        <Route className="nav-link" path="/furniture" element={<Furniture />} />
        <Route className="nav-link" path="/men" element={<Men />} />
        <Route className="nav-link" path="/mobile" element={<Mobile />} />
        <Route className="nav-link" path="/speaker" element={<Speaker />} />
        <Route className="nav-link" path="/tv" element={<Tv />} />
        <Route className="nav-link" path="/watch" element={<Watch />} />
        <Route className="nav-link" path="/woman" element={<Woman />} />
        <Route className="nav-link" path="*" element={<h1>404 - Page Not Found</h1>} />
        <Route path='/mobile/:id' element={<MobileSingle />}/>
      </Routes>
    </div>
  );
};

export default App;
