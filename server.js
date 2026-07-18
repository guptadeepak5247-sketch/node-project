const express=require('express');
const db=require('./db.js');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.json());         //req.body daal dega data ko jo bhi json format me hoga
require('dotenv').config();
const port=process.env.PORT;
app.listen(port, () => {
  console.log('Server is running on http://localhost:3000');   // for checking the server is running or not we can use this
})
const routerperson=require('./router/routerperson.js');
app.use('/',routerperson);
const routermenu=require('./router/menurouter.js');
app.use('/',routermenu);