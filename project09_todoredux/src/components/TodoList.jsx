import React from 'react'
import TodoItem from './TodoItem'

const TodoList = () => {
  return (
    <div className='todo-list'>
      <p>해야할 일 : 0개</p>
      <ul className='todo-list-ul'>
        <TodoItem/>
      </ul>
    </div>
  )
}

export default TodoList