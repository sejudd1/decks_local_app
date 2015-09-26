var mongoose  = require( 'mongoose' ),
    Schema    = mongoose.Schema;

// set up our board Schema
var BoardSchema = new Schema({
  brand: String,
  size: Number,
  model: String
});


module.exports = mongoose.model( 'Board', BoardSchema );
