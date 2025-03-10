"use strict";
/* -------------------------------------------------------
    EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */
/* 
 * npm init -y
 * npm install express dotenv 
 * echo PORT=8000 > .env
 * cat > .gitignore && paste gitignore content & ctrl+c
 * nodemon
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- *

//? throw
app.get('/user/:id', (req, res) => {

   
    
    const id = req.params.id

    if(isNaN(id)) {
        res.errorStatusCode = 400
        throw new Error('ID is not a number', {cause: 'params.id=' + id})
    } else {
        res.send({
            error: false,
            id
        });
    }
});
/* ------------------------------------------------------- *
//? try-catch

app.get('/user/:id', (req, res) => {
    
    const id = req.params.id

    try {
        if(isNaN(id)) {
            throw new Error('ID is not a number')
        } else {
            res.send({
                error: false,
                id
            });
        }
        
    } catch (err) {
        // console.log(error);
        // res.send({
        //     error: true,
        //     message: error.message
        // })
        //* to send this error to error handler middleware
        next(err)
        
    }

    
});
/* ------------------------------------------------------- *
//? async-functions

const asyncFn = async () =>{

    throw new Error('Created error in async-fn')
}

app.get('/async', async(req, res, next) =>{
    await asyncFn()
        .then()
        .catch(next)
})

/* ------------------------------------------------------- */
//? express-async-errors
require('express-async-errors');

app.get('/async', async(req, res, next) =>{
    res.errorStatusCode = 400
    throw new Error ('Created error in self-async-fn')
})


/* ------------------------------------------------------- */

//? Error Handler Middleware
//* Error handler kodların en altında bulunmalı

const errorHandler = (err, req, res, next) =>{

    console.log('error handler worked');
    const statusCode = res.errorStatusCode ?? 500

    res.status(statusCode).send({
        error: true,
        message: err.message,
        cause: err.cause, // This discribes the reason of the error
        //stack: err.stack // Error Details
    })
};

app.use(errorHandler);


/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));