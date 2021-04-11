const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const config = require("./config/key");
const configureRoutes = require("./routes")
const stripe = require('stripe')('sk_test_51Idm5GFYHKs1KtshFqdmgmrnml45E7LbUugqXReu4jGpi61GkPnOMSGbwor9A5JeLgiO07gsaAr0XtXYvn80Pusn00NaxiY8M8');

const dotenv = require("dotenv");
// configureRoutes(app);
dotenv.config()



const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGODB_URI || config.mongoURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));

app.use(cors());

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));

// route request into route/favorite
app.use('/api/favorite', require('./routes/favorite'));


//use this to show the image you have in node js server to client (react js)
//https://stackoverflow.com/questions/48914987/send-image-path-from-node-js-express-server-to-react-client
app.use('/uploads', express.static('uploads'));

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {

  // Set static folder   
  // All the javascript and css files will be read and served from this folder
  app.use(express.static("client/build"));

  // index.html for all page routes    html or routing and naviagtion
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"));
  });
}

// Stripe 

//enable cors
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//generate payment request for a card payer
app.post('/stripe', async (req, res) => {

  //user sends price along with request
  const userPrice = parseInt(req.body.price)*100;

  //create a payment intent
  const intent = await stripe.paymentIntents.create({
    
    //use the specified price
    amount: userPrice,
    currency: 'usd'

  });

  //respond with the client secret and id of the new paymentintent
  res.json({client_secret: intent.client_secret, intent_id:intent.id});

})

//handle payment confirmations
app.post('/confirm-payment', async (req, res) => {

  //extract payment type from the client request
  const paymentType = String(req.body.payment_type);

  //handle confirmed stripe transaction
  if (paymentType == "stripe") {

    //get payment id for stripe
    const clientid = String(req.body.payment_id);

    //get the transaction based on the provided id
    stripe.paymentIntents.retrieve(
      clientid,
      function(err, paymentIntent) {

        //handle errors
        if (err){
          console.log(err);
        }
        
        //respond to the client that the server confirmed the transaction
        if (paymentIntent.status === 'succeeded') {

        
          
          console.log("confirmed stripe payment: " + clientid);
          res.json({success: true});
        } else {
          res.json({success: false});
        }
      }
    );
  } 
  
})

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Server Listening on ${port}`)
});