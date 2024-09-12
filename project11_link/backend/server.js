const express = require('express')
const app = express()

const indexRouter = require('./routes/index')
// const indexRouter = require('./routes') 도 가능.
// routes 폴더 안의 파일 이름이 index인 경우 경로를 작성할 때 생략할 수 있으나, 파일이름이 다른 경우엔 정확하게 작성해야 한다.



// 정적인 파일을 가져오기 위한 세팅
const path = require('path')
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))
//맥이나 다른 운영체제에선 ../ 절대경로를 안쓸 수도 있으므로 path.join() 사용

// CORS 오류 처리를 위한 모듈 가져오기
// 1. npm i cors
// 2. require

/* 
    CORS (Cross - Origin - Resourcew - Sharing)
    = 교차 출처 리소스 공유 정책

    < Origin>
    = 출처

    ex) https://localhost:3000/123?search=hello
        * https:// : 프로토콜
        * localhost : 호스트
        * 3000 : 포트번호
        * Origin == 프로토콜 + 호스트 + 포트번호

    < CORS 해결법 >
    브라우저에게 요청
    node에서는 cors라는 미들웨어 사용

    app.use(cors({
        origin : '*'
    }))
*/

const cors = require('cors')
app.use(cors())
// JSON 형태의 데이터 해석
app.use(express.json())
// form-urlencoded 형태의 데이터 해석
app.use(express.urlencoded({extended : false}))
// 홈페이지 만들 때 걍 위의 3개는 기본적으로 적어준다고 생각하셈.

// 세션 설정
const session = require('express-session')
const fileStore = require('session-file-store')(session)

let fileStoreOptions = {
    path : "./sessions", // 세션 파일 저장 경로
    reapInterval : 10, // 세션 정리 주기 (10초)
}

// 세션 미들웨어 설정
app.use(session({
    httpOnly : true, // http를 통해서만 세션에 접근
    resave : false, // 세션을 항상 재저장하지 않도록
    secret : 'ais', // 세션 암호화
    saveUninitialized : false, // 초기화 되지 않은 세션은 저장하지 않도록
    store : new fileStore(fileStoreOptions), // 어디에 저장할건지
    cookie : {maxAge : 30000} // 쿠키의 유효기간 (30초)
}))

app.use('/', indexRouter)

// 설정한 포트값이 있다면 그를 부르고, 없다면 3001번을 불러오겠다.
app.set('port', process.env.PORT || 3001)

app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`);
    // 보통 적어두는 멘트
})