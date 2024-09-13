const express = require('express')
const app = express()

app.use('/', ()=>{
    console.log('main')
})

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), ()=>{
    console.log(`Server is running on ${app.get('port')}`)
})