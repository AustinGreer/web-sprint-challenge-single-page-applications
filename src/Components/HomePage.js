import React from 'react';
import { Link } from 'react-router-dom';
import pizzaImg from '../Assets/Pizza.jpg';


export default function HomePage () {
    return (
        <>
            <div className='navigation'>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Place Order</Link>
            </div>
            <div className='app'>
                <h1>Welcome to Lambda Eats!</h1>
                <img src={pizzaImg}></img>
                <Link to='/pizza'>Order Now</Link>
            </div>
        </>
    )
}