var connect = require('connect');
console.log("Connecting...");
connect.createServer(
	connect.static("./sportsstore")
).listen(5001);
