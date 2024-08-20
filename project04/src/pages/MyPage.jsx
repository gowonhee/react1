import React from 'react'
import { Link } from 'react-router-dom'

const MyPage = () => {
  return (
    <div>MyPage
        <hr/>
        <h3>내가 쓴 글</h3>
        <div>
            <Link to="/product/1">
                <p>[1] sqld 시험 D-4.. </p>
            </Link>
            <Link to="/product/2?best=true&new=true">
                <p>[2] 엔믹스 신곡 너무 좋더라~ </p>
            </Link>
            <Link to="/product/3">
                <p>[3] 공모전 추천 받습니다. </p>
            </Link>
        </div>
    </div>
  )
}

export default MyPage