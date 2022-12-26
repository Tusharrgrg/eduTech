const express = require("express");
const routes = express.Router();
const Detail = require("../models/Details");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");


routes.get("/", async(req,res)=>{
    const details = await Detail.findOne({"_id":"63a89af22970c62baff37076"});
    const sliders = await Slider.find();
    const services = await Service.find();
    
    // console.log(services);
    res.render("home", {details:details , sliders:sliders, services:services});
});

routes.get("/gallery", async(req,res)=>{
    res.render("gallery");
});

routes.post("/process-contact-form", async (req,res)=>{
    console.log(req.body);
    try{
        const data = await Contact.create(req.body);
        res.redirect("/");
    }catch(e){
        console.log(e);
        res.redirect("/");
    }
})

module.exports = routes;