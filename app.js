// import module //
const express = require('express');
const path = require('path');
const hbs= require('hbs'); 
const app = express();
const port = 5000;  

// const static_path = path.join(__dirname,"./public")

// app.use(express.static(static_path));

// EXPRESS SPECIFIC STUFF
app.use("/static", express.static("static"));
app.use(express.urlencoded());

// PUG SPECIFIC STUFF
app.set("view engine", "hbs");
app.set("views",path.join(__dirname,"templets/views"));
hbs.registerPartials(path.join(__dirname,"templets/partials"))

// Endpoint
app.get("/",(req,res)=>{
    res.render("index")
});

app.get("/weather",(req,res)=>{
    res.render("weather")
});

app.get("/about",(req,res)=>{
    res.render("about")
});


// Start The Server
app.listen(port,(req,res) => {
    console.log(`The application is started successfully at port ${port}`);
});