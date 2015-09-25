var express = require('express'), 
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require( 'mongoose' ),
	Shop = require( './app/models/Shop.js' );
	// Deck = require( './app/models/Deck.js' );

	mongoose.connect( 'localhost:27017/decks_local_app' )

//App configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan( 'dev' ))


//Steak sauce

//Routes

//Create a router for the API
//set index for api router
// var apiRouter = express.Router();

// apiRouter.route('/shops')
// 	.get(function(req, res){
// 		Shop.find( function(err , shops ){
// 			if ( err ) {
// 				res.send( err )
// 			}
// 			res.json(users)
// 		})
// 	})

//tell app to use API route when we go to localhost:8080/api


//Run server
app.listen(8080)
console.log('Magic is happening on port 8080')








	