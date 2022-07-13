import './App.css';
import Input from './Input/input';
import { useState } from 'react';
import React from 'react'

function App() {
const [todo, setTodo] = useState([]);

function handleClick(text){
  const newToDo={
    id:todo.length +1,
    content: text
  }

  setTodo([...todo, newToDo])
  console.log(newToDo)
}
  return (
   <div>
   <Input/>
   </div>
  );
}

export default App;
