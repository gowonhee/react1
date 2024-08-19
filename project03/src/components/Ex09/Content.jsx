import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Content = () => {

  const {isDark} = useContext(ModeContext)
  return (
    <div className='content'
         style = {{
            backgroundColor : isDark ? 'black' : 'white',
            color : isDark ? 'white' : 'black'
         }}>
        <h4>인생사 새옹지마, 아프지말고 건강만 하자</h4>
      
    </div>
  )
}

export default Content
