const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/main");
const Detail = require("./models/Details");
const Slider = require("./models/Slider");
const Service = require("./models/Service");

const app = express();
app.set("view engine", "ejs");

mongoose.set("strictQuery", true);
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
//connect mongodb
mongoose.connect("mongodb://127.0.0.1:27017/EduTech", () => {
  //   Detail.create({
  //       name:"EduTech",
  //       iconUrl:"https://pixellogo.com/collections/free-3d-logos/products/mastodon-logo-3d-free-download-mastodon-3d-logo",
  //       links:[{
  //           label:"Home",
  //           url:"/"
  //       },
  //       {
  //           label:"Services",
  //           url:"/services"
  //       },
  //       {
  //           label:"Gallery",
  //           url:"/gallery"
  //       },
  //       {
  //           label:"About",
  //           url:"/about"
  //       },
  //       {
  //           label:"Contact Us",
  //           url:"/contact-us"
  //       },
  //   ]
  //   });
  //   Slider.create([
  //     {
  //       title: "Java",
  //       subTitle: "Java is secure language",
  //       imgUrl: "/images/caraousal1.jpg",
  //       class:"active"
  //     },
  //     {
  //       title: "Python",
  //       subTitle: "Python is most popular language",
  //       imgUrl: "/images/caraousal2.jpg",
  //       class:""
  //     },
  //     {
  //       title: "C++",
  //       subTitle: "C++ is most used language",
  //       imgUrl: "/images/caraousal3.jpg",
  //       class:""
  //     },
  //   ]);

//   Service.create(
//    {
//     icon: "fa-brands fa-java",
//     title: "Java",
//     description:
//       "Java is a popular programming language. Java is used to develop mobile apps, web apps, desktop apps, games and much more.",
//     linkText: "View",
//     link: "java.com",
//   },
//   {
//     icon: "fa-brands fa-python",
//     title: "Python",
//     description:
//       "Python is a popular programming language. Python can be used on a server to create web applications.",
//     linkText: "View",
//     link: "python.org",
//   },
//   {
//     icon: "fa-brands fa-square-js",
//     title: "JavaScript",
//     description:
//       "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.",
//     linkText: "View",
//     link: "javaScript.com",
//   }
//   );


});

app.use("/", routes);

app.listen(3000, (err) => {
  if (err) console.log(err);
  else console.log("server running on 3000 port");
});
