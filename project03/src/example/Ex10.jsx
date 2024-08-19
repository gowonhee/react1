import React, { useState } from 'react'
import '../css/ex10.css'
import List from '../components/Ex10/List'
import { TodoContext } from '../context/TodoContext'

const Ex10 = () => {

    // 할일들 목록 배열
    const [todos, setTodos] = useState([
        { text : '물 마시기', num : 1, completed : false },
        { text : '곱창 먹기', num : 2, completed : false }
    ])

    // 새로운 할일 텍스트
    const [newTodo, setNewTodo] = useState("")
        
    /** todos 배열에 새로운 할일 객체를 추가해주는 함수 */
    const handleNewTodoAdditon = () => {
        console.log('handleNewTodoAddition Func', newTodo)

        // newTodo에 담긴 할 일을 todos 배열에 새로 추가해주겠다.

        // 스프레드 문법 (...)
        // ...기존배열, 추가할내용
        // 기존 배열이 있다면 유지시킨 후 그 뒤로 내용을 추가한다.

        setTodos([...todos, 
            {
            text : newTodo,
            completed : false,
            num : todos.length > 0 ? todos[todos.length-1].num+1 : 1
        }])

        setNewTodo("")
    }

    /** 사용자가 선택한 todo 데이터를 배열에서 삭제하는 함수 */
    const handleTodoDelete = (num) => {
        console.log('handleTodoDelete Func', num)
        const filteredTodo = todos.filter(item => item.num != num)
        setTodos(filteredTodo)
    }

    /** 사용자가 선택한 todo 데이터를 완료했을 때 체크 & 밑줄 */
    const handleTodoToggle = (num) => {
        console.log('handleTodoToggle Func')

        const targetTodo = todos.find(item => item.num == num)
        console.log('targetTodo', targetTodo)

        if(targetTodo){
            targetTodo.completed = !targetTodo.completed
            setTodos([...todos])
        }
    }


  return (
    <TodoContext.Provider value={{ todos, setTodos, handleNewTodoAdditon, newTodo, setNewTodo, handleTodoDelete,
        handleTodoToggle
    }}>
        <div className='todo-container'>
            <h1>Todo List</h1>
            <List/>
        </div>
    </TodoContext.Provider>
  )
}

export default Ex10