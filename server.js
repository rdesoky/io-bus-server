/**
 * Created by ramy on 9/2/2015.
 */

var express = require('express');
var express_app = express();
var httpServer = express_app.listen(9666,function(){
	console.log("Http server bound to port 9666");
});

require("io-bus")(httpServer);// attach io-bus to express server

express_app.use(express.static(__dirname + '/'));
