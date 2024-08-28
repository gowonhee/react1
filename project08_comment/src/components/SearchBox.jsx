import React, { useRef } from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'

const SearchBox = ({onSearch}) => {

  const searchRef = useRef()

  const handleSearch = ()=>{
    const search = searchRef.current.value;
    onSearch(search); 
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