const express = require('express') // express 모듈을 가져온다
const app = express() // function을 만들어서 새로운 express앱을 만들고
const port = 3000 // 포트번호

const { User } = require("./models/user");
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // mongoose 모듈을 가져온다
const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

// application/json
app.use(bodyParser.json());

// 몽고디비에서 만든 클러스터를 가져온다
mongoose.connect(config.mongoURL,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('mongodb connected')).catch(err => console.log(err)) // then -> 성공하면, catch -> 실패하면 



// root디렉토리에 helloworld 실행되게 하기
app.get('/', (req, res) => {
  res.send('Hello World! 새해복많이받으')
})

app.post('/register', async (req, res) => {
  //회원가입시 필요 정보를 client에서 가져오면
  //데이터베이스에 삽입한다

  //body parser를 통해 body에 담긴 정보를 가져온다
  const user = new User(req.body)

  //mongoDB 메서드, user모델에 저장
  const result = await user.save().then(()=>{
    res.status(200).json({
      success: true
    })
  }).catch((err)=>{
    res.json({ success: false, err })
  })
})

// 3000번 포트를 가져와서 앱을 실행
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})