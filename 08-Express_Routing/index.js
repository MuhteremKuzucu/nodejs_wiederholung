'use strict';
/* -------------------------------------------------------- *
               Express & Routing
/* -------------------------------------------------------- */

//* npm init -y => create package.json
//* npm i express dotenv

/* EXpressJs Start */

const express = require('express');

const app = express()

//? Env
require('dotenv').config()
const PORT = process.env.PORT;

/* -------------------------------------------------------- *




//? HTTP METHODS & URLS
// app.get('/', (req, res)=> res.end("called in 'get' method."));
// app.post('/', (req, res)=> res.end("called in 'post' method."));
// app.put('/', (req, res)=> res.end("called in 'put' method."));
// app.patch('/', (req, res)=> res.end("called in 'patch' method."));
// app.delete('/', (req, res)=> res.end("called in 'delete' method."));

//*Tüm metodlara izin ver
//app.all('/', (req, res)=> res.end("called in 'delete' method."));

//* app.route('url')
app.route('/')
   .get((req, res) => res.send('get'))
   .post((req, res) => res.send('post'))
   .put((req, res) => res.send('put'))
   .delete((req, res) => res.send('delete'));


/* -------------------------------------------------------- *

//? URL (Path) Options

app.get('/', (req, res)=> res.send("in 'root' path"))
app.get('/path', (req, res)=> res.send("in path"))

app.get('/abc(x?)123', (req, res)=> res.send("in abc(x?)123"))


app.get(/xyz/, (req, res)=> res.send("regexp /xyz/")) 

/* -------------------------------------------------------- *

//? URL Parameters
app.get('/blogs/:blogId/:author/search/*', (req, res) =>{

    console.log(req.url);

    res.send({
        blogId: req.params.blogId,
        query:req.query.title,
        url:{
            protocol: req.protocol,
            subdomains: req.subdomains,
            hostname: req.hostname,
            //baseUrl: req.baseUrl,
            params: req.params,
            query: req.query,
            path: req.path,
            origninalUrls: req.originalUrl

        }
    });
});

app.get('/user/:userId', (req, res)=>{
    res.send({
        params: req.params
    })
})

/* -------------------------------------------------------- *

//? Response Methods;
app.get('/', (req, res) => {

    // res.sendStatus(202)
    // res.send({
    //     error:false,
    //     msg:'Response Methods'
    // })

    res.status(202).send({
        error:false,
        msg:'Response Methods'
    })

    

})

//* Status Codes

app.get('/status-codes', (req, res) => res.send({ message: 'OK'}))
app.post('/status-codes', (req, res) => res.status(201).send({ message: 'Created'}))
app.put('/status-codes', (req, res) => res.status(202).send({ message: 'Accepted'}))
app.delete('/status-codes', (req, res) => res.status(204).send({ message: 'No Content'}))

/* -------------------------------------------------------- */

//? Download File;
app.get('/download', (req, res)=> res.download('./index.js'));




/* -------------------------------------------------------- */



app.listen(PORT, ()=> console.log('Running at:http://127.0.0.1:'+ PORT))











/* -------------------------------------------------------- */