"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require('../models/blogModel');

module.exports = {

    list: async (req, res) => {

        const result = await BlogCategory.find();

        res.status(200).send({
            error: false,
            result
        })
    },



    create: async (req, res) => {

        res.status().send({
            error: false
        })
    },

    read: async (req, res) => {

        res.status().send({
            error: false
        })
    },

    update: async (req, res) => {

        res.status().send({
            error: false
        })
    },

    delete: async (req, res) => {

        res.status().send({
            error: false
        })
    },
}