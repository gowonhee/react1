import React from 'react'

const Board = ({num, name}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={`/img/dice${num}.png`}></img>
    </div>
  )
}

export default Board
