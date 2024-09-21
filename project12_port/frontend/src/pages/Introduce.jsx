import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Introduce = () => {
  return (
    <div>
      <form className='aboutMeForm'>
        <div className='aboutMe-Text'>About Me</div>
        <p className='aboutLine'>-----</p>
        <div className='aboutContent'>
          <div>
            <img src="/wonnie.jpg" className='profileImg'/>
          </div>
          <div className='aboutText'>
            <p className='Gowonhee'>고 원 희</p>
            <p>Web Developer</p> 
            <h5>사용자 관점에서 개발하는 웹 개발자</h5>
            <br />
            <h6>Contact.</h6>
            <FontAwesomeIcon icon={faEnvelope} /> ko0413hee@gmail.com <br />
            <FontAwesomeIcon icon={faPhone} /> 010.8786.9214

          </div>
        </div>
      </form>

      <form className='archiveForm'>
        <div>Archive</div>
      </form>
    </div>
  )
}

export default Introduce