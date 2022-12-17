import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import './ToDo.css'

function ToDo({data,id,  deleteHandler, iscompleted, taskCompleted}) {
  // console.log(id,iscompleted);

  return (
    <div className='ToDo tc f3'>
      <input
      type='checkbox'
      className='checkBox f1'
      checked={iscompleted}
      onClick={()=>taskCompleted(id)}
      />
      <label  style={(iscompleted) ? { textDecoration: 'line-through' } : null}>
      {data}
      </label>
    <FaTrashAlt className='FaTrashAlt shadow-3' onClick={()=> deleteHandler(id)}/>
    </div>
  )
}

export default ToDo