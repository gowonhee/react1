import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col, Accordion, Dropdown, Card } from 'react-bootstrap'

const Movies = () => {

    const { popularMovies } = useSelector(state => state.movie)
    const [filter, setFilter] = useState([])


    /*
        자바스크립트 sort함수
        - 기본적으로 유니코드를 기반으로 정렬기준을 판단
        - compare 함수를 직접 구현하여 정렬

        [숫자비교]
        배열명.sort((a,b) => {
            return a-b;    // 오름차순
        });

        [문자열비교]
        대상.localCompare(비교할 문자열)

        반환값  < 0 : a가 b보다 앞으로 이동
        반환값 == 0 : 순서변동 X
        반환값 > 0 : b가 a보다 앞으로 이동
    */
   
    const movieSorted = (category, sortMethod) => {
        let arr = [1,2,3,4,5,6,7,8,9,10]
        console.log(arr.sort((a,b)=> a-b));
        
        // 1. 정렬 카테고리 분류
        // 2. 정렬 방식 분류

        // filter state의 값을 직접적으로 변경할 경우 React에서 state변화를 감지하지 못하기 때문에
        // 리렌더링되지 않으므로 새로운 변수에 보관해서 정렬처리 후 setState()함수로 초기화해줘야 한다. 
        let result = [...filter]

        if(category === '평점'){
            result = sortMethod === 'ASC'?
            result.sort((a,b)=> a.vote_average - b.vote_average):
            result.sort((a,b)=> b.vote_average - a.vote_average)
        }else if(category === '인기도'){
            result = sortMethod === 'ASC'?
            result.sort((a,b)=> a.popularity - b.popularity):
            result.sort((a,b)=> b.popularity - a.popularity)
        }else{
            result = sortMethod === 'ASC'?
            result.sort((a,b)=> a.title.localeCompare(b.title)): // 오름차순
            result.sort((a,b)=> b.title.localeCompare(a.title))  // 내림차순
        }

        setFilter(result)
    }

    

    useEffect(() => {
        console.log('popularMovies', popularMovies)

        if (popularMovies.length !== 0) {
            setFilter(popularMovies)
        }
    }, [])

    return (
        <div>

            {popularMovies.length >0 && (<>
                <Container>
                <Row>
                    <Col>
                        <h1>인기 영화 필터링</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>정렬</Accordion.Header>
                                <Accordion.Body>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                            정렬 방식을 선택해주세요.
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={()=>movieSorted('제목', 'ASC')}>제목 오름차순</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>movieSorted('제목', 'DESC')}>제목 내림차순</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>movieSorted('평점', 'ASC')}>평점 오름차순</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>movieSorted('평점', 'DESC')}>평점 내림차순</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>movieSorted('인기도', 'ASC')}>인기도 오름차순</Dropdown.Item>
                                            <Dropdown.Item onClick={()=>movieSorted('인기도', 'DESC')}>인기도 내림차순</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm={9} className='movie-card-list'>
                        {filter.map(item => (
                            <>
                                <Card style={{ width: '13rem' }} key={item.id}>
                                    <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`} />
                                    <Card.Body>
                                        <Card.Title>{item.title}</Card.Title>
                                        <Card.Text>
                                            개봉일 : {item.release_date}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </>
                        ))}
                    </Col>
                </Row>
            </Container>
            </>)}
           
        </div>
    )
}

export default Movies