var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	mongoose = require( 'mongoose' ),
	Shop = require( './app/models/Shop.js' );
	Board = require( './app/models/Board.js' );
	// Deck = require( './app/models/Deck.js' );

	mongoose.connect( 'localhost:27017/decks_local_app' )

//App configuration

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan( 'dev' ))


// tell app to use apiRoute when we go to the localhost:8080/api
app.use('/api', apiRouter)

//Run server
app.listen(8080)
console.log('Magic is happening on port 8080')
