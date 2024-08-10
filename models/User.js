const mongoose = require('mongoose') // mongoose 모듈을 가져온다

// user의 스키마를 지정하기 dto, vo같은 개념
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    emain: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

// 스키마를 모델로 감싸기 ('이름', 스키마)
const User = mongoose.model('User', userSchema)

// 다른 js에서도 사용할 수 있게 exports 설정
module.exports = {User}