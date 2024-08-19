import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Header = () => {

  const {isDark} = useContext(ModeContext)
  return (
    <div className='header'
         style={{
            backgroundColor : isDark ? 'black' : 'skyblue',
            color : isDark ? 'white' : 'black'
         }}>
        <h1>쪼이 너무 짖어서 시끄러워.. 황태하나 줄까?</h1>
    </div>
  )
}

export default Header
