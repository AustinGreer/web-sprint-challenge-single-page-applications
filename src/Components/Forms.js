import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import pizzaImg from '../Assets/Pizza.jpg';




const initialForm = {
    name: '',
    
    size: {
        small: false,
        medium: false,
        large: false
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
    const [forms, setForms] = useState(initialForm)
    // const [error, setError] = useState({
    //     name: ''
    // })
    
    const change = (event) => {

    }
    
    return(
        <div>
            <div className='navigation'>
                <Link to='/'>Home</Link>
                <Link to='/pizza'>Place Order</Link>
            </div>
            <div className='forms-container'>
                <h1>Build Your own Pizza</h1>
                <img src={pizzaImg}></img>
                <form>
                    {/* Name input */}
                
                        <h2>Name:</h2>
                        <input 
                            name='name'
                            type='text'
                            placeHolder='enter your name'
                            onChange={change}
                        />
                    
                    {/* dropdown */}
                    
                        <h2>Select Crust Size</h2>
                        <select>
                            <option>--Select Size--</option>
                            <option>Small</option>
                            <option>Medium</option>
                            <option>Large</option>
                        </select>
                    

                    {/* check boxes */}
                    <h2>Choose Toppings:</h2>
                    <label>
                        pepperoni <input type='checkbox'/>
                    </label>
                    <label>
                        sausage <input type='checkbox'/>
                    </label>
                    <label>
                        bacon <input type='checkbox'/>
                    </label>
                    <label>
                        green pepper <input type='checkbox'/>
                    </label>
                    <label>
                        red onion <input type='checkbox'/>
                    </label>
                    <label>
                        olives <input type='checkbox'/>
                    </label>
                    <label>
                        mushroom <input type='checkbox'/>
                    </label>
                    <input
                        type='text'
                        name='instructions'
                        placeholder='special instructions'
                    />
                    <input
                        type='submit'
                    />
                    
                </form>
            </div>
        </div>
        
    )
}