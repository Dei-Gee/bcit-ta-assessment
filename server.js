const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const calculations = require('./routes/api/calculations');
const path = require('path');

const port = process.env.PORT || 5000;

app.options('*', cors());


// cors headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', false);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
  
    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use('/api/calculations', calculations);

app.use(express.static('static'));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/static/index.html');
    //__dirname : It will resolve to your project folder.
  });

//serve static assets if in production
if(process.env.NODE_ENV === 'production')
{
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
