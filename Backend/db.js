// getting-started.js
const dotenv = require("dotenv") ;
const mongoose = require("mongoose") ;

// const mon_url ='mongodb+srv://Prath_4912:Ramila%404912@cluster0.czlgxbm.mongodb.net/ob' ;
// const mon_url ='mongodb://127.0.0.1:27017/Organic_Bananas' ;
dotenv.config({path : "./config/config.env"}) ;

const mon_url = process.env.MONGO_URL ;

connectMongo().catch(err => console.log(err));


async function connectMongo(){
    await mongoose.connect(mon_url ) ;
    console.log("connected to database")
  } ;

  
  module.exports = connectMongo ;

