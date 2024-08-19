import React, { useEffect, useState } from 'react'

const Ex16 = () => {
    const pos = ['왼쪽', '정면', '오른쪽']
    const [myChoice, setMyChoice] = useState("")
    const [otherChoice, setOtherChoice] = useState("")

    const [result, setResult] = useState('게임 시작 전')
    const [round, setRound] = useState(1)

    const posRandom = (e) => {
        console.log(e.target.innerText)
        setMyChoice(e.target.innerText)

        console.log(pos[parseInt(Math.random()*3)])
        setOtherChoice(pos[parseInt(Math.random()*3)])

        setRound(round+1)
    }

    useEffect(()=>{
        console.log('round', round)
        if(round >1){
            if(myChoice == otherChoice){
                setResult('승리!')
            }else{
                setResult('나의 패배')
            }
        }
    },[round])

    return (
        <div>
            <h1>참참참</h1>
            <p>나의 선택 : {myChoice}</p>
            <p>상대의 고개 : {otherChoice}</p>
            <b>{result}</b>
            <hr />
            {pos.map(item => <button key={item} onClick={posRandom}>{item}</button>)}
        </div>
    )
}

export default Ex16