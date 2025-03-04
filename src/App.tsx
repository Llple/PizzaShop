import React from "react";


import Header from "./components/Header";
import Cart from "./page/Cart";


import "./scss/app.scss";

import { Routes, Route } from "react-router";
import Home from "./page/Home";
import NotFound from "./page/NotFound";

import PizzaDetails from "./components/PizzaDetails";

function App() {
  const [searchValue,setSearchValue] = React.useState<string>("")
  
  return (
    <div className="wrapper">
      <Header 
      
      setSearchValue = {setSearchValue}
      />

      <div className="content">
        <div className="container">
          
          <Routes>
            <Route path="/" element={<Home
            searchValue = {searchValue}
            
            
           
            />}/>
            <Route path="/pizza/:id" element={<PizzaDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          
          
        </div>
      </div>
    </div>
  );
}

export default App;
