import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Footer = () => {

  const { isDark, setIsDark } = useContext(ModeContext)

  return (
    <div className='footer'
         style={{
            backgroundColor : isDark ? 'black' : 'lightgray'
         }}>
        <button className='button' onClick={()=>{setIsDark(!isDark)}}>
            {isDark? "라이트모드" : "다크모드" }
        </button>
    </div>
  )
}

export default Footer
