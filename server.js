
if(process.env.NODE_ENV !== 'production'){
    //brings in variables from .env
    require('dotenv').config()
}

// how we import the express library
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')


app.set('view engine', 'ejs')
// create a folder called 'views' and this is where they will all go. 
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('publiic'))
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

// Settinig up connection for MongoDB
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParse: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/authors', authorRouter)


app.listen(process.env.PORT || 3000)