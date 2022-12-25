const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/main");
const Detail = require("./models/Details");

const app = express();
app.set("view engine", "ejs");

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/EduTech",()=>{
    // Detail.create({
    //     name:"EduTech",
    //     iconUrl:"https://pixellogo.com/collections/free-3d-logos/products/mastodon-logo-3d-free-download-mastodon-3d-logo",
    //     links:[{
    //         label:"Home",
    //         url:"/"
    //     },
    //     {
    //         label:"Services",
    //         url:"/services"
    //     },
    //     {
    //         label:"Gallery",
    //         url:"/gallery"
    //     },
    //     {
    //         label:"About",
    //         url:"/about"
    //     },
    //     {
    //         label:"Contact Us",
    //         url:"/contact-us"
    //     },
    // ]
    // })
});

app.use(express.static("public"));
app.use("/", routes);


app.listen(3000, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("server running on 3000 port");
    }
})