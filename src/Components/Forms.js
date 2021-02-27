import React, { useState } from 'react';
import { Link } from 'react-router-dom'



const initialForm = {
    size: {
        small: false,
        medium: false,
        large: false
    },
  
    sauce: {
        originalRed: false,
        creamyGarlic: false,
        spinachAlfredo: false
    },
  
    toppings: {
        pepperoni: false,
        sausage: false,
        bacon: false,
        greenPepper: false,
        redOnion: false,
        olives: false,
        mushrooms: false
    }, 
  
    instructions: ''
}


export default function Forms () {
    return(
        <div>
            <div className='navigation'>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Place Order</Link>
            </div>
        </div>
        
    )
}