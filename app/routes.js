module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('helloworld');
  });
  app.get('/test/sockettest', function(req, res) {
    console.log('got!');
    res.render('test/sockettest', {
      address: app.settings.address,
      port: app.settings.port
    }); 
  });
}

