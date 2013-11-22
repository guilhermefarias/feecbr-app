var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hey, this work!!');
});

app.listen(3000,function(){
 	console.log('App serving on port 3000');
});


