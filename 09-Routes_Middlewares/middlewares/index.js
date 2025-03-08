'use strict';

/* --------------------------------------------------------- *
                EXPRESSJS  - MIDDLEWARES
/* --------------------------------------------------------- *

const middeFn1 = (req, res, next) => {
    console.log('middleware function 1 started.');
    next()
};

const middeFn2 = (req, res, next) => {
    console.log('middleware function 2 started.');
    next()
};


module.exports = {middeFn1, middeFn2}

/* --------------------------------------------------------- */

module.exports.middeFn1 = (req, res, next) => {
    console.log('middleware function 1 started.');
    next()
};

module.exports.middeFn2 = (req, res, next) => {
    console.log('middleware function 2 started.');
    next()
};

/* --------------------------------------------------------- */

module.exports = {
    middeFn1: (req, res, next) => {
        console.log('middleware function 1 started.');
        next()
    },
    middeFn2: (req, res, next) => {
        console.log('middleware function 2 started.');
        next()
    },
}