const express = require("express");
const bodyParser = require("body-parser")
const mongoose = require("mongoose");

const keys = require("./config/config")

const authRoute = require('./routes/auth')
const workerRoute = require('./routes/worker')
const roleRoute = require('./routes/role');
const analyticsRoute = require('./routes/analytics')
const taskRoute = require('./routes/task')
const projectRoute = require('./routes/project');
const config = require("./config/config");

const app = express();

mongoose.connect(config.ATLAS_URI)
    .then(()=> console.log("MongoDB connect"))
    .catch((e)=> console.log(e))


app.use(require("morgan")("dev")) //для отображения в терминале запросов и ответов

//для чтения json-данных из запроса
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use(require("cors")()) //обрабатывать запросы клиента с другого домена


//защита роутингов
const passport = require('passport')
app.use(passport.initialize())
require('./middleware/passport')(passport)



app.use('/api/auth',authRoute)
app.use('/api/worker',workerRoute)
app.use('/api/role',roleRoute)
app.use('/api/analytics',analyticsRoute)
app.use('/api/task',taskRoute)
app.use('/api/project',projectRoute)


module.exports = app;