var express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    port = 3000;
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/client/static'))
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

// Define where to find route file and pass app
var routes = require('./server/config/routes.js')(app);

app.listen(port, function(){
    console.log('running on', port);
})
