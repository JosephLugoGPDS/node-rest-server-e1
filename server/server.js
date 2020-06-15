require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


//Routes

app.use(require('./routes/user'));


//DB
mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb://localhost:27017/producto',(err, res)=>{
    if ( err ) throw err;

    console.log(' DB online');

});

app.listen(port,()=>{
    console.log('Listened in port 3000');
});