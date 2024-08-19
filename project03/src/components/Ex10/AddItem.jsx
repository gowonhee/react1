import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const AddItem = () => {

    const { newTodo, setNewTodo, handleNewTodoAdditon} = useContext(TodoContext)

  return (
    <div>
        <input type="text" 
        value = {newTodo}
        onChange={(e)=>{
            setNewTodo(e.target.value)
        }}/>
        <button onClick={handleNewTodoAdditon}>Add</button>
    </div>
  )
}

export default AddItem