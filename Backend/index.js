const express = require("express") ;
const dotenv =  require("dotenv") ; 
const cors = require("cors") ;
var bodyParser = require('body-parser');
const app = express() ; 


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const connectMongo = require("./db")
connectMongo ;

dotenv.config({path : "./config/config.env"}) ;

const PORT = process.env.PORT ;

app.use(cors()) ; 
app.use(express.json()) ;  // request data from body as a middleware
app.use(express.urlencoded({extended : true})) ;

app.use("/api/payment" , require("./routes/payment")) ;

app.use('/api/admin' , require("./routes/admin")) ;

app.use("/api/auth" , require("./routes/auth")) ;

app.use("/api/cart" , require("./routes/Cart")) ;

app.use("/api/product" , require("./routes/product")) ;
app.use("/api/wishlist" , require("./routes/Wishlist")) ;


app.listen(PORT , ()=>{
    console.log("Server Started at" + PORT)
}) 

