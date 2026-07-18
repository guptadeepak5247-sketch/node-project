// here we will stablish a connection with mongodb
const mongoose=require( "mongoose");
require('dotenv').config();
const mongoURL=process.env.MONGO_URL
//const mongoURL="mongodb://127.0.0.1:27017/hotels";// this is the url of our database hotel
//const mongoURL="mongodb+srv://deepak-123:<Deegu12#>@cluster0.jbg4qwu.mongodb.net/?appName=Cluster0";
// we will use this function to connect to the database
mongoose.connect(mongoURL);                              
// mongoose maintain a default connection object representing the mongoDB connection
const db=mongoose.connection;
db.on('connected',()=>{
  console.log("mongodb is connected successfully");
});
db.on('disconnected',()=>{
  console.log("mongodb server  is disconnected ");
})
module.exports=db;