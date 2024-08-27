import React, { useEffect } from 'react'
import GoodsItem from '../components/GoodsItem'
import axios from 'axios'

const GoodsList = ({goods, setGoods}) => {

  useEffect(()=>{
    axios.get("http://localhost:3000/goods.json")
    .then(res => {
      // console.log('받아온 데이터', res.data.goods_list)
      setGoods(res.data.goods_list)
    })
  },[])

  return (
    <div className='goods-list'>
      {goods.map(item => (
        <GoodsItem key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default GoodsList