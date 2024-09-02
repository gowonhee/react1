import React, { useEffect, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useDispatch } from 'react-redux'
import { TodoActions } from '../redux/reducers/todoSlice'

const TodoInput = () => {

  // DOM 요소를 참조해서 접근하기 위해 useRef 선언
  const addRef = useRef()

  // store 에 있는 state를 변경하기 위한 요청 -> useDispatch
  const dispatch = useDispatch()
  
  // 화면이 렌더링 된 직후 실행할 로직
  useEffect(()=>{
    // 첫 화면 진입부터 focus 작업을 해주겠다 ! (inputRef에서 참조하고 있는 DOM 요소에 포커싱 )
    addRef.current.focus()
  },[])

  // 함수 선언
  const handleAddBtn = ()=>{
    console.log('handleAddBtn', addRef.current.value)
    console.log('고유한 값 출력', uuidv4)
    console.log(addRef.current.value)

    // store 안에 있는 reducer를 호출
    // 객체 형태로 전송
    dispatch(TodoActions.addTodo({
      id : uuidv4(),
      text : addRef.current.value,
      complete : false  // 완료 했는지 안했는지 확인
    }))


    // 입력된 내용을 비우고 + 포커싱
    addRef.current.value = ""
    addRef.current.focus()
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