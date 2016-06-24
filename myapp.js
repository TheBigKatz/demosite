var express = require('express');
var app = express();

app.get('/', function(request, response) {
  var name = request.query.name;
  response.render('hello.hbs', {
    title: 'Hello',
    name: name
  });
});
app.get('/about', function(request, response) {
  response.send('This is the second page. Only two more too go!');
});
app.get('/finalpage', function(request, response) {
  response.send('This is the final page before the form page. Enjoy the nothingness. ');
});
app.listen(3000, function() {
  console.log('Example site listening on port 3000');
});
