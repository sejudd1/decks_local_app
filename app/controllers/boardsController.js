var Board = require("../models/Board")
//CRUD
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

		//show
		


	







}