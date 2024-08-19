import React from 'react'
import data from '../json/ex06.json'
import Ex06Card from '../components/Ex06Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex06 = () => {
    console.log('data')

    // 1. data.result 안에 있는 데이터들을 확인 후, 아이유/수지/나연에게 각각 Ex06Card를 부여하자.
    // 2. 우리가 Ex05에서 <li></li>태그를 반복시켜준 것처럼, 이 예제에서는 Ex06Card를 반복시켜주면 된다.
    // 3. props 개념을 통해 3개의 block에 각각 다른 값을 전달해준다.


        // 위 people 배열 안에서 나이가 30 이상인 사람만 출력
        let newResult = data.result.filter(item => item.birthYear <= 1994)
        console.log('newResult', newResult)


  return (
    <>
        <h1>목록</h1>
        <div style={{display : 'flex'}}>
            {data.result.map(item => <Ex06Card key={item.title} item={item}></Ex06Card>)}
        </div>

        <h1>1994년생 보다 나이가 많거나 같은 경우</h1>
        {/* 1. 우리가 가진 data.result 안에서 1994년생보다 나이가 많거나 같은 경우만
                따로 뽑아서 newResult 로 선언
            2. newResult를 기준으로 map 함수를 통해 카드 생성 
        */}
        <div style={{display : 'flex'}}>
            {newResult.map(item => <Ex06Card key={item.title} item={item}></Ex06Card>)}
        </div>
    </>
  )
}

export default Ex06