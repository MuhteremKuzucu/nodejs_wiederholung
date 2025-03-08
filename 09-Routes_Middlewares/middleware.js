'use strict';

/* --------------------------------------------------------- *
                EXPRESSJS  - MIDDLEWARES
/* --------------------------------------------------------- */

const express = require('express');
const app = express()

require('dotenv').config();
const PORT = process.env.PORT;
/* --------------------------------------------------------- *
//? Middleware function must has three parameters.

//Middleware
app.get('/', (req, res, next)=> {

    console.log('Middleware started');

    next();
})



// Route:
app.get('/', (req, res)=>{

    console.log('Route started');

    res.send({
        message: "Hello Cohort DE-10"
    })
})

/* --------------------------------------------------------- *

//Middleware
app.get('/', (req, res, next)=> {
    
    if(req.query.username){
        req.username = req.query?.username
        next()
    } else {
        res.send({
            message: 'username ist required'
        })
    }

})

// Route:
app.get('/', (req, res)=>{
    
    res.send({
        message:'Hello' + req.username
    })
})

/* --------------------------------------------------------- *

app.get('/', (req, res, next) => {
    req.message1 = 'middleware-1 started'
    next()
})
app.get('/', (req, res, next) => {
     req.message2 = 'middleware-2 started'
    next()
})
app.get('/', (req, res, next) => {
     req.message3 = 'middleware-3 started'
    next()
})
app.get('/', (req, res, next) => {
     req.message4 = 'middleware-4 started'
    next()
})


app.get('/', (req, res) => {
    res.send({
        message1: req.message1,
        message2: req.message2,
        message3: req.message3,
        message4: req.message4,
    
    })
})
/* --------------------------------------------------------- *

const middeFn1 = (req, res, next) => {
    console.log('middleware function 1 started.');
    next()
};

const middeFn2 = (req, res, next) => {
    console.log('middleware function 2 started.');
    next()
};

//* use middleware function;

// app.use(middeFn1)
// app.use(middeFn2)

//app.use(middeFn1, middeFn2)
//app.use([middeFn1,middeFn2])
app.get('/abc', middeFn1)
app.use('/abc', middeFn1)


app.post('/abc', (req, res) =>{
    res.send({
        message:'Hello cohort DE-10'
    })
})
/* --------------------------------------------------------- */
//? Import from other file
const {middleFn1, middleFn2} = require('./middlewares')
app.use(middleFn1, middleFn2)

app.post('/abc', (req, res) =>{
    res.send({
        message:'Hello cohort DE-10'
    })
})


app.listen(PORT, () => console.log('Running at : http://127.0.0.1:' + PORT))