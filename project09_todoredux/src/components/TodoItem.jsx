import React, { useRef, useState } from 'react'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { TodoActions } from '../redux/reducers/todoSlice'

const TodoItem = ({item}) => {

  const dispatch = useDispatch()

  const handleCheckChange = () => {
    dispatch(TodoActions.checkChangeTodo({id : item.id}))
  }

  const handleDelete = () => {
    // confirm이 true 일때만 삭제할 것이므로, if문으로 감싸줄 것
    if(window.confirm('정말 삭제하시겠습니까?')){
      // console.log('삭제할 id', id)
      dispatch(TodoActions.deleteTodo({id : item.id}))
    }
  }

  // 아이콘 클릭 시 상태를 토글
  const [edit, setEdit] = useState(false)

  const handleSubmit = () => {
    dispatch(TodoActions.textChangeTodo({ id : item.id, text : newText }))
    setEdit(false)
  }
  const handleEditChange = () => {
    setEdit(true)
  }

  // 수정버튼을 눌렀을 때, 기존의 텍스트가 사라지지 않고 유지되도록 하기 위한 state
  const [newText, setNewText] = useState(item.text)

  return (
    <li className='todo-item'>

      {/* 미완료 - 완료를 구분하는 체크 버튼 */}
      {item.complete
      ? <FaCheckCircle 
          style={{ color : 'green' }} onClick={handleCheckChange}/> 
      : <FaRegCircle
          style={{ color : 'lightgray' }} onClick={handleCheckChange}/>
      }

      {" "}

      {/* 할일 기본 - 할일 완료 - 할일 수정을 구분하는 태그들  */}
      { edit 
      ? <input type='text' 
                className='todo-item-edit-input' 
                value={newText}
                onChange={(e) => {setNewText(e.target.value)}}
               />
      : (item.complete
        ? <span className='todo-item-content todo-item-content-checked'> {item.text}</span>
        : <span className='todo-item-content'> {item.text}</span>
        )
      }

      {!item.complete
      &&
      <>
        {edit
        ? <>
          {/* 수정 완료 버튼 */}
          <button className='todo-item-submit-btn' onClick={handleSubmit}>👍</button> 
          </>
        : <> 
            {/* 수정 버튼 */}
            <button className='todo-item-edit-btn' onClick={handleEditChange}>✍</button>
          </>
        }
      </>
      }

      {/* 삭제 버튼 */}
      {/* 매개변수가 있어야하므로 콜백 형태의 함수로 만들어줄 것! */}
      <button className='todo-item-delete-btn' onClick={()=>{ handleDelete(item.id) }}>🗑</button>

    </li>
  )
}

export default TodoItem