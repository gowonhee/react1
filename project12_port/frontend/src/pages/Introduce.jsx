import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
            <p className='Gowonhee'>고 원 희
            <span>Web Developer</span></p>
            <h5>사용자 관점에서 개발하는 웹 개발자</h5>
            <br /><br/>
            <h6>Contact.</h6>
            <div className='contact-icons'>
              <p><FontAwesomeIcon icon={faEnvelope} /> ko0413hee@gmail.com </p>
              <p><FontAwesomeIcon icon={faPhone} /> 010.8786.9214</p>
              <p><FontAwesomeIcon icon={faLocationDot} /> REPUBLIC OF KOREA, GWANGJU</p>
            </div>
          </div>
        </div>
      </form>

      <form className='archiveForm'>
        <div className='aboutMe-Text'>Archive</div>
        <p className='aboutLine'>-----</p>
        <div className='link-div'>
          <div className='otherSite'><FontAwesomeIcon icon={faGithub} /></div>
          <div className='otherSite'>NaverBlog</div>
          <div className='otherSite'>Notion</div>
        </div>
      </form>
    </div>
  )
}

export default Introduce