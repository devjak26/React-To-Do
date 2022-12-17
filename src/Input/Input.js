import React from 'react'
import './Input.css';

function Input({inputData,newItemHandler, inputHandler}) {

  return (
    <div className='Input'>
        <input 
        type="text"
        placeholder='Add New item..'
        onChange={inputHandler}
        value={inputData}
        onKeyDown={newItemHandler}
        />

        <button
        onClick={newItemHandler}
        className='btn'
        >
            Add To To-Do
        </button>
    </div>
  )
}

export default Input