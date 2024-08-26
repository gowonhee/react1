import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({item}) => {

  const nav = useNavigate();
  

  return (
    <div className='product-container' onClick={()=>{
      nav("/detail/" + item.no)
      // nav(`/detail/${item.no}`)
    }}>
        <img width='100px' src={item.src}/>
        <p>{item.title}</p>
        <p>{item.price}원 </p>
    </div>
  )
}

export default ProductItem