var mongoose = require('mongoose');
var moment = require('moment');
var Quote = mongoose.model('Quote');

module.exports = {
    show: function (req, res){
        Quote.find(function (err, data){
            res.render('main', {quotes: data, moment: moment});
        }).sort({'createdAt': -1});
    },
    create: function (req, res){
        Quote.create(req.body, function (err){
            if(err) {console.log(err);}
            res.redirect('/main');
        })
    }
}
