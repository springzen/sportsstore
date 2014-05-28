/**
 * get connect dependency
 * @type {exports}
 */
var connect = require('connect');

/**
 * Dummy message for terminal to show we are starting
 */
console.log("Connecting...");

/**
 * start the server and connect to the given port
 */
connect.createServer(
    connect.static("./sportsstore")
).listen(5001);
