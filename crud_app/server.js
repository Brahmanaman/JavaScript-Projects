const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const hbs = require("hbs");

const app = express();
 
//PORT
dotenv.config({path:'config.env'});
const PORT = process.env.PORT || 8080 ;

//Middleware
const staticpath = path.join(__dirname, '');

const templatepath = path.join(__dirname, '../views');
const partialpath = path.join(__dirname, '../views/includes');



//set view engine
app.set('view engine', 'hbs');
app.set('views', templatepath);
hbs.registerPartials(partialpath);

//log requests
app.use(morgan('tiny'));

//parse request to body-parser
app.use(bodyparser.urlencoded({extended:true}))


//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.get('/',(req, res)=>{
    res.render("index.hbs"); 
})


app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})