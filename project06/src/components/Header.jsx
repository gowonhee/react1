import React from 'react'

const Header = () => {
  return (
    <div className='header-box'>
      <div className='header-box-logo'>
        {/* 메인페이지로 이동할 수 있는 로고를 생성하시오 
        https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png
        */}
      </div>
      <div className='header-box-nav'>
        <ul className='header-box-nav-list'>
            {/* 각 메뉴 버튼 클릭 시, 메인은 /, 메뉴소개는 /menu/list로 이동 */}
            <li>메인</li>
            <li>메뉴소개</li>
        </ul>
      </div>
      <div className='header-box-util'>
        {/* auth 에 따라 다르게 보여지게 만들 것 
          - true : 로그아웃 / false : 로그인
          - 해당 버튼을 누르면 handleLogin 이라는 함수
          - handleLogin 이 하는 일 -> auth 토글
            로그아웃 눌렀을 때 -> auth 토글 + 메인창 이동
            로그인 눌렀을 때 -> 로그인창 이동
        */}

          <button>로그인</button>
          {/* <button>로그아웃</button> */}
      </div>
    </div>
  )
}

export default Header