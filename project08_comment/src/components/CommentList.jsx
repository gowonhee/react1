import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useSelector } from 'react-redux'

const CommentList = () => {

  // toolkit
  let { post, keyword } = useSelector(state => state.post)

  // 가지고 오고 싶은 값이 여러개라면 아래와 같이 한번에 쓰는 것이 더 간편하다 !
  // Old Redux ver.
  // let { post, keyword } = useSelector(state => state)

  const [ resultList, setResultList ] = useState([])

  useEffect(()=>{
    if(keyword == ""){
      setResultList(post.slice().reverse())
    } else{
      setResultList(post.filter(item => item.writer.includes(keyword)))
    }
  },[post, keyword])


/* useState 사용하지 않은 풀이
    post.filter(
      (item) => {
        if (search === "")
          return true;
        return item.writer === search;
      }
    )
    post.filter(
      item => item.writer.includes(search)
    )
 */

  return (
    <ListGroup variant="flush">
      {resultList.map(item=> 
        <CommentItem key={item.post} item={item}/>
      )}
    </ListGroup>
  )
}

export default CommentList