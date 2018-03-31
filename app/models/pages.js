
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');

//define the schema for our user model
var pageSchema = mongoose.Schema({
	_id:{ type: String},
	PageName: String,
	Url: String,
	Active: {type:Boolean, default:true},
	Type:String,
	ParentPage:{type:String},
	created_date:  {type:String, default:new Date()},
});


//create the model for users and expose it to our app
module.exports = mongoose.model('Page', pageSchema);