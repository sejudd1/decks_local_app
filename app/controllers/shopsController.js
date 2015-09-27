var Shop = require("../models/Shop")

function index(req, res){
	Shop.find(function(err,users){
		if(err) res.send(err)
		res.json(users)
	})
}


function create( req, res ) {
  // make a new, empty user
  var shop          = new Shop()
  user.shopname     = req.body.shopname
  user.street       = req.body.street
  user.city         = req.body.city
  user.phonenumber  = req.body.phonenumber
  user.hours        = req.body.hours

  //try to save this shop to db
  shop.save(function( err ){
    if ( err ) {
      res.json({ message: "There was an error"})
    } else {
      res.json({ message: "new shop created"})
    }
  });
}

function show ( req, res ){
  Shop.findById( req.params.shop_id, function( err ){
    if ( err ) {
      res.send( err )
    } else {
      res.json( shop )
    }
  });
}

function update( req, res ){
  // grab the shop from the db
  Shop.findById( req.params.shop_id, function( err, shop ){
    // if there is an error then display err message
    if ( err ) {
      res.send( err )
    }
    // if payload has a shop, set the found shop's name to be equal to it
    if ( req.body.shopname) {
      shop.shopname = req.body.shopname
    }

    if ( req.body.street) {
      shop.street = req.body.street
    }

    if ( req.body.city) {
      shop.city = req.body.city
    }

    if ( req.body.phonenumber) {
      shop.phonenumber = req.body.phonenumber
    }

    if ( req.body.hours) {
      shop.hours = req.body.hours
    }

    shop.save( function( err ){
      if ( err ) {
        res.send( err )
      } else {
        res.json({ message: "shop updated"})
      }
    });

  });
}

function destroy( req, res){
  // delete the shop with the id in the url
  Shop.remove({ _id: req.params.shop_id }, function(){
    if ( err ) {
      res.send( err )
    } else {
      res.json({ message: "deleted"})
    }
  });
}

module.exports = {
  index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy
}
