import React from 'react'

const Content = () => {
    const handleNameChange = () =>{
        const name  = ['John', 'Doe'];
        const int = Math.floor(Math.random()*3);
        return name[int];

    }
  return (
    
    <main>
        <h3>
            Hello {handleNameChange()} 
        </h3>
    </main>
  )
}

export default Content