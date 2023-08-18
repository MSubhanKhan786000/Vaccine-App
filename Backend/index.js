const express = require('express');
const mongoose = require("mongoose");
const port = 4000;
//
var userSignup = require('./routes/users/signup');
var userLogin = require('./routes/users/login');
var registerdata = require('./routes/users/registerdata');
var profileRouter = require("./routes/OnlyUserRoutes/profile");
//

var config = require("config");
var cors = require('cors');
var path = require('path');
var logger = require('morgan');

//
const app = express();

const bodyParser = require('body-parser');
//
const authorizationtoken = require('./middleware/authtoken');

// app.use(logger('dev'));
app.use(express.json());

// app.use(express.static(path.join(__dirname, 'public')));


app.use(cors());
app.use(logger('dev'));

app.use(bodyParser.json())
app.use("/",userSignup);
app.use("/",userLogin);
app.use("/",registerdata);
app.use('/OnlyUserRoutes/profile', profileRouter);




//
app.get('/',authorizationtoken,(req,res)=>{
    // console.log(req.user);
    res.send(`this is home page", ${req.user}`);
})
// app.post('/signup',(req,res)=>{
//     console.log(req.body);
//     res.send("This is signUp page");
// })


mongoose.connect(config.get("db"),{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{ console.log("connected to db")})
.catch((error)=>{console.log(error.message)});



app.listen(port,()=>{`server is running in port ${port}`})