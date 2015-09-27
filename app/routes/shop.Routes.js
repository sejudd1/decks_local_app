var express = require( 'express' ),
    apiRouter = express.Router(),
    shopController = require( '../controllers/shopController.js'),
    Shop = require( '../models/Shop.js');

apiRouter.use(function( req, res, next ){
  // DO AUTHENTICATION HERE!
  console.log('Someone is using our API');

  next()
});

// set up index/get for api router
apiRouter.route( '/shops' )
.get( shopController.index )
// for creating a new shop
.post( shopController.create )

apiRouter.route( '/shops/:shop_id')
// this is the show action
.get( shopController.shop )

// this is the update action
.put( shopController.update )

// thi is the destroy function
.delete( shopController )


module.exports = apiRouter
