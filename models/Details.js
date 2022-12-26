// details schema of header of website

const mongoose = require("mongoose");
const Detail = mongoose.Schema({
    name:String,
    iconUrl:String,
    links:[{
        label:String,
        url:String
    }]
})
module.exports = mongoose.model("detail",Detail);