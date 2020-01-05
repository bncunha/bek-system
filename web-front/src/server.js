const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');
const app = express();
const routes = express.Router();
const path = require('path');

/****************************** Router ***************************/
routes.get('*', function(req, res){
    res.sendFile('index.html', { root: __dirname + '/' });
});

/****************************** /Router ***************************/

app.use(express.static(__dirname + '/')); // Static (public) folder
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));// get information from html forms
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use('/', routes);
app.listen(8080, () => {
    console.log('Listen on')
    console.log(process.env.PORT ? process.env.PORT : 8080);
});