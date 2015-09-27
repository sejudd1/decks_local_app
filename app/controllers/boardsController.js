var Board = require("../models/Board")


function index( req, res){
	Board.find( function( err, boards){
		if ( err ) {
			res.send( err )
		} else {
			res.json( boards )
		}
	});
}


function create( req, res ) {
  // make a new, empty user
  var board          = new Board()
	board.brand = req.body.brand
	board.size = req.body.size
	board.model = req.body.model
  //try to save this board to db
  board.save(function( err ){
    if ( err ) {
      res.json({ message: "There was an error"})
    } else {
      res.json({ message: "new board created"})
    }
  });
}

function show ( req, res ){
  Board.findById( req.params.board_id, function( err ){
    if ( err ) {
      res.send( err )
    } else {
      res.json( board )
    }
  });
}

function update( req, res ){
  // grab the board from the db
  Board.findById( req.params.board_id, function( err, board ){
    // if there is an error then display err message
    if ( err ) {
      res.send( err )
    }
    // if payload has a board, set the found board's name to be equal to it
		if(req.body.brand){
			board.brand = req.body.brand
		}
		if(req.body.size){
			board.size = req.body.size
		}
		if(req.body.model){
			board.model = req.body.model
		}

    board.save( function( err ){
      if ( err ) {
        res.send( err )
      } else {
        res.json({ message: "board updated"})
      }
    });

  });
}

function destroy( req, res){
  // delete the board with the id in the url
  Board.remove({ _id: req.params.board_id }, function(){
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
