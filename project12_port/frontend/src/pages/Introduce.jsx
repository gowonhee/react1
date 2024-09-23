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
            <br/>
            <div className='badge'>
              <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/>
              <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"  />
              <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
              <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/><br />
              <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/>
              <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"/>
              <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"/>
              <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>
            </div>
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
          <div className='otherSite'><FontAwesomeIcon icon={faGithub} size="2x"/>
            <p>Github</p>
            <br />
            <a href="https://github.com/gowonhee">github.com/gowonhee</a>
          </div>
          <div className='otherSite'>NaverBlog</div>
          <div className='otherSite'>Notion</div>
        </div>
      </form>
    </div>
  )
}

export default Introduce