import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/ex18.css"
import { Button } from 'react-bootstrap';
import axios from 'axios'

const Ex18 = () => {

    const cityList = ['Seoul', 'Japan', 'Paris'];

    /* url에 있는 데이터를 가져와서 도시별 세팅을 해보자
        - 화면의 첫 렌더링 직후 'gwangju' 데이터가 화면에 뜨도록
        - 버튼을 클릭했을 때는 내가 누른 그 버튼에 대한 데이터가 화면에 뜨도록

        - 함수 2개 : getData, handleCity
        - getData : url을 연결해서 데이터를 가져오는 일 (axios)
        - handleCity : 도시를 세팅하는 작업 (기본값 : gwangju)

        - state 3개 : city, tmep, cloud

        1. getData 호출 시, url을 선언하고 axios를 통해 데이터를 불러온다.
        2. 데이터 내에서 평균 온도 - 273 ==> 섭씨온도
            데이터 내에서 구름의 양을 파악 가능
            - 90보다 크면 매우흐림
            - 60보다 크면 흐림
            - 30보다 크면 약간 흐림
            - (그외에) 맑음

        3. 화면 최초 렌더링 => gwangju로 getData 호출
            버튼 클릭 시, 버튼 안에 있는 내용을 기반으로 getData 호출
    */

    const [city, setCity] = useState('gwangju')
    const [temp, setTemp] = useState(0)
    const [cloud, setCloud] = useState(0)
    
    const handleCity = (e) => {
        console.log(e.target.innerText)
        setCity(e.target.innerText)
    }

    const getData = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f245b128bd71d1e0bcf2b363e1bf47f4`

        axios.get(url)
        .then(res => {
            console.log('res', parseInt(res.data.main.temp-273))
            setTemp(parseInt(res.data.main.temp)-273)

            console.log(res.data.clouds.all)
            if(res.data.clouds.all > 90){
                setCloud("매우 흐림")
            }else if(90 >= res.data.clouds.all > 60){
                setCloud("흐림")
            }else if(60 >= res.data.clouds.all > 30){
                setCloud("약간 흐림")
            }else{
                setCloud("맑음")
            }
        })
    }

    useEffect(()=>{
        getData()

    },[city])

  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨날씨🌤</h1>
            <div className='weather-data'>
                <h3>{city}</h3>
                <h1>{temp}°C</h1>
                <h4>{cloud}</h4>
            </div>
            <div>
                {cityList.map(item =>
                    <Button variant='light' key={item} onClick={handleCity}>{item}</Button>
                )}
                
            </div>
        </div>
    </div>
  )
}

export default Ex18