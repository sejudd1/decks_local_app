var Board = require("../models/Board")
//CRUD for Board
//index
function index (req, res){
	Board.find(function(err, boards))
		if (err){
			res.send(err)
		}
		res.json(boards)
		})
	})

	//create

		//make a new empty board
		var board = new Board()
		board.brand = req.body.brand
		board.size = req.body.size
		board.model = req.body.model 
		//set the empty boards brand name, size, and model
		board.save(function(err){
			if(err){
				return res.json({message: "Computer says No!"})
			}
			//if not error tell them they successfully created a new board
			res.json({message: "New Board Created!"})

		})

		//show board
		Board.findById(req.params.board_id, function(err, board){
			if (err){
				res.send(err)
			}
			res.json(board)
		})

		//update board 
		Board.findById(req.params.board_id, function(err, user){
			if(err){
				res.send(err)
			}
			if(req.body.brand){
				board.brand = req.body.brand
			}
			if(req.body.size){
				board.size = req.body.size
			}
			if(req.body.model){
				board.model = req.body.model
			}
			board.save(function(err){
				if(err){
					res.send(err)
				}
				res.json({message: "Board Updated"})
			})

		})

		//destroy board

		Board.remove({
			_id: req.params.board_id
		}, function(err, board){
			if(err) res.send(err)
			res.json({message: "You deleted a board."})
		})
	}
}
//export it!
module.exports = {
	index: index,
	create: create,
	show: show,
	update: update,
	destroy: destroy,
}


	







