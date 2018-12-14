const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

//Forma 1
//const routes = require('./routes/userRoute')

// settings
app.set('port', process.env.PORT || 3000)


// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())


// routes
/*Forma 1
app.use(routes)*/
//Forma 2
require('./routes/userRoute')(app)

// static files


// start the server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})