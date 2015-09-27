var express = require( 'express' )
	apiRouter = express.Router()
	boardsController = require( '../controllers/boardsController' )
	Board = require( '../models/Board.js' )
	
apiRouter.use(function(req, res, next){
	//Do Authenication Here!
	console.log( 'Someone is using our API, we will authenticate them here' )
	//if not logged in res.json({message: "please log in"})
	//else, next ()
	next()
})

//set up index/get for api router
apiRouter.route( '/boards' )
	.get(boardsController.index)
	//for creating a new board
	.post(boardsController.create)

apiRouter.route( 'boards/:boards_id' )
	//this is the show action
	.get(boardsController.show)

	//this is the update action
	.put(boardsController.update)

	//this is the desstroy function
	.delete(boardsController.destroy)

module.exports = apiRouter
