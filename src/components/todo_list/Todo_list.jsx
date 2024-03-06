import React from 'react';
import './todo.css';

function Todolist() {
  return (
    <div className='container'>
      <div className='list_data'>
        <h1>Shopping list</h1>
        <input type="text" name="enter item" id="user_input" placeholder='enter item' />
        <button id='add'>ADD</button>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </div>
  )
}

export default Todolist;