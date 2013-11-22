var express = require('express');
var exphbs = require('express3-handlebars');
var app = express();


app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(request, response, next){
	response.render('home');
});

app.get('/photos', function(request, response, next){
	response.render('photos', {
		photos: [{
			'title': 'photo one',
			'src': 'http://www.brasil-turismo.com/imagens/bandeiras/bandeira-dobrasil.gif',
			'link': ''
		}, {
			'title': 'photo two',
			'src': 'http://www.brasil-turismo.com/imagens/bandeiras/bandeira-dobrasil.gif',
			'link': ''
		}, {
			'title': 'photo three',
			'src': 'http://www.brasil-turismo.com/imagens/bandeiras/bandeira-dobrasil.gif',
			'link': ''
		}, {
			'title': 'photo four',
			'src': 'http://www.brasil-turismo.com/imagens/bandeiras/bandeira-dobrasil.gif',
			'link': ''
		}]
	});
});

app.listen(3000,function(request, response, next){
 	console.log('App serving on port 3000');
});


