import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { TodoActions } from '../redux/reducers/todoSlice'

const TodoInput = () => {

  const addRef = useRef()
  const dispatch = useDispatch()
  

  const handleAddBtn = ()=>{
    console.log('handleAddBtn')
    console.log('고유한 값 출력', uuidv4)
    console.log(addRef.current.value)

    dispatch(TodoActions.addTodo({
      id:uuidv4(),
      test : addRef.current.value,
      complete:false
    }))


  }

  return (
    <div className='todo-inputbox'>
      <input type="text" className='todo-inputbox-input' ref={addRef}/>
      <input type="button" className='todo-inputbox-add-btn' 
            value='등록' onClick={handleAddBtn} />
    </div>
  )
}

export default TodoInput