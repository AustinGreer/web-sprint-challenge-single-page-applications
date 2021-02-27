import React, { useState } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import pizzaImg from '../Assets/Pizza.jpg'
import Forms from "./Forms"

const App = () => {
  return (
    <div>
      <div className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/pizza-form'>Place Order</Link>
      </div>
      <div className='app'>
        <h1>Welcome to Lambda Eats!</h1>
        <img src={pizzaImg}></img>
        <Link to='/pizza-form'>Order Now</Link>
      </div>
    </div>
  );
};
export default App;
