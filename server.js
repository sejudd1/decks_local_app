var express	= require( 'express' ),
    app		= express(),
    bodyParser 	= require( 'body-parser' ),
    morgan 	= require( 'morgan' ),
    mongoose 	= require( 'mongoose' ),
    Shop 	= require( './app/models/Shop.js' ),
    Board	= require( './app/models/Board.js' ),
    apiRouter  	= require( './app/routes/board.Routes.js' ),
    apiRouter2 	= require( './app/routes/shop.Routes.js' ),
    port = process.env.PORT || 8080,
    DB = process.env.DATABASE_URL || 'localhost:27017/decks_local_app';


mongoose.connect( DB );


//App configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan( 'dev' ));


// tell app to use apiRoute when we go to the localhost:8080/api
app.use( '/api', apiRouter );
app.use( '/api', apiRouter2 );

//Run server
app.listen(port)
console.log( 'Magic is happening on port ' + port )

