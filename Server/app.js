require('./config/config');
require('./models/db');


const express= require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const rtsIndex =  require('./routes/index.routes');


var app=express();


//middleware
//bodyparser -> so that we can pass JSON data to nodejs applications
//app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

//To communicate between angular (port:4200) and Node(port:3000) cors will be more useful
app.use(cors());

app.use('/api',rtsIndex);


app.listen(process.env.PORT,() =>{console.log(`server started at port address: ${process.env.PORT}`)});




