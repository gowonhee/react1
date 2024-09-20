import React from 'react'

const Introduce = () => {
  return (
    <div>
      <form className='aboutMeForm'>
        <div>About Me</div>
        <p className='aboutLine'>-----</p>
        <div className='aboutContent'>
          <div>
            <img src="/wonnie.jpg" className='profileImg'/>
          </div>
          <div className='aboutText'>
            <h4>고 원 희 <p>Web Developer</p></h4>
            <p>사용자 관점에서 개발하는 웹 개발자</p>

            <h5>Contact.</h5>
            <p>Email. ko0413hee@gmail.com</p>

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