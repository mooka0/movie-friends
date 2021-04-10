const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const bodyParser = require("body-parser");
require('dotenv').config();


var corsOptions = {
  origin: "http://localhost:5000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


const path = require("path");
 

// const bodyParser = require("body-parser");
 const cookieParser = require("cookie-parser");

 const config = require("./config/key");

// const mongoose = require("mongoose");
const connect = mongoose.connect(config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));



// //to not get any deprecation warning or error
// //support parsing of application/x-www-form-urlencoded post data
 app.use(bodyParser.urlencoded({ extended: true }));
// //to get json data
// // support parsing of application/json type post data
 app.use(bodyParser.json());
 app.use(cookieParser());

app.use('/api/users', require('./routes/users'));

// route request into route/favorite
app.use('/api/favorite', require('./routes/favorite'));


// //use this to show the image you have in node js server to client (react js)
 app.use('/uploads', express.static('uploads'));

// // Serve static assets if in production
if (process.env.NODE_ENV === "production") {

//   // Set static folder   
//   // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

//   // index.html for all page routes    html or routing and naviagtion
  
  


  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  res.send('hello world')
});
}

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});