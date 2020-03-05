import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Slider from './components/layout/slider/slider';
import Navbar from './components/layout/navbar/navbar';
import Products from './components/layout/products/products';
import Filters from './components/layout/filters/filters';
import Footer from './components/layout/footer/footer';


// importing bootstrap and css
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar />
          <Slider/>
            <Switch>
             <Route path="/" component={Products} exact/>
             <Route path="/filtered" component={Filters}/>
            {/* <Route component={Error}/> */}
           </Switch>
           <Footer/>
        </div> 
      </BrowserRouter>

  );
}

export default App;
