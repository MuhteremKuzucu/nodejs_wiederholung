'use strict';

/* --------------------------------------------------------- *
                EXPRESSJS  - ROUTING
/* --------------------------------------------------------- */


const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT
/* --------------------------------------------------------- *
//? Router is special app for URL control in ExpressJS

// app.get('/', (req, res) =>{

//     res.send({
//         message: 'Merhaba Cohort DE-10'
//     })
// })


const router = express.Router();

router.get('/', (req, res) => res.send({ message: 'Home Page'}));
router.get('/about', (req, res) => res.send({ message: 'About Page'}));
router.get('/user/:id', (req, res) => res.send({ message: req.params.id}));


app.use(router)
/* --------------------------------------------------------- */

//const router = require('./routes/index.js');
//const router = require('./routes/index');
//const router = require('./routes/');
//app.use(router)
app.use(require('./routes'));


/* --------------------------------------------------------- */
app.listen(PORT, ()=> console.log('Running at: http://127.0.0.1:' + PORT))

