var mongoose = require('mongoose');
// require the fs module for loading model files
var fs = require('fs');
// connect mongoose
mongoose.connect('mongodb://localhost/quotes_mod');
// create a variable that points to the models path
var models_path = (__dirname + '/../models');
// read all of thefiles in models_path and require each js file
fs.readdirSync(models_path).forEach(function (file){
    if(file.indexOf('.js') >= 0){
        // require the file
        require(models_path + '/' + file);
    }
});
