import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CommentItem = ({item}) => {
  
  return (
    <ListGroup.Item>
    <b>{item.post}</b>
    {"  "}|{"  "}
    <span>작성자 : {item.writer}</span>
</ListGroup.Item>
  )
}

export default CommentItem