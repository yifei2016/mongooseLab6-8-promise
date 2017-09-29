
//Du som användare ska alltså kunna skriva in sökvägen till sidan, samt /movies eller /movies/id-nummer
//och din fil ska då använda den informationen för att antingen hämta ut en lista på alla filmer
//eller bara den film som matchar id-numret (eller vad du nu vill använda som sökning)
'use strict';
module.exports = function(app) {
	var todoList = require('../controller.js');

	app.route('/movies')
		.get(todoList.list_all_tasks);


	app.route('/movies/:taskId')
		.get(todoList.list_matched_task);

 
	
}
