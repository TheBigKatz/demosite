var express = require('express');
var app = express();

app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function(request, response) {
  var name = request.query.name;
  response.render('hello.hbs', {
    title: 'Hello',
    name: name
  });
});
app.get('/about', function(request, response) {
  response.send('This is just an example app demonstrating simple routing in express.');
});
app.get('/finalpage', function(request, response) {
  response.render('This is the final page before the form page. Enjoy the nothingness. ');
});

app.listen(3000, function() {
  console.log('Example site listening on port 3000');
});
