const express = require('express') // express 모듈을 가져온다
const app = express() // function을 만들어서 새로운 express앱을 만들고
const port = 3000 // 포트번호

const mongoose = require('mongoose') // mongoose 모듈을 가져온다

// 몽고디비에서 만든 클러스터를 가져온다
mongoose.connect('mongodb+srv://hykim1221:gksdud12!@cluster0.up0ge.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('mongodb connected')).catch(err => console.log(err)) // then -> 성공하면, catch -> 실패하면 



// root디렉토리에 helloworld 실행되게 하기
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// 3000번 포트를 가져와서 앱을 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})