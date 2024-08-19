import React, { useRef } from 'react'
import '../css/ex12.css'

const Ex12 = () => {

    const divRef = useRef()

    const changeSize = (size)=>{
        divRef.current.style.width = `${size}px`
        divRef.current.style.height = `${size}px`
    }

    const ckBtn = (e) =>{
        console.log('divRef', divRef.current)
        console.log('etarget', e.target)
        if(e.target.innerText === "작게"){
            changeSize(100)
        }else if(e.target.innerText === "원본"){
            changeSize(200)
        }else{
            changeSize(300)
        }
    }

  return (
    <div className='container'>
        <button onClick={ckBtn}>작게</button>
        <button onClick={ckBtn}>원본</button>
        <button onClick={ckBtn}>크게</button>

        <div className='square' ref={divRef}></div>
    </div>

  )
}

export default Ex12