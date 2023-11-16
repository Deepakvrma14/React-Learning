import React from 'react'
import { useState } from 'react';
const Content = () => {


    const [name, setName] = useState('john');
    const handleNameChange = () =>{
        const name  = ['John', 'Doe'];
        const int = Math.floor(Math.random()*3);
        setName(name[int]);
    }
    const handleClick = () =>{
        console.log('you clicked');

    }
    const handleClick2 = (name) =>{
        console.log(`hello ${name}`);

    }


  return (
    
    <main>
        <h3 onDoubleClick={handleClick}>
            Hello {name} 
        </h3>
        <button onClick={handleNameChange}>
            click it
        </button>
        <button onClick={() => handleClick2('john')}>
            press here 
        </button>
    </main>
  )
}

export default Content