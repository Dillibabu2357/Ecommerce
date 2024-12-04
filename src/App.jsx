import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
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
// import ProData from './stores/Pages/Prodata';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/ac" element={<AC />} />
        <Route path="/books" element={<Books />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/fridge" element={<Fridge />} />
        <Route path="/furniture" element={<Furniture />} />
        <Route path="/men" element={<Men />} />
        {/* <Route path="/products" element={<ProData />} /> */}
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/speaker" element={<Speaker />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/woman" element={<Woman />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;
