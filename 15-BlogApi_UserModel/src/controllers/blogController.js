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

        const result= await BlogCategory.create(req.body)

        res.status(201).send({
            error: false,
            result
        })
    },

    read: async (req, res) => {

        const result= await BlogCategory.findById(req.params.categoryId);

        res.status(200).send({
            error: false,
            result
        })
    },

    update: async (req, res) => {

        const result=await BlogCategory.updateOne({_id:req.params.categoryId},req.body);

        res.status().send({
            error: false,
            result,
            new:await BlogCategory.findById(req.params.categoryId)
        })
    },

    delete: async (req, res) => {

        const result=await BlogCategory.deleteOne({_id:req.params.categoryId})

        if(result.deletedCount) {
            res.sendStatus(204)
        } else{
            res.errorStatusCode = 404
            throw new Error('Data is not found or already deleted.')
        }

    },
}