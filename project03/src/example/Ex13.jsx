import React, { useRef } from 'react'

const Ex13 = () => {
    
    const pdfRef = useRef()

    const changeFile = (num)=>{
        console.log(pdfRef.current.src)
        pdfRef.current.src = `/pdf/pdfFile${num}.pdf`
    }

    const changePdf = (e)=>{
        console.log('changePdf', changePdf.current)
        if(pdfRef.current.src === "http://localhost:3000/pdf/pdfFile1.pdf"){
            changeFile(2)
        }else{
            changeFile(1)
        }
    }


  return (
    <div style={{height : '100vh'}}>
        <button onClick={changePdf}>pdf변경하기</button>
        <iframe
            src="/pdf/pdfFile1.pdf"
            width='100%'
            height='90%'
            ref={pdfRef}
        ></iframe>
    </div>
  )
}

export default Ex13