import React, { useContext } from 'react'
import ListItem from './ListItem'
import AddItem from './AddItem'
import { TodoContext } from '../../context/TodoContext'

const List = () => {

  const { todos } = useContext(TodoContext)
//   console.log('todos', todos) 

  return (
    <div className='list-container'>
        <ul>
            { todos.map(item => 
                <ListItem item={item} key={item.num}/>
            )}
        </ul>
        <AddItem/>
    </div>
  )
}

export default List