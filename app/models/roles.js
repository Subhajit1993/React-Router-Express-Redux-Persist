
//app/models/user.js
//load the things we need
var mongoose = require('mongoose');

//define the schema for our user model
var roleSchema = mongoose.Schema({
	_id:{ type: String},
	RoleName: String,
	PermittedPages: Array,
	Active: {type:Boolean, default:true},
	created_date:  {type:String, default:new Date()},
});


//create the model for users and expose it to our app
module.exports = mongoose.model('Role', roleSchema);