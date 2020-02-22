import React from 'react';
import './App.css';
import Slider from './components/layout/slider/slider';
import Navbar from './components/layout/navbar/navbar';
import Products from './components/layout/products/products';
import Footer from './components/layout/footer/footer';


// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>

      <Navbar />
      <Slider/>
      <Products />
      <Footer />
    </div>

  );
}

export default App;
