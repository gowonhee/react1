import React, { useRef } from 'react'
import {Row, Col, FloatingLabel, Button, Form} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postActions } from '../redux/reducer/postSlice'

const CommentForm = () => {

  const writerRef = useRef()
  const postRef = useRef()
  const dispatch = useDispatch()

  const handlePost = ()=>{
    console.log(writerRef.current.value, postRef.current.value)

    //toolkit ver
    dispatch(postActions.addPost({
        post : postRef.current.value,
        writer : writerRef.current.value
    }))

    // Old Redux ver
    // dispatch({type : "addPost", payload : 
    // {
    //   post : postRef.current.value,
    //   writer: writerRef.current.value
    // }
    // })

    // Post를 전송한 후, 안에 내용을 비워줌
    postRef.current.value = ""
    writerRef.current.value = ""

    // 내용으로 커서가 먼저 가도록 설정함
    postRef.current.focus()
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