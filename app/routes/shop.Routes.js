var express           = require( 'express' ),
    apiRouter2        = express.Router(),
    shopsController   = require( '../controllers/shopsController.js'),
    Shop              = require( '../models/Shop.js');

apiRouter.use(function( req, res, next ){
  // DO AUTHENTICATION HERE!
  console.log('Someone is using our API');


  next()
});

// set up index/get for api router
apiRouter.route( '/shops' )
.get( shopsController.index )
// for creating a new shop
.post( shopsController.create )

apiRouter.route( '/shops/:shop_id' )
// this is the show action
.get( shopsController.show )

// this is the update action
.put( shopsController.update )

// thi is the destroy function
.delete( shopsController.destroy )

module.exports = apiRouter2
