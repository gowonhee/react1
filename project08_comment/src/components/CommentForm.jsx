import React, { useRef } from 'react'
import {Row, Col, FloatingLabel, Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const CommentForm = () => {

  const writerRef = useRef()
  const postRef = useRef()
  const dispatch = useDispatch()


  const handlePost = ()=>{
    console.log(writerRef.current.value, postRef.current.value)
    dispatch({type : "addPost", payload : 
    {
      post : postRef.current.value,
      writer: writerRef.current.value
    }
    })
  }

  return (
    <>
      <Row className="g-2">
      <Col xs={12} md={8}>
          <FloatingLabel controlId="floatingInputGrid" label="내용">
            <Form.Control type="text" placeholder="Comment" ref={postRef} />
          </FloatingLabel>
        </Col>
        <Col xs={6} md={4}>
          <FloatingLabel controlId="floatingInputGrid" label="작성자">
            <Form.Control type="text" placeholder="김광주" ref={writerRef} />
          </FloatingLabel>
        </Col>
      
      </Row>
      <div className="d-grid gap-2" >
        <Button variant="primary" onClick={handlePost}>
          Post
        </Button>
      </div>
    </>
    
  )
}

export default CommentForm