const { log } = require('console');
const express = require('express')
const router = express.Router()
const path = require('path')
const conn = require('../config/db')

router.get('/', (res, req) => {
    console.log('main router');
    res.sendFile(path.join(__dirname, '..', '..', 'frontend', 'build', 'index.html'))
})


// Test.jsx에서 보내온 데이터를 확인하는 backend router
// req, res 순서 바꾸지마라...제발...
router.post('/getData', (req, res) => {
    console.log('getdata bouter', req.body);
    let {id, pw, data} = req.body

let sql = "INSERT INTO LINK_MEMBER VALUES(?,?,?)"
conn.query(sql, [id, pw, data], (err, rows) => {
    console.log('rows');
    if(rows){
        //회원가입 성공
        res.json({result : 'success'})
    } else {
        //회원가입 실패...
    }
})
    // LINK_MEMBER 라는 테이블 안에 ID : 'admin', PW : '123', USER_NAME은 우리가 받아온 데이터로 저장
    // res.json({result : 'success'})

})

// 로그인을 위한 서버 라우터
router.post('/getLoginData', (req, res)=>{
    console.log('getLoginData', req.body);
    let {id, pw} = req.body

    let sql = "SELECT ID FROM LINK_MEMBER WHERE ID=? AND PW=?"
    conn.query(sql, [id, pw], (err,rows)=>{
        console.log('rows', rows)

        if(rows.length > 0){

            req.session.userId = id;
            console.log('req.session', req.session.userId)
            // 로그인 성공
            res.json({result : 'success', id : id})
        }else [
            // 로그인 실패
            res.json({result : 'failed'})
        ]
    })
})

router.get('/logoutData', (req, res)=> {
    console.log('logoutData Router')
    req.session.destroy(()=>{
        console.log(req.session)
        res.json({id : req.session})
    })
})

router.get('/getSession', (req, res)=>{
    console.log('getSession Router', req.session.userId)
    res.json({ id: req.session.userId })
})

module.exports = router;