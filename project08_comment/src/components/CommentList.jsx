import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useSelector } from 'react-redux'

const CommentList = (search) => {

  const post = useSelector(state => state.post)

  const filteredPosts = search
    ? post.filter(item => item.writer.includes(search))
    : post;

  return (
    <ListGroup variant="flush">
      {post.map((item, i)=> (
        <CommentItem key={i} item={item}/>
      ))}

      {filteredPosts.map((item, i)=> (
        <CommentItem key={i} item={item}/>
      ))}
      
    </ListGroup>
  )
}

export default CommentList