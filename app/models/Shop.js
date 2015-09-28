var mongoose 	= require('mongoose'),
		Schema 		= mongoose.Schema;

//set up Shop Schema
var ShopSchema = new Schema({
		shopname: { type: String, required: true, index: { unique: true }},
		street: { type: String, required: true},
		city: { type: String, required: true },
		phonenumber: String,
		hours: String,
		boards: [ 'BoardSchema' ]


})



module.exports = mongoose.model('Shop', ShopSchema)
