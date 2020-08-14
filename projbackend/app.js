require('dotenv').config()
const express = require('express');
const expressSession = require('express-session');
const passport = require('passport');
const flash = require('express-flash');
const mongoose = require('mongoose');

const app = express();

const port = 8000;

app.use(expressSession({
    secret: process.env.SECRET,
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
    .then(function(){
        console.log('DB CONNECTED')
    })

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(flash)


app.listen(port, function(){
    console.log(`App is upp and running at port ${port}`)
})