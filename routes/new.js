const express = require("express");
const newFormRouter = express.Router();

newFormRouter.get("/new",(req,res)=>{
    res.render('newForm')
});

module.exports = newFormRouter;