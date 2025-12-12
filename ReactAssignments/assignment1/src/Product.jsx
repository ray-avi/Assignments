import React from 'react'
import { useState } from 'react'

const Product = () => {

    const [count,setcount]= useState(0);

    function increment(){
        count= setcount(count+1)
    }

  return (
    <div>
        <p>value of count: {count}</p>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Product
