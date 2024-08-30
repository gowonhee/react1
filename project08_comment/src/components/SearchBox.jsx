import React, { useRef } from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postActions } from '../redux/reducer/postSlice'

const SearchBox = () => {

  const searchRef = useRef()
  const dispatch = useDispatch()

  const handleSearch = ()=>{
    console.log(searchRef.current.value)

    // toolkit
    dispatch(postActions.searchKeyword(searchRef.current.value))

    // Old Redux ver
    // dispatch({type : "searchKeyword", payload : searchRef.current.value})
  }

  return (
    <div>
      <Row className="g-2">
        <Col md>
            <Form.Control type="text" placeholder="작성자 검색"  ref={searchRef}/>
        </Col>
        <Col md>
          <Button variant="primary" onClick={handleSearch}>Search</Button>
        </Col>
      </Row>
  </div>
  )
}

export default SearchBox