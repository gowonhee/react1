import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {

  const {num} = useParams()
  console.log('num', num)

  console.log('list', list.filter(item => item.no == num)[0])
  let newList = list.filter(item => item.no == num)[0]

  return (
    <div className='list-container '>
      <div className='detail-item'>
          <h3>{newList.title}</h3>
          <img src={newList.src} width="200px"/>
          <p>
            <span>가격 : {newList.price}원</span>

            <br />
            {newList.delivery == "free"
            ? <span>배송비 무료</span>
            : <span>배송비 : {newList.delivery}원</span>
            }
          </p>
        <Link to ='/list'> <p>목록으로 돌아가기</p> </Link>
    </div>
    </div>
  )
}

export default ProductDetail