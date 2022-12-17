import React from 'react'
import ToDo from '../ToDo/ToDo';
import './ToDos.css'

function ToDos({ deleteHandler,items, taskCompleted}) {

    if(items.length===0)
    {
        return(
            <div className='no-item f1 tc'>
                Please Insert A Item In To-Do List
            </div>
        )
    }

    else
    {
        var arr=[];

        for(let i=0;i<items.length;i++)
        {
            arr.push(<ToDo
            key={items[i].id}
            data={items[i].data}
            id={items[i].id}
            deleteHandler={deleteHandler}
            iscompleted={items[i].isCompleted}
            taskCompleted={taskCompleted}
            />);
        }

        return(
            <div className='ToDos'>
                {arr}
            </div>
        )
    }
  
}

export default ToDos