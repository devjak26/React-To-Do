import React, { useState, useEffect } from 'react';
// import { IconName } from "react-icons/fa";
import Header from './Header/Header';
import Input from './Input/Input';
import ToDos from './ToDos/ToDos';

import './App.css';

function App() {
  const [inputData, setInputData] = useState('');
  const [newItem, setNewItem] = useState('');
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('list')));

  useEffect(() => {
    // console.log(newItem);
    setInputData('');
    itemHandler();
  }, [newItem]);


  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items));
  }, [JSON.stringify(items)]);

  const deleteHandler = (givenId) => {
    if (givenId >= 0) {
      const arr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].id !== givenId)
          arr.push(items[i]);
      }

      setItems(arr);
      // console.log(JSON.parse(localStorage.getItem('list')));
    }
  }

  const taskCompleted = (givenId) => {
    console.log(givenId);
    if (givenId >= 0) {
      const arr = [];

      for (let i = 0; i < items.length; i++) {
        if (items[i].id == givenId) { 
          var temp=items[i];
          temp.isCompleted=!temp.isCompleted;
          arr.push(temp);

          console.log(temp.isCompleted);
        }
        
        else
          arr.push(items[i]);
      }

      setItems(arr);
    }

  };

  const itemHandler = () => {
    let n = newItem.length;
    let temp = 0;

    if (n === 0)
      return;

    for (let i = 0; i < n; i++) {
      if (newItem[i] === ' ')
        temp++;

      else
        break;
    }

    if (temp === n)
      return;

    // console.log(newItem);

    var newToDo = {
      id: 1,
      data: newItem,
      isCompleted: false
    }

    if (items.length > 0)
      newToDo.id = items[items.length - 1].id + 1;

    const arr = items;
    arr.push(newToDo);

    setItems(arr);
    // localStorage.setItem('list', JSON.stringify(items));
    setNewItem('');
    // console.log("acc",items);
  }

  const newItemHandler = (event) => {
    // console.log(event.target.className);
    if (inputData.length > 0 && (event.target.className=='btn' || event.key === 'Enter')) {
      setNewItem(inputData);
    };
  };

  const inputHandler = (e) => {
    setInputData(e.target.value);
  };

  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <ToDos
          deleteHandler={deleteHandler}
          items={items}
          taskCompleted={taskCompleted} />
      </div>

      <Input
        inputData={inputData}
        newItemHandler={newItemHandler}
        inputHandler={inputHandler}
        className='footer'
      />
    </div>
  );
}

export default App;
