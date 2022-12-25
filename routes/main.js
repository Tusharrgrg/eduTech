const express = require("express");
const routes = express.Router();
const Detail = require("../models/Details");

routes.get("/", async(req,res)=>{
    const details = await Detail.findOne({"_id":"63a89af22970c62baff37076"});

    console.log(details);
    res.render("home", {details:details});
})


module.exports = routes;